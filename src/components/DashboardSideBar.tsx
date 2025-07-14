"use client";

export default function DashboardSideBar() {
  return (
    <aside className="bg-white shadow rounded p-4 w-full sm:w-64">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
      <form className="flex flex-col gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="e.g., Food, Transport"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Expense
        </button>
      </form>
    </aside>
  );
}
