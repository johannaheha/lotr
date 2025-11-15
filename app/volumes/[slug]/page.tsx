import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const volume = volumes.find((volume) => volume.slug === slug);
  const index = volumes.findIndex((volume) => volume.slug === slug);

  if (!volume) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Link href="/volumes">Back to Volumes</Link>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Volume Not Found
          </h1>
        </main>
      </div>
    );
  }
  return (
    console.log(volumes[2].slug),
    (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Link href="/volumes">Back to Volumes</Link>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {volume.title}
          </h1>
          <p>{volume.description}</p>
          <ul>
            {volume.books.map((book, index) => (
              <li key={index}>
                {book.ordinal};{book.title}
              </li>
            ))}
          </ul>
          <p>
            {index === 0 && (
              <Link href={"/volumes/" + volumes[index + 1].slug}>Next</Link>
            )}
          </p>
          <p>
            {index > 0 && index < volumes.length - 1 && (
              <>
                <Link href={"/volumes/" + volumes[index - 1].slug}>
                  Previous
                </Link>
                <Link href={"/volumes/" + volumes[index + 1].slug}>Next</Link>
              </>
            )}
          </p>
          <p>
            {index === volumes.length - 1 && (
              <Link href={"/volumes/" + volumes[index - 1].slug}>Previous</Link>
            )}
          </p>
        </main>
      </div>
    )
  );
}
