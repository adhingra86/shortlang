import { promises as fs } from "fs";

export async function getLanguages() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/languages.json",
    "utf8"
  );
  const data = JSON.parse(file);
  return data;
}
