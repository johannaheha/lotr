"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { introduction } from "../../resources/lib/data";
import { volumes } from "../../resources/lib/data";

export default function PageVolume() {
  const router = useRouter();

  function handleRandomClick() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[randomIndex];
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Lord of the Rings
        </h1>
        <p>{introduction}</p>

        <h2>All Volumes</h2>

        <ul>
          {volumes.map((volume) => (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>

        <button
          onClick={handleRandomClick}
          className="mt-4 underline decoration-zinc-400"
        >
          Random Volume
        </button>
      </main>
    </div>
  );
}
