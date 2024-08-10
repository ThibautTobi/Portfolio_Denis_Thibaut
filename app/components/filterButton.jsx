export default function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      className={`
        font-bold p-4 text-lg rounded-lg md:text-2xl hover:bg-slate-400 
        ${isActive 
          ? 'bg-white text-slate-800 dark:bg-neutral-600 dark:text-white' 
          : 'dark:bg-stone-800'
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}