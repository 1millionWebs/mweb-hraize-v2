import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream-100 px-4">
      <span className="text-[120px] sm:text-[180px] font-black text-sky-600/10 leading-none">404</span>
      <h1 className="mt-4 text-2xl sm:text-3xl font-black text-navy-900 uppercase tracking-tight text-center">
        Section Not Deployed
      </h1>
      <p className="mt-2 text-sm text-navy-900/50 font-medium text-center max-w-md">
        The page you&apos;re looking for has not been built yet or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        prefetch={false}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-xs font-black tracking-wider text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  );
}
