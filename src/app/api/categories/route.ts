import { getCategories } from "@/lib/categoryService";

export async function GET() {
  const categories = await getCategories();

  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}
