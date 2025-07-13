// app/login/page.tsx
"use client";

import { FormEvent } from "react";

interface AuthFormProps {
  title: "Log In" | "Sign Up";
  buttonText: "Log In" | "Sign Up";
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}
export default function AuthForm({
  title,
  buttonText,
  onSubmit,
}: AuthFormProps) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
