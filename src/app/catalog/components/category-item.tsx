import { Category } from "@prisma/client";

import Image from "next/image";
import Link from "next/link";

interface CategotyItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategotyItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="from-[#5033C3]-# flex h-[150px0] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r to-[#4c23ed69]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
