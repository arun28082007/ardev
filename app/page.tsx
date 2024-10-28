"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid justify-center items-center h-screen ">
      <button
        className="rounded-sm outline outline-offset-2 outline-pink-500"
        onClick={() => router.push("/arun")}
      >
        Arun Page
      </button>
      <button
        className="rounded-sm outline outline-offset-8 outline-indigo-600"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard Page
      </button>
    </div>
  );
}
