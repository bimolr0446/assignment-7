"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const SignIn = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
    if (data) {
      toast.success("Account Create Successful");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  const githubSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (data) {
      toast.success("GitHub দিয়ে Sign In Successful!");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const googleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (data) {
      toast.success("Google দিয়ে Sign In Successful!");
    }

    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#f0f5f0] px-4 py-7 sm:py-8">
      {/* Heading */}
      <div className="mb-5 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-[#202820] sm:text-[28px]">
          সাইন ইন
        </h1>
        <p className="mt-1.5 text-sm text-[#687168]">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Sign Up Card */}
      <div className="w-full max-w-107.5 rounded-2xl border border-[#dce6dc] bg-[#fafcf9] p-5 sm:p-6">
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#303830]"
            >
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-[#dce6dc] bg-transparent px-3 py-2.5 text-sm text-[#202820] outline-none transition placeholder:text-[#687168] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#303830]"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-[#dce6dc] bg-transparent px-3 py-2.5 text-sm text-[#202820] outline-none transition placeholder:text-[#687168] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#07883e] px-4 py-3 text-sm font-bold text-white shadow-[0_3px_4px_rgba(0,0,0,0.2)] transition hover:bg-[#066d33] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07883e]"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#dce6dc]" />
          <span className="text-xs text-[#687168]">অথবা</span>
          <div className="h-px flex-1 bg-[#dce6dc]" />
        </div>

        {/* Social Login */}
        <div className="flex md:flex-row lg:flex-row flex-col gap-4 ">
          {/* গুগল লগইন বাটন */}
          <button onClick={googleSignIn} className="btn rounded-2xl">
            <FaGoogle /> {/* গুগল আইকন */}
            <span>Sign in with Google</span>
          </button>

          {/* গিটহাব লগইন বাটন */}
          <button onClick={githubSignIn} className="btn rounded-2xl">
            <FaGithub className="text-white" /> {/* গিটহাব আইকন */}
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Sign In Link */}
        <p className="mt-4 text-center text-sm text-[#687168]">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-[#07883e] transition hover:text-[#066d33] hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      {/* Back to Home */}
      <Link
        href="/"
        className="mt-5 text-sm text-[#879087] transition hover:text-[#07883e]"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
};

export default SignIn;
