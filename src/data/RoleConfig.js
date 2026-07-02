import { User, Store, Shield } from "lucide-react";

export const roleConfig = {
  user: {
    iconName: "User",
    icon: User,
    label: "User",
    color: "purple",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    borderColor: "border-purple-500",
  },
  seller: {
    iconName: "Store",
    icon: Store,
    label: "Seller",
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    borderColor: "border-blue-500",
  },
  admin: {
    iconName: "Shield",
    icon: Shield,
    label: "Admin",
    color: "red",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    borderColor: "border-red-500",
  },
};

export default roleConfig;
