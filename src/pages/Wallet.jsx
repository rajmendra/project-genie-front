import { Wallet as WalletIcon, CreditCard } from "lucide-react";
import Card from "../components/Card";

export default function Wallet() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Wallet Master</h2>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card
          title="Current Balance"
          value="₹25,000"
          icon={<WalletIcon className="w-6 h-6" />}
          color="blue"
        />
        <Card
          title="This Month's Transactions"
          value="12"
          icon={<CreditCard className="w-6 h-6" />}
          color="green"
        />
      </div>

      {/* Transactions Table */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">2025-09-20</td>
                <td className="px-4 py-2">Top-up</td>
                <td className="px-4 py-2 text-green-600">+ ₹5,000</td>
                <td className="px-4 py-2">Completed</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2025-09-18</td>
                <td className="px-4 py-2">Expense</td>
                <td className="px-4 py-2 text-red-600">- ₹1,200</td>
                <td className="px-4 py-2">Completed</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">2025-09-15</td>
                <td className="px-4 py-2">Top-up</td>
                <td className="px-4 py-2 text-green-600">+ ₹2,000</td>
                <td className="px-4 py-2">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
