const CATEGORY_COLORS = {
  Push: "bg-red-100 text-red-700",
  Pull: "bg-blue-100 text-blue-700",
  Legs: "bg-green-100 text-green-700",
  Core: "bg-yellow-100 text-yellow-700",
  Cardio: "bg-purple-100 text-purple-700",
};

export default function ExerciseItem({ exercise, onToggle, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
      <input
        type="checkbox"
        checked={exercise.done}
        onChange={() => onToggle(exercise.id)}
        className="w-5 h-5 accent-indigo-600 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${exercise.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {exercise.name}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">
          {exercise.sets} sets x {exercise.reps} reps
        </p>
      </div>

      <span className={`text-xs font-medium px-2 py-1 rounded-full ${CATEGORY_COLORS[exercise.category] || 'bg-gray-100 text-gray-700'}`}>
        {exercise.category}
      </span>

      <button
        onClick={() => onDelete(exercise.id)}
        aria-label="Delete exercise"
        className="text-gray-400 hover:text-red-600 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m1 0v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7h10z" />
        </svg>
      </button>
    </div>
  );
}
