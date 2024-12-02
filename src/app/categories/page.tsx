"use client";

import CardComponent from "@/components/card";
import { CategoriesIcon } from "@/components/categoriesIcon";
import { LanguageCode } from "@/types";
import { Flex, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories(languageCode: LanguageCode) {
  const sanitizedCode = languageCode.replace(/['"]+/g, "");

  const response = await fetch(`/api/categories?languageCode=${sanitizedCode}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}

export default function Categories() {
  const selectedLanguageCode = window.localStorage.getItem("language");

  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(selectedLanguageCode as LanguageCode),
  });

  console.log("categories", categories);

  return (
    <section>
      <Title size="20px" className="mb-4 font-normal">
        Categories
      </Title>
      <Flex gap="md">
        {categories?.map((category: any) => (
          <CardComponent key={category.id}>
            <CategoriesIcon category={category.name} width={32} height={32} />
            <Text className="mt-2" size="lg">
              {category.name}
            </Text>
          </CardComponent>
        ))}
      </Flex>
    </section>
  );
}
