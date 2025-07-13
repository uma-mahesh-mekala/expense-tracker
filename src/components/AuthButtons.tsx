import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AuthButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Link
        href="/login"
        className="flex items-center gap-2 px-6 py-2 rounded border border-blue-600 text-blue-600 text-center hover:bg-blue-50 transition"
      >
        Log In <ArrowRightIcon className="w-5 h-5" />
      </Link>
    </div>
  );
}
