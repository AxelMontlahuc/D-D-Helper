import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mb-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          D&D Helper
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br m-2 from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-2xl"
        >
          Your companion for Dungeons & Dragons adventures
        </motion.p>

        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Button variant="outline" className="w-[10rem] h-[2.6rem] mt-6 mr-3 hover:cursor-pointer">
            <Link href="/characters" className="w-full h-full flex items-center justify-center">My Characters</Link>
          </Button>

          <Button variant="outline" className="w-[10rem] h-[2.6rem] mt-6 ml-3 hover:cursor-pointer">
            <Link href="/account" className="w-full h-full flex items-center justify-center">My Account</Link>
          </Button>
        </motion.div>
      </LampContainer>
    </main>
  );
}