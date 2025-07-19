'use server'
import { createServerSupabaseClient } from "@/utils/supabase/server";

interface FormState {
    error?: string | null;
    success?: boolean | null
}
export async function signUp(state: FormState, formData: FormData): Promise<FormState> {
    const supabase = await createServerSupabaseClient();

    const { error } = await supabase.auth.signUp({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    });

    if (error) {
        return {
            error: error.message,
        };
    };

    return {
        success: true
    };
};

export async function login(state: FormState, formData: FormData): Promise<FormState> {
    const supabase = await createServerSupabaseClient();

    const { error } = await supabase.auth.signInWithPassword({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    });


    if (error) {
        return {
            error: error.message,
        };
    }

    return {
        success: true
    }
}