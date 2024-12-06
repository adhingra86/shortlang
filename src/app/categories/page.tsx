"use client";

import CardComponent from "@/components/card";
import { CategoriesIcon } from "@/components/categoriesIcon";
import { Flex, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/categories/route";
import { Category } from "@/types";

export default function Categories() {
  const selectedLanguageCode = window.localStorage.getItem("language");

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<Category[]>({
    queryKey: ["greetings"],
    queryFn: () => fetchCategories(),
  });

  console.log("categories", categories);

  return (
    <section>
      <Title size="20px" className="mb-4 font-normal">
        Categories
      </Title>
      <Flex gap="md">
        {categories?.map((category) => (
          <CardComponent key={category.id}>
            <CategoriesIcon category={category.title} width={32} height={32} />
            <Text className="mt-2" size="lg">
              {category.title}
            </Text>
          </CardComponent>
        ))}
      </Flex>
    </section>
  );
}
