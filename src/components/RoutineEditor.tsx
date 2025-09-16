"use client";

import { useState } from "react";

export default function RoutineEditor({ routine, onSave }: { routine: any; onSave: (r: any) => void }) {
  const [localRoutine, setLocalRoutine] = useState(routine);

  function handleChange(day: string, index: number, field: string, value: string) {
    const updated = { ...localRoutine };
    updated[day][index][field] = value;
    setLocalRoutine(updated);
  }

  function addPeriod(day: string) {
    const updated = { ...localRoutine };
    updated[day].push({ time: "", subject: "", fullForm: "" });
    setLocalRoutine(updated);
  }

  function removePeriod(day: string, index: number) {
    const updated = { ...localRoutine };
    updated[day].splice(index, 1);
    setLocalRoutine(updated);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit BCA Routine</h1>
      {Object.keys(localRoutine).map((day) => (
        <div key={day} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{day}</h2>
          {localRoutine[day].map((p: any, idx: number) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                className="border px-2 py-1 rounded w-1/4"
                value={p.time}
                onChange={(e) => handleChange(day, idx, "time", e.target.value)}
                placeholder="Time"
              />
              <input
                className="border px-2 py-1 rounded w-1/4"
                value={p.subject}
                onChange={(e) => handleChange(day, idx, "subject", e.target.value)}
                placeholder="Subject"
              />
              <input
                className="border px-2 py-1 rounded w-1/2"
                value={p.fullForm}
                onChange={(e) => handleChange(day, idx, "fullForm", e.target.value)}
                placeholder="Full Form"
              />
              <button
                onClick={() => removePeriod(day, idx)}
                className="bg-red-500 text-white px-2 rounded"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={() => addPeriod(day)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            + Add Period
          </button>
        </div>
      ))}
      <button
        onClick={() => onSave(localRoutine)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Routine
      </button>
    </div>
  );
}
