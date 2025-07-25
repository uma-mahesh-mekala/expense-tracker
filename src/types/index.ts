import React from 'react'

export interface FormState {
    error?: string | null;
    success?: boolean | null
}

export interface TodaysExpense {
    todaysExpense?: number;
    error?: string | null
}

export interface MonthlyExpense {
    monthlyExpense?: number;
    error?: string | null
}

export interface AddExpense {
    error?: string | null,
    data?: unknown,
    success?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
  className?: string;
}
