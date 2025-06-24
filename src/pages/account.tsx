import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/init";
import { SignupForm } from "@/components/signup";
import { LoginForm } from "@/components/login";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AccountPage() {
    const [isSignup, setIsSignup] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }, []);

    if (user) {
      return (
        <main className="flex flex-col items-center justify-center h-[calc(100vh-76px)]">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">Welcome, {user.email}</h1>
          <div className="w-full flex justify-center items-center">
            <Button className="w-48 h-12 m-6 hover:cursor-pointer">
              <Link href="/">Home</Link>
            </Button>

            <Button
                className="w-48 h-12 m-6 hover:cursor-pointer"
                onClick={() => auth.signOut()}
                variant="destructive"
            >
                Logout
            </Button>
          </div>
        </main>
      )
    }

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