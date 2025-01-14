"use client";

import { useQuery } from "@tanstack/react-query";
import { Flex, Text, Title } from "@mantine/core";

import CardComponent from "@/components/card";
import { CategoriesIcon } from "@/components/categoriesIcon";
import { fetchCategories } from "../api/categories/route";
import { Category, Phrase } from "@/types";
import { fetchPhrases } from "../api/phrases/route";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<Category[]>({
    queryKey: ["greetings"],
    queryFn: () => fetchCategories(),
  });

  return (
    <section>
      <Title size="20px" className="mb-4 font-normal">
        Categories
      </Title>
      <Flex gap="md">
        {categories?.map((category) => (
          <a
            key={category.category_id}
            onClick={() => fetchPhrases(category.category_id)}
          >
            <CardComponent>
              <CategoriesIcon
                category={category.title}
                width={32}
                height={32}
              />
              <Text className="mt-2" size="lg">
                {category.title}
              </Text>
            </CardComponent>
          </a>
        ))}
      </Flex>
    </section>
  );
}
