
export default function CategoryLoading() {
  return (
    <main className="container mx-auto animate-pulse px-4 py-8">
      <div className="mb-3 h-8 w-48 rounded bg-gray-200" />
      <div className="mb-8 h-4 w-72 max-w-full rounded bg-gray-200" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-3"
          >
            <div className="h-32 rounded-xl bg-gray-200 sm:h-40" />
            <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-5 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </main>
  );
}

