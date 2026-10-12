const SignUpLoading = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f0f5f0] px-4 py-7 sm:py-8 animate-pulse">
      {/* Heading Skeleton */}
      <div className="mb-5 flex flex-col items-center gap-3">
        <div className="h-8 w-56 rounded-md bg-gray-300" />
        <div className="h-4 w-64 rounded-md bg-gray-200" />
      </div>

      {/* Card Skeleton */}
      <div className="w-full max-w-[430px] rounded-2xl border border-[#dce6dc] bg-[#fafcf9] p-5 sm:p-6">
        <div className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <div className="h-4 w-16 rounded bg-gray-300" />
            <div className="h-10 w-full rounded-lg bg-gray-200" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="h-4 w-16 rounded bg-gray-300" />
            <div className="h-10 w-full rounded-lg bg-gray-200" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-300" />
            <div className="h-10 w-full rounded-lg bg-gray-200" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <div className="h-4 w-36 rounded bg-gray-300" />
            <div className="h-10 w-full rounded-lg bg-gray-200" />
          </div>

          {/* Register Button */}
          <div className="h-11 w-full rounded-lg bg-gray-300" />
        </div>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <div className="h-3 w-10 rounded bg-gray-200" />
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="h-11 flex-1 rounded-xl bg-gray-200" />
          <div className="h-11 flex-1 rounded-xl bg-gray-200" />
        </div>

        {/* Sign In Link */}
        <div className="mx-auto mt-5 h-4 w-52 rounded bg-gray-200" />
      </div>

      {/* Back to Home */}
      <div className="mt-5 h-4 w-36 rounded bg-gray-200" />
    </main>
  );
};

export default SignUpLoading;
