import { NavLink } from "react-router-dom";

const linkBase =
  "block px-3 py-2 rounded-xl text-sm transition-colors hover:bg-gray-800/60";
const linkActive =
  "bg-gray-800 text-white";

const Item = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${linkBase} ${isActive ? linkActive : "text-gray-200"}`
    }
  >
    {children}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 p-4 sticky top-0 h-screen">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Partner CRM</h1>
        <p className="text-xs text-gray-400 mt-1">Portal</p>
      </div>

      <nav className="space-y-1">
        <Item to="/">Dashboard</Item>
        <Item to="/wallet">My Wallet Master</Item>
        <Item to="/accounts">My Account Master</Item>
        <Item to="/team">My Team Master</Item>
        <Item to="/leads">My Leads Master</Item>
        <Item to="/sessions">Session Master</Item>
        <Item to="/members">My Member Master</Item>
        <Item to="/notifications">Notifications</Item>
        <Item to="/contact-genie">Contact Genie</Item>
        <Item to="/expenses">My Expense Master</Item>
        <Item to="/rush">Rush Controller</Item>
        <Item to="/remittance">Remittance Master</Item>
        <Item to="/terms">Terms &amp; Conditions</Item>
        <Item to="/services">Additional Services</Item>
      </nav>

      <div className="mt-6 border-t border-gray-800 pt-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Partner CRM CORP
      </div>
    </aside>
  );
}
