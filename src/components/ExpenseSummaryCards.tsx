"use server";
import {
	getMonthlyExpense,
	getTodaysExpense,
	getMonthlyExpenseByPercentage,
} from "@/lib/db/db";

export default async function ExpenseSummaryCards() {
	const { todaysExpense } = await getTodaysExpense();
	const { monthlyExpense } = await getMonthlyExpense();
	await getMonthlyExpenseByPercentage();
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
			<div className="bg-white p-4 rounded shadow">
				<h3 className="text-sm text-gray-500">Today&apos;s Expense</h3>
				<p className="text-2xl font-bold text-blue-600">₹{todaysExpense}</p>
			</div>
			<div className="bg-white p-4 rounded shadow">
				<h3 className="text-sm text-gray-500">Monthly Expense</h3>
				<p className="text-2xl font-bold text-green-600">₹{monthlyExpense}</p>
			</div>
			<div className="bg-white p-4 rounded shadow">
				<h3 className="text-sm text-gray-500">Most Spent On</h3>
				<p className="text-lg font-semibold text-gray-800">N/A</p>
			</div>
		</div>
	);
}
