import { useState } from "react";
import { SignupForm } from "@/components/signup";
import { LoginForm } from "@/components/login";

export default function AccountPage() {
    const [isSignup, setIsSignup] = useState(true);

    return (
    <main className="flex items-center justify-center h-[calc(100vh-76px)]">
      {isSignup ? (
        <SignupForm
          className="w-[400px]"
          onSwitch={() => setIsSignup(false)}
        />
      ) : (
        <LoginForm
          className="w-[400px]"
          onSwitch={() => setIsSignup(true)}
        />
      )}
    </main>
    )
}