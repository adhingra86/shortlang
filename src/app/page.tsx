import { getCategories } from "@/lib/dataservice";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex mt-10 ml-20">
      {categories["nl"].map((category) => (
        <li key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </li>
      ))}
    </div>
  );
}
