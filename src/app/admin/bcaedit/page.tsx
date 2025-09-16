"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import RoutineEditor from "@/components/RoutineEditor";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function BCAEditPage() {
  const [routine, setRoutine] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // only admin can edit
      return;
    }

    async function fetchRoutine() {
      const snap = await getDoc(doc(db, "routines", "BCA"));
      if (snap.exists()) setRoutine(snap.data());
      setLoading(false);
    }
    fetchRoutine();
  }, [user, router]);

  async function saveRoutine(updated: any) {
    await setDoc(doc(db, "routines", "BCA"), updated);
    setRoutine(updated);
  }

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!routine) return <p>No routine found.</p>;

  return <RoutineEditor routine={routine} onSave={saveRoutine} />;
}
