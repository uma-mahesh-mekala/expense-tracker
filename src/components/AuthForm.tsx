// app/login/page.tsx
"use client";
import supabaseClient from "@/lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  mode: "login" | "signup";
}
export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    let error;

    if (mode === "signup") {
      ({ error } = await supabaseClient.auth.signUp({
        email,
        password,
      }));
      if (!error) {
        router.push("/login");
      }
    } else {
      ({ error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      }));
      if (!error) {
        router.push("/dashboard");
      }
    }

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {mode === "signup" ? "Sign Up" : "Log In"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {errorMessage && (
            <p className="text-red-200 text-sm">{errorMessage}</p>
          )}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading
              ? mode === "signup"
                ? "Signing Up"
                : "Logging In"
              : mode === "signup"
              ? "Sign Up"
              : "Log In"}
          </button>
        </form>
      </div>
    </section>
  );
}
