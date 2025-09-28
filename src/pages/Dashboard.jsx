import { Wallet, Users, FileText, CreditCard } from "lucide-react";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Wallet Balance" value="₹25,000" icon={<Wallet className="w-6 h-6" />} color="blue" />
        <Card title="Active Leads" value="134" icon={<FileText className="w-6 h-6" />} color="green" />
        <Card title="Team Members" value="8" icon={<Users className="w-6 h-6" />} color="purple" />
        <Card title="Expenses This Month" value="₹12,500" icon={<CreditCard className="w-6 h-6" />} color="red" />
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <ul className="space-y-3">
          <li className="bg-white p-4 rounded-xl shadow">
            <span className="font-medium">Lead #452</span> assigned to{" "}
            <span className="text-blue-600">Rahul</span>
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <span className="font-medium">Expense</span> of ₹3,000 added by{" "}
            <span className="text-blue-600">Sanjay</span>
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <span className="font-medium">Wallet Top-up</span> of ₹5,000 by{" "}
            <span className="text-blue-600">System</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
