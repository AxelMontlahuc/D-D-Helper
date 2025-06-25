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
                    <Progress value={step/totalSteps * 100} className="w-[80%]" />
                    <Button onClick={handleNext} className="hover:cursor-pointer">Next</Button>
                </div>
                <div className="w-full h-full rounded-md">
                    {step === 1 && 
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 1: Basics</h2>
                            <div>Race: <input type="text" /></div>
                            <div>Class: <input type="text" /></div>
                            <div>Background: <input type="text" /></div>
                        </div>
                    }
                    {step === 2 && 
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 2: Stats</h2>
                            <div>Health Points: <input type="number" /></div>
                            <div>Strength: <input type="number" /></div>
                            <div>Dexterity: <input type="number" /></div>
                            <div>Constitution: <input type="number" /></div>
                            <div>Intelligence: <input type="number" /></div>
                            <div>Wisdom: <input type="number" /></div>
                            <div>Charisma: <input type="number" /></div>
                        </div>
                    }
                    {step === 3 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 3: Masteries</h2>
                            <div>Class Mastery 1: <input type="text" /></div>
                            <div>Class Mastery 2: <input type="text" /></div>
                            <div>Class Mastery 3: <input type="text" /></div>
                            <div>Background Mastery 1: <input type="text" /></div>
                            <div>Background Mastery 2: <input type="text" /></div>
                            <div>Background Tool 1: <input type="text" /></div>
                            <div>Background Tool 2: <input type="text" /></div>
                            <div>Race Language 1: <input type="text" /></div>
                            <div>Race Language 2: <input type="text" /></div>
                        </div>
                    }
                    {step === 4 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 4: Class Capacities</h2>
                            <div>Level 1: <input type="text" /></div>
                            <div>Level 2: <input type="text" /></div>
                            <div>Level 3: <input type="text" /></div>
                            <div>Level 4: <input type="text" /></div>
                            <div>Level 5: <input type="text" /></div>
                        </div>
                    }
                    {step === 5 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 5: Options</h2>
                            <div>Archetype: <input type="text" /></div>
                            <div>Starter Pack: <input type="text" /></div>
                        </div>
                    }
                    {step === 6 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 6: Spells</h2>
                            <div>Spell 1: <input type="text" /></div>
                            <div>Spell 2: <input type="text" /></div>
                            <div>Spell 3: <input type="text" /></div>
                        </div>
                    }
                    {step === 7 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 7: Equipment</h2>
                            <div>Weapon 1: <input type="text" /></div>
                            <div>Weapon 2: <input type="text" /></div>
                            <div>Armor: <input type="text" /></div>
                            <div>Miscellaneous: <input type="text" /></div>
                        </div>
                    }
                    {step === 8 &&
                        <div>
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">Step 8: Yapping</h2>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}