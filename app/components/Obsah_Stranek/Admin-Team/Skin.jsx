"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Skin({ name, className }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://mc-heads.net/body/${name}/100/right`);
        if (!response.ok) {
          throw new Error("Odpověď sítě nebyla v pořádku!")
        }
        const imgUrl = response.url;
        setTimeout(() => {
          setData(imgUrl);
          setLoading(false);
        }, 500);
      }
      catch (err) {
        console.error("Nastal problém s fetchováním dat: " + err)
        setTimeout(() => {
          setLoading(false);
        }, 500);
        // Přidat nějaký error handling
      }
    }

    fetchData()
  }, [name])

  if (isLoading) {
    return (
      <div
        className={`skeleton h-60 w-24 rounded-md`}
      ></div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <Image
        src={data || "@/app/img/defaultSteve.png"}
        className={`${className} object-cover`}
        alt={`${name.length > 0 ? name : "Steve"} minecraft skin`}
        width={100}
        height={240}
      ></Image>
    </div>
  );
}
