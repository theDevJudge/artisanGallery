import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
const domain = "https://utfs.io/f";

const mockData = [
  "0385c051-c673-47d7-9936-00a0c7f56c4c-3q905z.jpg",
  "2184b181-45f0-4b8b-8cab-d6a65349f200-bhk2lc.jpg",
  "cf67a279-8631-4447-8887-9cdd21712b26-rm6i6v.jpg",
];

const mockImage = mockData.map((image, index) => ({
  id: index + 1,
  url: `${domain}/${image}`,
}));

export default function HomePage() {
  return (
    <main className="flex justify-center align-middle">
      <div className="flex flex-wrap gap-4">
        {[...mockImage, ...mockImage, ...mockImage].map((image) => (
          <div key={image.id} className="">
            <Image
              src={image.url}
              alt="image"
              className="h-48 w-48"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
