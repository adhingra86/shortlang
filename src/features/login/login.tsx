import React from "react";
import { signIn } from "next-auth/react";
import { Button, Title } from "@mantine/core";

import Logo from "@/assets/logo.png";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center min-h-[500px] w-[400px] mx-auto">
      <Image width={300} src={Logo} alt="Shortlang logo" />
      <Title size="16px" className="font-normal mb-20 text-gray-700">
        Speak More with Less.
      </Title>
      <Button
        fullWidth
        onClick={() => signIn("github")}
        size="lg"
        variant="light"
      >
        Sign in with GitHub
      </Button>
      <Button
        fullWidth
        variant="light"
        onClick={() => signIn("google")}
        size="lg"
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
