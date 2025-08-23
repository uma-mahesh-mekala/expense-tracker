"use server";

import type {
	AddExpense,
	FormState,
	MonthlyExpense,
	TodaysExpense,
} from "@/types";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function getTodaysExpense(): Promise<TodaysExpense> {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.rpc("getTodaysExpense");

	if (error) {
		return {
			error: error.message,
		};
	}

	return {
		todaysExpense: data ?? 0,
	};
}

export async function getMonthlyExpense(): Promise<MonthlyExpense> {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.rpc("getMonthlyExpense");

	if (error) {
		return {
			error: error.message,
		};
	}

	return {
		monthlyExpense: data ?? 0,
	};
}

export async function addExpense(
	_prevState: FormState,
	formData: FormData,
): Promise<AddExpense> {
	const supabase = await createServerSupabaseClient();

	const { error } = await supabase.rpc("addExpense", {
		category: formData.get("category") as string,
		notes: formData.get("notes") as string,
		amount: formData.get("amount") as unknown as number,
		created_at: new Date().toISOString().slice(0, 10),
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

export async function getMonthlyExpenseByPercentage() {
	const supabase = await createServerSupabaseClient();

	const { data, error } = await supabase.rpc("getmonthlyexpensespercentage");
	if (error) console.error(error);
	else console.log(data);
}
