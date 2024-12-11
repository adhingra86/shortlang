"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <section>
      <h1>
        Welcome back, <strong>{session?.user?.name}</strong>
      </h1>
    </section>
  );
}
