
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-3xl border border-green-100 bg-white p-8 text-center shadow-lg sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
          Page Not Found
        </p>

        <h1 className="mt-4 text-7xl font-black text-green-800 sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-gray-900">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি।
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          আপনি যে পেজটি খুঁজছেন, সেটি সরানো হয়েছে অথবা ঠিকানাটি ভুল।
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}

