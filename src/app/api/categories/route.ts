import { getCategories } from "@/lib/categoryService";
import { LanguageCode } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const languageCode = searchParams.get("languageCode") as LanguageCode;

  const categories: Promise<any> = await getCategories(languageCode);

  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}
