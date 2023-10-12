import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col bg-slate-800 w-full max-w-xs rounded-lg p-5 gap-2">
        <div className="my-4 text-center ">
          <h1>String</h1>
        </div>
        <div>
          <Link
            href="/signin"
            className="block bg-slate-900 p-3 rounded-lg my-4"
          >
            signin
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="block bg-slate-900 p-3 rounded-lg my-4"
          >
            signup
          </Link>
        </div>
      </div>
    </main>
  );
}
