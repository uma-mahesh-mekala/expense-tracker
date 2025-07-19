'use server'
import { createServerSupabaseClient } from "@/utils/supabase/server";

import { TodaysExpense, MonthlyExpense, AddExpense, FormState } from '@/types'

export async function getTodaysExpense(): Promise<TodaysExpense> {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('expenses')
        .select('*')
        .eq('created_at', new Date().toISOString().split('T')[0])

    if (error) {
        return {
            error: error.message
        }
    };

    return {
        todaysExpense: data.length > 0 ? data.reduce((acc, curr) => acc + curr.amount, 0) : 0
    }
}

export async function getMonthlyExpense(): Promise<MonthlyExpense> {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('expenses')
        .select('*')
        .gte('created_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())
        .lte('created_at', new Date().toISOString())

    if (error) {
        return {
            error: error.message
        }
    };

    return {
        monthlyExpense: data.length > 0 ? data.reduce((acc, curr) => acc + curr.amount, 0) : 0
    }
}

export async function addExpense(state: FormState, formData: FormData): Promise<AddExpense> {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase
        .from('expenses')
        .insert([
            {
                category: formData.get('category') as string,
                notes: formData.get('notes') as string,
                amount: formData.get('amount') as unknown as number,
                created_at: new Date().toISOString().slice(0, 10)
            },
        ])
        .select();

    if (error) {
        return {
            error: error.message,
        }
    }

    return {
        data,
        success: true,
    }

}