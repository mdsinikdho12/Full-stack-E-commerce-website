import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/config/db";
import usermodel from "@/lib/models/usermodel";
import bcrypt from "bcrypt";

export const authOptions = {
  // OUR Providers array
  providers: [
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // email provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        await connectDB();

        const user = await usermodel
          .findOne({
            email: credentials.email,
          })
          .select("+password");

        console.log("User found:", user);
        console.log("Password field:", user?.password);

        if (!user) {
          throw new Error("User not found");
        }

        if (!user.password) {
          throw new Error("Please set a password or login with Google");
        }

        try {
          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isMatch) {
            throw new Error("Wrong password!");
          }
        } catch (error) {
          if (error.message === "Wrong password!") {
            throw error;
          }
          throw new Error("Password comparison failed");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },

    async signIn({ user, account }) {
      await connectDB();

      if (account.provider === "google") {
        const existingUser = await usermodel.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await usermodel.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: "google",
          });
        }
      }

      return true;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
