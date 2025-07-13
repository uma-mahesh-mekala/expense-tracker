"use client";

export default function DashboardPage() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-6">
          <h3 className="text-base font-medium text-blue-700">
            Total Expenses
          </h3>
          <p className="mt-2 text-2xl font-bold text-blue-900">$1,250</p>
          <p className="mt-1 text-gray-500">All time</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-6">
          <h3 className="text-base font-medium text-green-700">This Month</h3>
          <p className="mt-2 text-2xl font-bold text-green-900">$320</p>
          <p className="mt-1 text-gray-500">July 2025</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-6">
          <h3 className="text-base font-medium text-indigo-700">
            Top Category
          </h3>
          <p className="mt-2 text-2xl font-bold text-indigo-900">Food</p>
          <p className="mt-1 text-gray-500">$150 this month</p>
        </div>
      </div>
    </section>
  );
}
