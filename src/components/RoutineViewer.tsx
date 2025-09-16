"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { subjectOptions } from "@/lib/subjectOptions";

type Period = {
  time: string;
  subject: string;
  fullForm: string;
};

type Routine = {
  [day: string]: Period[];
};

export default function RoutineViewer() {
  const [routine, setRoutine] = useState<Routine>({});

  useEffect(() => {
    const fetchRoutine = async () => {
      const snapshot = await getDocs(collection(db, "routineA"));
      const data: Routine = {};
      snapshot.forEach((doc) => {
        data[doc.id] = doc.data().periods.map((p: any) => ({
          time: p.time,
          subject: p.subject,
          fullForm: subjectOptions[p.subject] || "",
        }));
      });
      setRoutine(data);
    };
    fetchRoutine();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-purple-600">BCA Routine</h1>
      {Object.keys(routine).map((day) => (
        <div key={day} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{day}</h2>
          <div className="space-y-2">
            {routine[day].map((p, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border bg-white shadow-sm flex flex-col"
              >
                <span className="font-medium">{p.time}</span>
                <span className="text-purple-700 font-semibold">
                  {p.subject}
                </span>
                <span className="text-sm text-gray-500">{p.fullForm}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
