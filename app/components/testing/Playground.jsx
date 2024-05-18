"use client";
//! Není nikde použito!!

import { useState, useEffect } from "react";

export default function Skin({ name, className }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Asynchronously fetch the image data
        const response = await fetch(
          `https://mc-heads.net/body/${name}/100/right`,
        );
        if (!response.ok) {
          // If the response is not OK, throw an error to catch it below
          throw new Error("Network response was not ok");
        }
        // Here we just use the URL directly since we've confirmed the fetch was successful
        const imageUrl = response.url;
        setData(imageUrl);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
        // Optionally, set a fallback data or handle the error more gracefully
      }
    }

    fetchData();
  }, [name]); // Ensure useEffect is called again if the name prop changes

  if (isLoading) {
    return (
      <div
        className={`h-60 w-24 rounded-md animate-pulse bg-neutral-300 ${className}`}
      ></div>
    );
  }

  // Assuming data will always be set to a valid image URL or null if an error occurs
  return (
    <div>
      <img
        src={data || "/img/defaultSteve.png"} // Use a fallback image if data is null
        className={className}
        alt={`${name} minecraft skin`}
      />
    </div>
  );
}
