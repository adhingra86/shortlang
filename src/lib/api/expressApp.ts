import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

// Helper function to load JSON files
const loadData = (filename: string) => {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
};

// Route to fetch categories
app.get("/languages", (req, res) => {
  const categories = loadData("../../data/languages.json");
  res.json(categories);
});
