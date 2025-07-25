"use client";
import Input from "./ui/Input";
import { categories } from "@/utils/constants";
import { addExpense } from "@/lib/db/db";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { FormState, AddExpense } from "@/types";

export default function DashboardSideBar() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    async (prevState: FormState, formData: FormData): Promise<AddExpense> => {
      const result = await addExpense(prevState, formData);

      if (result.success) {
        router.refresh();
      }

      return result;
    },
    {
      error: null,
      data: null,
    }
  );
  return (
    <aside className="bg-white shadow rounded p-4 w-full sm:w-100">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      <form className="flex flex-col gap-3" action={formAction}>
        {state?.error && <p className="text-red-400 text-sm">{state.error}</p>}
        {state?.success && (
          <p className="text-green-400 text-sm">
            {"Expense addes successfully"}
          </p>
        )}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Select Category
          </label>
          <select
            name="category"
            id="category"
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <Input label = 'Notes' type='text' id='notes' name ='notes' placeholder='Enter Notes'/>
        <Input label = 'Amount' type='number' id='amount' name ='amount' placeholder='Enter amount'/>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={isPending}
        >
          {isPending ? "Adding Expense" : "Add Expense"}
        </button>
      </form>
    </aside>
  );
}
