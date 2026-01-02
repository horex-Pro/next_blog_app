import Image from "next/image";
import Link from "next/link";
import React from "react";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <Link href={`/blogs/${slug}`}>
      <Image
        src={coverImageUrl}
        fill
        className=" object-cover object-center hover:scale-110 transition-all duration-300  ease-in-out"
        alt={title}
        quality={80}
      />
    </Link>
  );
}

export default CoverImage;
