"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@mantine/core";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <>
      {session ? (
        <>Test</>
      ) : (
        <div className="flex gap-4">
          <Button onClick={() => signIn("github")}>Sign in with GitHub</Button>
          <Button onClick={() => signIn("google")}>Sign in with Google</Button>
        </div>
      )}
    </>
  );
}
