export default function PageLink({ to, icon: Icon, label, isActive }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = to;
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600/20 text-blue-400'
          : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
      }`}
    >
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}