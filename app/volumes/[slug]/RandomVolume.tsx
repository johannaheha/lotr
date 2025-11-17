"use client";

import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/navigation";

export default function RandomVolume() {
  const router = useRouter();

  function handleRandomClick() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[randomIndex];

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <button
      onClick={handleRandomClick}
      className="mt-4 underline decoration-zinc-400"
    >
      Random Volume
    </button>
  );
}
