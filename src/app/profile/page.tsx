"use client";

import { authClient } from "@/lib/auth-client";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("আপনার নাম লিখুন");
      return;
    }

    setIsUpdating(true);

    try {
      const { data, error } = await authClient.updateUser({
        name: name.trim(),
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("নাম সফলভাবে আপডেট হয়েছে!");
        setName("");
      }
    } catch {
      toast.error("নাম আপডেট করা যায়নি");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("সফলভাবে সাইন আউট হয়েছে!");
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-4">
          <h1 className="text-xl font-extrabold tracking-tight text-[#202820]">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-xs text-[#687168]">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* User Information Card */}
        <section className="flex items-center justify-between gap-3 rounded-xl border border-[#dce6dc] bg-[#fafcf9] p-3.5 sm:p-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="avatar shrink-0">
              <div className="mask mask-squircle h-11 w-11 bg-[#e4eee5]">
                {user?.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User avatar"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold text-[#07883e]">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-sm font-bold text-[#303830]">
                {user?.name || "ব্যবহারকারী"}
              </h2>

              <p className="truncate text-xs text-[#687168]">{user?.email}</p>
            </div>
          </div>

          {/* Sign Out */}
          <button
            type="button"
            onClick={handleSignOut}
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-red-400 px-2.5 py-1.5 text-[11px] font-semibold text-red-500 transition hover:bg-red-50"
          >
            <FaSignOutAlt />
            <span>সাইন আউট</span>
          </button>
        </section>

        {/* Update Profile Card */}
        <section className="mt-3.5 rounded-xl border border-[#dce6dc] bg-[#fafcf9] p-5 sm:p-6">
          <h2 className="mb-5 text-sm font-bold text-[#303830]">তথ্য</h2>

          <form onSubmit={updateProfile}>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium text-[#303830]"
            >
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={user?.name || "আপনার নাম লিখুন"}
              required
              className="w-full rounded-md border border-[#dce6dc] bg-transparent px-3 py-2 text-sm text-[#202820] outline-none transition placeholder:text-[#879087] focus:border-[#07883e] focus:ring-2 focus:ring-[#07883e]/10"
            />

            <button
              type="submit"
              disabled={isUpdating || !name.trim()}
              className="mt-2.5 w-full rounded-md bg-[#07883e] py-2.5 text-xs font-bold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#066d33] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Profile;
