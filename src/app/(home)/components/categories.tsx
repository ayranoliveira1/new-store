import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const category = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {category.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
