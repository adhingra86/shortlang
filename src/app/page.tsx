"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, Flex, Text, Title } from "@mantine/core";

import { Language } from "@/types";
import { LanguageIcon } from "@/components/languageIcon";

async function fetchLanguages() {
  const response = await fetch("/api/languages");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export default function Home() {
  const {
    data: languages,
    error,
    isLoading,
  } = useQuery<Language[]>({
    queryKey: ["languages"], // Unique key for caching
    queryFn: fetchLanguages, // Function to fetch data
  });

  return (
    <div className="flex mt-10 mx-20 align-middle flex-col">
      <Title size="30px" className="mb-10 text-center">
        Choose a language
      </Title>

      <Flex gap={20} align={"center"} wrap={"wrap"} justify={"center"}>
        {languages?.map((language) => (
          <Card
            withBorder={true}
            key={language.id}
            className="min-w-[300px] min-h-[200px] items-center justify-center hover:bg-slate-100"
          >
            <Text size="xl">{language.name}</Text>
            <LanguageIcon language={language} />
          </Card>
        ))}
      </Flex>
    </div>
  );
}
