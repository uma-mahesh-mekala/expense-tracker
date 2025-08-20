// app/login/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useId } from "react";
import { login, signUp } from "@/lib/auth/actions";

interface AuthFormProps {
	mode: "login" | "signup";
}
export default function AuthForm({ mode }: AuthFormProps) {
	const initialState = {
		error: "",
		success: false,
	};
	const emailId = useId();
	const passwordId = useId();
	const router = useRouter();
	const [state, formAction, isPending] = useActionState(
		mode === "signup" ? signUp : login,
		initialState,
	);

	useEffect(() => {
		if (state?.success && mode === "signup") {
			router.push("/login");
		}
		if (state?.success && mode === "login") {
			router.push("/dashboard");
		}
	}, [state, mode, router]);

	return (
		<section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
			<div className="w-full max-w-md bg-white rounded-lg shadow p-6">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					{mode === "signup" ? "Sign Up" : "Log In"}
				</h2>
				<form className="space-y-4" action={formAction}>
					{state?.error && (
						<p className="text-red-200 text-sm">{state.error}</p>
					)}
					{state?.success && (
						<p className="text-green-200 text-sm">
							{mode === "signup"
								? "Sign Up Successfully"
								: "Login Successfully"}
						</p>
					)}
					<div>
						<label
							htmlFor={emailId}
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id={emailId}
							className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="you@example.com"
							required
							name="email"
						/>
					</div>
					<div>
						<label
							htmlFor={passwordId}
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id={passwordId}
							className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="********"
							required
							name="password"
						/>
					</div>
					<button
						type="submit"
						disabled={isPending}
						className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
					>
						{isPending
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
