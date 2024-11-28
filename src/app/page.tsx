"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex, Text, Title } from "@mantine/core";

import { Language, LanguageCode } from "@/types";
import { LanguageIcon } from "@/components/languageIcon";
import Logo from "@/assets/logo.png";

async function fetchLanguages() {
  const response = await fetch("/api/languages");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      router.push("/dashboard");
    }
  }, []);

  const {
    data: languages,
    error,
    isLoading,
  } = useQuery<Language[]>({
    queryKey: ["languages"], // Unique key for caching
    queryFn: fetchLanguages, // Function to fetch data
  });

  const setLanguage = (languageCode: LanguageCode): void => {
    localStorage.setItem("language", JSON.stringify(languageCode));
    router.push("/dashboard");
  };

  return (
    <div className="flex mt-10 mx-20 items-center flex-col ">
      <Image width={300} src={Logo} alt="Shortlang logo" className="mb-10" />
      <Title size="30px" className="mb-10 text-center">
        Choose a language to start learning
      </Title>

      <Flex gap={20} align={"center"} wrap={"wrap"} justify={"center"}>
        {languages?.map((language) => (
          <Link
            href=""
            onClick={() => setLanguage(language.code)}
            key={language.id}
          >
            <Card
              withBorder={true}
              className="min-w-[300px] min-h-[200px] items-center justify-center hover:bg-slate-100 rounded-2xl"
            >
              <Text size="xl">{language.nativeName}</Text>
              <LanguageIcon language={language} />
            </Card>
          </Link>
        ))}
      </Flex>
    </div>
  );
}
