import { getLanguages } from "@/lib/languageService";

export async function GET() {
  const languages = await getLanguages();

  return new Response(JSON.stringify(languages), {
    headers: { "Content-Type": "application/json" },
  });
}
