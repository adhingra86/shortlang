"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Flex, Text, Title } from "@mantine/core";

import { Language, LanguageCode } from "@/types";
import { LanguageIcon } from "@/components/languageIcon";
import Logo from "@/assets/logo.png";
import CardComponent from "@/components/card";

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
    queryKey: ["languages"],
    queryFn: fetchLanguages,
  });

  const setLanguage = (languageCode: LanguageCode): void => {
    console.log("languageCode", languageCode);
    localStorage.setItem("language", JSON.stringify(languageCode));
    router.push("/dashboard");
    console.log("language set complete");
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
            onClick={(e) => {
              e.preventDefault();
              setLanguage(language.code)
            }}
            key={language.id}
          >
            <CardComponent>
              <LanguageIcon language={language} />
              <Text size="xl">{language.nativeName}</Text>
            </CardComponent>
          </Link>
        ))}
      </Flex>
    </div>
  );
}
