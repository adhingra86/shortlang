import { LanguageCode } from "@/types";
import { promises as fs } from "fs";

export async function getCategories(languageCode?: LanguageCode) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/categories.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return languageCode ? data[languageCode] : data;
}
