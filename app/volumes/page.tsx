import Link from "next/link";
import { introduction } from "../../resources/lib/data";
import { volumes } from "../../resources/lib/data";


export default function PageVolume() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Lord of the Rings
        </h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul><li>{volumes[0].title}
            <Link href={"the-fellowship-of-the-ring"}>The fellowship of the ring</Link></li></ul>
        <ul><li>{volumes[1].title}
            <Link href={"the-two-towers"}>The two towers</Link></li></ul>
        <ul><li>{volumes[2].title}
            <Link href={"/the-return-of-the-king"}>The return of the king</Link></li></ul>
      </main>
    </div>
  );
}
