import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Accounts from "./pages/Accounts";
import Team from "./pages/Team";
import Leads from "./pages/Leads";
import Sessions from "./pages/Sessions";
import Members from "./pages/Members";
import Notifications from "./pages/Notifications";
import ContactGenie from "./pages/ContactGenie";
import Expenses from "./pages/Expenses";
import Rush from "./pages/Rush";
import Remittance from "./pages/Remittance";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

export default function App() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/team" element={<Team />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/members" element={<Members />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact-genie" element={<ContactGenie />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/rush" element={<Rush />} />
          <Route path="/remittance" element={<Remittance />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  );
}
