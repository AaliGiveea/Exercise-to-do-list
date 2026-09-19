import { useMemo } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseItem from "./components/ExerciseItem";

export default function App() {
  const [exercises, setExercises] = useLocalStorage("exercises", []);

  function addExercise(ex) {
    setExercises((prev) => [ex, ...prev]);
  }

  function toggleExercise(id) {
    setExercises((prev) =>
      prev.map((e) => (e.id === id ? { ...e, done: !e.done } : e)),
    );
  }

  function deleteExercise(id) {
    setExercises((prev) => prev.filter((e) => e.id !== id));
  }

  const { total, completed } = useMemo(
    () => ({
      total: exercises.length,
      completed: exercises.filter((e) => e.done).length,
    }),
    [exercises],
  );

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <header>
          <h1 className="text-3xl font-bold text-gray-900">Exercise App</h1>
          <p className="text-sm text-gray-500 mt-1">
            {completed} of {total} completed
          </p>
        </header>

        <ExerciseForm onAdd={addExercise} />

        <div className="flex flex-col gap-3">
          {exercises.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-10">
              No exercises yet. Add one above.
            </p>
          ) : (
            exercises.map((ex) => (
              <ExerciseItem
                key={ex.id}
                exercise={ex}
                onToggle={toggleExercise}
                onDelete={deleteExercise}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
