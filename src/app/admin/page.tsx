"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FiLogOut, FiEdit } from "react-icons/fi";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-purple-700">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <FiLogOut size={18} /> Logout
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Manage Routines</h2>
          <Button
            onClick={() => router.push("/admin/bcaedit")}
            className="w-full flex items-center justify-center gap-2"
          >
            <FiEdit size={18} /> Edit BCA Routine
          </Button>
        </div>
      </div>
    </main>
  );
}
