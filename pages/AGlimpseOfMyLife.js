"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function AGlimpseOfMyLife() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/my_life_images");
        const data = await response.json();
        if (data.success) {
          setImages(data.data);
        } else {
          console.error("Failed to fetch images");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-4 py-8 w-max">
          {images.map((img, index) => (
            <div
              key={index}
              className={`
                group relative text-center aspect-[3/4] w-44
                rounded-[12px] overflow-hidden
                transition-all duration-200 ease-in-out
                ${
                  index % 2 === 0
                    ? "[transform:scale(1)_rotate(1.3deg)_translateZ(0)]"
                    : "[transform:scale(1)_rotate(-1.3deg)_translateZ(0)]"
                }
                hover:[transform:scale(1.1)_rotate(0deg)_translateZ(0)]
              `}
            >
              <Image
                src={img.url}
                alt={img.display_name || "A glimpse of my life"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 flex items-end transition-opacity duration-300">
                <p className="text-[14px] font-bold p-[10px] break-words whitespace-normal text-left text-white font-sans">
                  {img.display_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
