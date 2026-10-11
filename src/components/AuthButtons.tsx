"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const AuthButtons = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const sigOut = async () => {
    setIsSigningOut(true);

    await authClient.signOut();

    setIsOpen(false);
    setIsSigningOut(false);
  };

  return (
    <section>
      {user ? (
        <div className="relative">
          {/* Profile Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-green-50"
          >
            <div className="avatar">
              <div className="mask mask-squircle h-10 w-10 bg-gray-100">
                {user.image ? (
                  <img
                    src={user?.image}
                    alt={user.name || "User avatar"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-green-100 text-xl font-bold text-green-700">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <span className="max-w-24 truncate font-semibold text-[#202820]">
              {user.name?.split(" ")[0] || "User"}
            </span>

            <IoChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 w-72 max-w-[calc(100vw-1rem)] rounded-[20px] border border-[#e1e8e1] bg-[#fbfdfb] p-5 shadow-[0_8px_18px_rgba(0,0,0,0.14)] sm:w-[296px]">
              {/* User Information */}
              <div className="border-b border-gray-100 pb-4">
                <h3 className="truncate text-base font-bold text-[#202820]">
                  {user.name}
                </h3>

                <p className="mt-1 truncate text-sm text-[#68716a]">
                  {user.email}
                </p>
              </div>

              {/* Profile */}
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center gap-3 rounded-lg py-2.5 text-[15px] text-[#344238] transition hover:bg-green-50"
              >
                <FaUser className="h-5 w-5 text-[#6083a2]" />

                <span>আমার প্রোফাইল</span>
              </Link>

              {/* Sign Out */}
              <button
                type="button"
                onClick={sigOut}
                className="flex w-full items-center gap-3 rounded-lg py-2.5 text-left text-[15px] text-red-500 transition hover:bg-red-50 disabled:opacity-60"
              >
                <FaSignOutAlt className="h-5 w-5" />
                সাইন আউট
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 px-3 py-4 sm:gap-6 sm:px-6 sm:py-5 lg:gap-10 lg:py-7">
          {/* Sign In */}
          <Link href="/sign-in" className="btn border-none bg-transparent">
            সাইন ইন
          </Link>

          {/* Sign Up */}
          <Link href="/sign-up" className="btn btn-success rounded-xl">
            সাইন আপ
          </Link>
        </div>
      )}
    </section>
  );
};

export default AuthButtons;
