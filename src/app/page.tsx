"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      router.push("/dashboard");
    } else {
      router.push("/choose-language");
    }
  }, []);

  return <></>;
}
