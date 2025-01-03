"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Merriweather } from "next/font/google";
import { cn } from "@/lib/utils";

const meriwe = Merriweather({
  variable: "--rubik_Vinyl",
  weight: ["400"],
  subsets: ["latin"],
});

// style={{ fontFamily: "var(--Merriweather)" }}

const links = [
  { id: 1, serv: "Home" },
  { id: 2, serv: "About" },
  { id: 3, serv: "Testimonials" },
  { id: 4, serv: "Services" },
  { id: 5, serv: "contacts" },
];

export default function NavbaPage() {
  const router = useRouter();
  // const useParams = useSearchParams();
  // const { id } = useParams();

  return (
    <div className=" fixed top-0 left-0 w-full z-50 bg-white flex flex-row items-center justify-between px-8 py-4 shadow-md">
      <div
        className={`font-bold text-xl text-orange-400 cursor-pointer ${cn(
          meriwe.variable
        )}`}
        style={{ fontFamily: "var(--rubik_Vinyl)" }}
        onClick={() => {
          router.push("/");
        }}
      >
        Cars Rentals
      </div>
      <div className="flex gap-10">
        {links.map((el) => (
          <ul key={el.id}>
            <li
              className="hover:cursor-pointer text-slate-800 transition-all duration-200 hover:text-orange-400 text-[17px] font-medium"
              onClick={() => {
                router.push(`/`);
              }}
            >
              {el.serv}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
