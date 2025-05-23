"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const storedLanguage = localStorage.getItem("language");

  router.push("/choose-language");

  if (storedLanguage) {
    router.push("/dashboard");
  }
}
