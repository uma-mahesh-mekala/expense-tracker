// app/login/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useId } from "react";
import { login, signUp } from "@/lib/auth/actions";
import Button from "./ui/Button";
import Input from "./ui/Input";

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
					<Input
						label="Email"
						error={state.error}
						type="email"
						placeholder="example@mail.com"
						required
						name="email"
						id={emailId}
					/>
					<Input
						label="Password"
						error={state.error}
						type="password"
						placeholder="********"
						required
						name="password"
						id={passwordId}
					/>
					<Button
						type="submit"
						disabled={isPending}
						buttonText={
							isPending
								? mode === "signup"
									? "Signing Up"
									: "Logging In"
								: mode === "signup"
									? "Sign Up"
									: "Log In"
						}
					/>
				</form>
			</div>
		</section>
	);
}
