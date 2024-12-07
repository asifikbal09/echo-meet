import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex h-svh w-full justify-center items-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
