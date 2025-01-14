import { supabase } from "@/lib/supabase/supabase";
import { Phrase } from "@/types";

export async function fetchPhrases(categoryId?: number): Promise<Phrase[]> {
  const { data, error } = await supabase
    .from("phrases")
    .select("*")
    .eq("category_id", categoryId);

  if (error) {
    throw new Error(error.message);
  }

  console.log(data, "phrases");

  return data;
}
