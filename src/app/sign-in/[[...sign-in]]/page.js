import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign In</h1>
      <SignIn />
    </>
  );
}
