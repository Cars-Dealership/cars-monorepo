import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className=" h-svh grid grid-cols-2 gap-2 items-center">
      <div className=" pl-28 flex flex-col gap-6">
        <div className="font-medium text-xl">
          The most Luxurious Cars in one collection
        </div>
        <div>
          <h1 className=" font-bold text-6xl mb-5">Car Rental</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            natus itaque autem soluta a? Error, odio sed quo hic animi beatae
            quae omnis magnam sint laboriosam doloribus qui quod provident.
          </p>
        </div>
        <div>
          <Button className=" bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-sm text-[17px] font-medium">
            Get Started
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/image.png"
          alt="adverts car"
          width={800}
          height={800}
          className=""
        />
      </div>
    </div>
  );
}
