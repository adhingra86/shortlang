import { promises as fs } from "fs";

export async function getCategories() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/categories.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
