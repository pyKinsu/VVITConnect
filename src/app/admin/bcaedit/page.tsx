"use client";

import AdminRoute from "@/components/AdminRoute";

export default function BCAEditPage() {
  return (
    <AdminRoute>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">
            Edit BCA Routine
          </h1>
          {/* TODO: Replace with your real editor component */}
          <p className="text-gray-600">
            Routine editor UI will go here...
          </p>
        </div>
      </main>
    </AdminRoute>
  );
}
