"use client";

import { useQuery } from "@tanstack/react-query";
import { Flex, Text, Title } from "@mantine/core";

import CardComponent from "@/components/card";
import { CategoriesIcon } from "@/components/categoriesIcon";
import { fetchPhrases } from "../api/phrases/route";

async function fetchCategories() {
  const response = await fetch("/api/categories");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<any>({
    queryKey: ["greetings"],
    queryFn: fetchCategories,
  });
  const storedLanguage = localStorage.getItem("language")?.replace(/"/g, '').trim();;

  if (isLoading || !storedLanguage) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Title size="20px" className="mb-4 font-normal">
        Categories
      </Title>
      <Flex gap="md">
        {categories[storedLanguage as string]?.map((category: any) => (
          <a
            key={category.id}
            onClick={() => fetchPhrases(category.id)}
          >
            <CardComponent>
              <CategoriesIcon
                category={category.name}
                width={32}
                height={32}
              />
              <Text className="mt-2" size="lg">
                {category.name}
              </Text>
            </CardComponent>
          </a>
        ))}
      </Flex>
    </section>
  );
}
