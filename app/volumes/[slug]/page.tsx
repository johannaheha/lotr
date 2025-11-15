import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    console.log(volumes[0].slug),
    (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <Link href="/volumes">Back to Volumes</Link>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {volumes.find((volume) => volume.slug === slug)?.title ||
              "1Volume Not Found"}
          </h1>
          <p>
            {volumes.find((volume) => volume.slug === slug)?.description ||
              "Description Not Found"}
          </p>
          <ul>
            {volumes
              .find((volume) => volume.slug === slug)
              ?.books.map((book) => (
                <li key={book.ordinal}>{book.title}</li>
              ))}
          </ul>
        </main>
      </div>
    )
  );
}
