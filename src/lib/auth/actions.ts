"use server";
import type { FormState } from "@/types";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function signUp(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	const supabase = await createServerSupabaseClient();

	const { error } = await supabase.auth.signUp({
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	});

	if (error) {
		return {
			error: error.message,
		};
	}

	return {
		success: true,
	};
}

export async function login(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	const supabase = await createServerSupabaseClient();

	const { error } = await supabase.auth.signInWithPassword({
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	});

	if (error) {
		return {
			error: error.message,
		};
	}

	return {
		success: true,
	};
}

export async function signOut() {
	const supabase = await createServerSupabaseClient();
	await supabase.auth.signOut();
}
