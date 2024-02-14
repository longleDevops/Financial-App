"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

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