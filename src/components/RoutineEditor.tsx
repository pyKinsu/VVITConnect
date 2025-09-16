"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { subjectOptions } from "@/lib/subjectOptions";

type Period = {
  time: string;
  subject: string;
};

type Routine = {
  [day: string]: Period[];
};

export default function RoutineEditor() {
  const [routine, setRoutine] = useState<Routine>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutine = async () => {
      const snapshot = await getDocs(collection(db, "routineA"));
      const data: Routine = {};
      snapshot.forEach((doc) => {
        data[doc.id] = doc.data().periods;
      });
      setRoutine(data);
      setLoading(false);
    };
    fetchRoutine();
  }, []);

  const handleChange = (day: string, index: number, subject: string) => {
    setRoutine((prev) => {
      const newDay = [...prev[day]];
      newDay[index].subject = subject;
      return { ...prev, [day]: newDay };
    });
  };

  const handleSave = async () => {
    for (const day in routine) {
      await setDoc(doc(db, "routineA", day), {
        periods: routine[day],
      });
    }
    alert("Routine updated!");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-purple-600">
        Edit BCA Routine
      </h1>
      {Object.keys(routine).map((day) => (
        <div key={day} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{day}</h2>
          <div className="space-y-2">
            {routine[day].map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border bg-white shadow-sm flex items-center gap-4"
              >
                <span className="w-40">{p.time}</span>
                <select
                  value={p.subject}
                  onChange={(e) => handleChange(day, idx, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {Object.keys(subjectOptions).map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
      >
        Save Routine
      </button>
    </div>
  );
}
