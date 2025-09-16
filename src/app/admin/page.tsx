"use client";

import AdminRoute from "@/components/AdminRoute";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FiLogOut, FiEdit } from "react-icons/fi";

function AdminDashboardContent() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-purple-600 shadow-md">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Manage Routines
          </h2>
          <button
            onClick={() => router.push("/admin/bcaedit")}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            <FiEdit size={18} /> Edit BCA Routine
          </button>
        </div>
      </div>
    </main>
  );
}

export default function AdminDashboard() {
  return (
    <AdminRoute>
      <AdminDashboardContent />
    </AdminRoute>
  );
}
