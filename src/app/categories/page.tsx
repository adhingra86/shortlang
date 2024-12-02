"use client";

import { LanguageCode } from "@/types";
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

  return (
    <section>
      <h1>Categories</h1>
    </section>
  );
}
