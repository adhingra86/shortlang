import { supabase } from "@/lib/supabase/supabase";
import { Category } from "@/types";

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
