import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ slug, image, name }) {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="space-y-4 rounded-lg border border-gray-300 bg-white py-6">
        <figure className="mx-auto size-32 overflow-hidden rounded-full drop-shadow-lg">
          <Image
            width={100}
            height={100}
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${image}`}
            alt={name}
            className="h-full w-full rounded object-cover object-center"
          />
        </figure>
        <div className="mt-3 text-center text-sm font-semibold uppercase">
          {name}
        </div>
      </div>
    </Link>
  );
}
