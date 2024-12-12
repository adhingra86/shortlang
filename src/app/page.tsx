"use client";

import { useSession } from "next-auth/react";
import Login from "@/features/login/login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const storedLanguage = localStorage.getItem("language");

  if (session) {
    router.push("/choose-language");
  }

  if (storedLanguage) {
    router.push("/dashboard");
  }

  return <Login />;
}
