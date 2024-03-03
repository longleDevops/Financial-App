"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

/**
 * This component renders the current user avatar.
 * It will load the user information (containing URL to the user image) from clerk, then it renders the image using the loaded information.
 */
export const UserAvatar = () => {
  const { user } = useUser();
  if (!user) return
  return (
    <Image
      src={user.imageUrl}
      alt="user image"
      height={30}
      width={30}
      className="object-contain rounded-full"
    />
  );
};