import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function CreateCharacterPage() {
    const [step, setStep] = useState(1);
    const totalSteps = 8;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <main className="flex flex-col items-center h-[calc(100vh-76px)]">
            <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                Create a Character
            </h1>
            <div className="w-[1400px] h-[800px] m-12 p-8 flex flex-col items-center rounded-md border">
                <div className="w-full h-[40px] mb-8 flex flex-row items-center justify-between rounded-md">
                    <Button onClick={handlePrevious} className="hover:cursor-pointer">Previous</Button>
                    <Progress value={(step / totalSteps) * 100} className="w-[80%]" />
                    <Button onClick={handleNext} className="hover:cursor-pointer">Next</Button>
                </div>
                <div className="w-full h-full flex items-center justify-center rounded-md">
                    {step === 1 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 1: Basics
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Name: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Race: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Class: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 2: Stats
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Health Points: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Strength: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Dexterity: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Constitution: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Intelligence: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Wisdom: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Charisma: <input type="number" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 3: Masteries
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Class Mastery 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Class Mastery 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Class Mastery 3: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background Mastery 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background Mastery 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background Tool 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background Tool 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Race Language 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Race Language 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 4: Class Capacities
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Level 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Level 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Level 3: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Level 4: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Level 5: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 5: Options
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Archetype: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Starter Pack: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 6 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 6: Spells
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Spell 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Spell 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Spell 3: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 7 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 7: Equipment
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Weapon 1: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Weapon 2: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Armor: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Miscellaneous: <input type="text" className="border rounded-md focus:outline-0 pl-2 pr-2" />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 8 && (
                        <div className="h-min flex flex-col items-center p-4 gap-20">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 8: Yapping
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}