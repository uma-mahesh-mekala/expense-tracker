import DashboardSidebar from "@/components/DashboardSideBar";
import ExpenseSummaryCards from "@/components/ExpenseSummaryCards";

export default function DashboardPage() {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-4">
        <ExpenseSummaryCards />
        {/* You can add more content below */}
      </div>
    </main>
  );
}
