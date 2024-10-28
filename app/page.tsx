"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid justify-center items-center h-screen ">
      <button
        className="outline outline-offset-2 outline-pink-500"
        onClick={() => router.push("/arun")}
      >
        Arun Page
      </button>
      <button
        className="rounded-lg ring-4 border-indigo-600"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
}
