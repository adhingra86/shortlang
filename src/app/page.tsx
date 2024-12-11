"use client";

import { useSession } from "next-auth/react";
import Login from "@/features/login/login";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/choose-language");
  }

  return <Login />;
}
