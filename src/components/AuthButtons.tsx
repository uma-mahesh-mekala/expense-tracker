import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Link
        href="/signup"
        className="px-6 py-2 rounded bg-blue-600 text-white text-center hover:bg-blue-700 transition"
      >
        Sign Up
      </Link>
      <Link
        href="/login"
        className="px-6 py-2 rounded border border-blue-600 text-blue-600 text-center hover:bg-blue-50 transition"
      >
        Log In
      </Link>
    </div>
  );
}
