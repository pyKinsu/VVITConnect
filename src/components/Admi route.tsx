"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface AdminRouteProps {
  children: React.ReactNode;
}

const ADMIN_EMAILS = ["xaekks@gmail.com"]; // 👈 Replace with your admin emails

export default function AdminRoute({ children }: AdminRouteProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser && ADMIN_EMAILS.includes(firebaseUser.email || "")) {
        setUser(firebaseUser);
      } else {
        setUser(null);
        router.replace("/admin/login");
      }
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg font-medium text-gray-700">Checking access...</p>
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}
