export default function Card({ title, value, icon, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className={`text-2xl font-bold ${colorClasses[color].split(" ")[1]}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
