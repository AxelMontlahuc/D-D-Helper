import { useState } from "react";
import { auth, db } from "@/firebase/init";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CreateCharacterPage() {
    const [characterData, setCharacterData] = useState({
        name: "",
        race: "",
        class: "",
        background: "",
        stats: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        }, 
        equipment: {
            meleeWeapon: "",
            rangedWeapon: "",
            martialMeleeWeapon: "",
            martialRangedWeapon: "",
            armor: "",
            shield: ""
        }
    });

    const [step, setStep] = useState(0);
    const totalSteps = 2;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleFinish = async () => {
        const user = auth.currentUser;
        try {
            const charactersRef = collection(db, `users/${user?.uid}/characters`);
            await addDoc(charactersRef, characterData);
            console.log("Character created successfully!");
        } catch (error) {
            console.error("Error creating character:", error);
        }
    }

    return (
        <main className="flex flex-col items-center justify-center h-[calc(100vh-76px)]">
            <div className="w-[90vw] h-[calc(90vh-79px)] m-12 p-8 flex flex-col items-center rounded-md border">
                <div className="w-full h-[40px] mb-8 flex flex-row items-center justify-between rounded-md">
                    <Button onClick={handlePrevious} className="hover:cursor-pointer">Previous</Button>
                    <Progress value={(step / totalSteps) * 100} className="w-[80%]" />
                    { step === totalSteps && 
                        <Button onClick={handleFinish} className="hover:cursor-pointer">Finish</Button>
                    }
                    { step < totalSteps &&
                        <Button onClick={handleNext} className="hover:cursor-pointer">Next</Button>
                    }
                </div>
                <div className="w-full h-full flex items-center justify-center rounded-md">
                    {step === 0 && (
                        <div className="h-min flex flex-col items-center p-4 gap-10">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 1: Basics
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Name: 
                                    <input 
                                        type="text" 
                                        value={characterData.name}
                                        onChange={(e) => setCharacterData({
                                            ...characterData,
                                            name: e.target.value
                                        })}
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px] text-[16px]" 
                                    />
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Race: 
                                    <Select 
                                        value={characterData.race}
                                        onValueChange={(v) => setCharacterData({
                                            ...characterData,
                                            race: v
                                        })}
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a race" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="dwarf">Dwarf</SelectItem>
                                            <SelectItem value="elf">Elf</SelectItem>
                                            <SelectItem value="halfling">Halfling</SelectItem>
                                            <SelectItem value="human">Human</SelectItem>
                                            <SelectItem value="dragonborn">Dragonborn</SelectItem>
                                            <SelectItem value="gnome">Gnome</SelectItem>
                                            <SelectItem value="halfelf">Half-Elf</SelectItem>
                                            <SelectItem value="halforc">Half-Orc</SelectItem>
                                            <SelectItem value="tiefling">Tiefling</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Class: 
                                    <Select 
                                        value={characterData.class}
                                        onValueChange={(v) => setCharacterData({
                                            ...characterData,
                                            class: v
                                        })}
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="barbarian">Barbarian</SelectItem>
                                            <SelectItem value="bard">Bard</SelectItem>
                                            <SelectItem value="cleric">Cleric</SelectItem>
                                            <SelectItem value="druid">Druid</SelectItem>
                                            <SelectItem value="fighter">Fighter</SelectItem>
                                            <SelectItem value="monk">Monk</SelectItem>
                                            <SelectItem value="paladin">Paladin</SelectItem>
                                            <SelectItem value="ranger">Ranger</SelectItem>
                                            <SelectItem value="rogue">Rogue</SelectItem>
                                            <SelectItem value="sorcerer">Sorcerer</SelectItem>
                                            <SelectItem value="warlock">Warlock</SelectItem>
                                            <SelectItem value="wizard">Wizard</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Background:
                                    <Select 
                                        value={characterData.background}
                                        onValueChange={(v) => setCharacterData({
                                            ...characterData,
                                            background: v
                                        })}
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a background" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="acolyte">Acolyte</SelectItem>
                                            <SelectItem value="charlatan">Charlatan</SelectItem>
                                            <SelectItem value="criminal">Criminal</SelectItem>
                                            <SelectItem value="entertainer">Entertainer</SelectItem>
                                            <SelectItem value="folkhero">Folk Hero</SelectItem>
                                            <SelectItem value="guildartisan">Guild Artisan</SelectItem>
                                            <SelectItem value="hermit">Hermit</SelectItem>
                                            <SelectItem value="noble">Noble</SelectItem>
                                            <SelectItem value="outlander">Outlander</SelectItem>
                                            <SelectItem value="sage">Sage</SelectItem>
                                            <SelectItem value="soldier">Soldier</SelectItem>
                                            <SelectItem value="urchin">Urchin</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 1 && (
                        <div className="h-min flex flex-col items-center p-4 gap-10">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 2: Stats
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Strength:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.strength}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    strength: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Dexterity:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.dexterity}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    dexterity: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Constitution:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.constitution}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    constitution: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Intelligence:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.intelligence}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    intelligence: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Wisdom:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.wisdom}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    wisdom: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Charisma:
                                    <input
                                        type="number"
                                        min={0}
                                        max={20}
                                        value={characterData.stats.charisma}
                                        onChange={(e) =>
                                            setCharacterData({
                                                ...characterData,
                                                stats: {
                                                    ...characterData.stats,
                                                    charisma: +e.target.value,
                                                },
                                            })
                                        }
                                        className="border rounded-md focus:outline-0 pl-2 pr-2 w-[300px]"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="h-min flex flex-col items-center p-4 gap-10">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 3: Equipment
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                <div className="text-2xl w-[600px] flex justify-between">
                                    Single Melee Weapon:
                                    <Select
                                        value={characterData.equipment.meleeWeapon}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    meleeWeapon: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a weapon" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="club">Club</SelectItem>
                                            <SelectItem value="dagger">Dagger</SelectItem>
                                            <SelectItem value="greatclub">Greatclub</SelectItem>
                                            <SelectItem value="handaxe">Handaxe</SelectItem>
                                            <SelectItem value="javelin">Javelin</SelectItem>
                                            <SelectItem value="lighthammer">Light Hammer</SelectItem>
                                            <SelectItem value="mace">Mace</SelectItem>
                                            <SelectItem value="quarterstaff">Quarterstaff</SelectItem>
                                            <SelectItem value="sickle">Sickle</SelectItem>
                                            <SelectItem value="spear">Spear</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Single Ranged Weapon:
                                    <Select
                                        value={characterData.equipment.rangedWeapon}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    rangedWeapon: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a weapon" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="lightcrossbow">Light Crossbow</SelectItem>
                                            <SelectItem value="dart">Dart</SelectItem>
                                            <SelectItem value="shortbow">Shortbow</SelectItem>
                                            <SelectItem value="sling">Sling</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Martial Melee Weapon:
                                    <Select
                                        value={characterData.equipment.martialMeleeWeapon}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    martialMeleeWeapon: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a weapon" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="battleaxe">Battleaxe</SelectItem>
                                            <SelectItem value="flail">Flail</SelectItem>
                                            <SelectItem value="glaive">Glaive</SelectItem>
                                            <SelectItem value="greataxe">Greataxe</SelectItem>
                                            <SelectItem value="greatsword">Greatsword</SelectItem>
                                            <SelectItem value="halberd">Halberd</SelectItem>
                                            <SelectItem value="lance">Lance</SelectItem>
                                            <SelectItem value="longsword">Longsword</SelectItem>
                                            <SelectItem value="maul">Maul</SelectItem>
                                            <SelectItem value="morningstar">Morningstar</SelectItem>
                                            <SelectItem value="pike">Pike</SelectItem>
                                            <SelectItem value="rapier">Rapier</SelectItem>
                                            <SelectItem value="scimitar">Scimitar</SelectItem>
                                            <SelectItem value="shortsword">Shortsword</SelectItem>
                                            <SelectItem value="trident">Trident</SelectItem>
                                            <SelectItem value="warpick">War Pick</SelectItem>
                                            <SelectItem value="warhammer">Warhammer</SelectItem>
                                            <SelectItem value="whip">Whip</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Martial Ranged Weapon:
                                    <Select
                                        value={characterData.equipment.martialRangedWeapon}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    martialRangedWeapon: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick a weapon" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="blowgun">Blowgun</SelectItem>
                                            <SelectItem value="handcrossbow">Hand Crossbow</SelectItem>
                                            <SelectItem value="heavycrossbow">Heavy Crossbow</SelectItem>
                                            <SelectItem value="longbow">Longbow</SelectItem>
                                            <SelectItem value="net">Net</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Armor:
                                    <Select
                                        value={characterData.equipment.armor}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    armor: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Pick an armor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="padded">Padded</SelectItem>
                                            <SelectItem value="leather">Leather</SelectItem>
                                            <SelectItem value="studdedleather">Studded Leather</SelectItem>
                                            <SelectItem value="hide">Hide</SelectItem>
                                            <SelectItem value="chainshirt">Chain Shirt</SelectItem>
                                            <SelectItem value="scalemail">Scale Mail</SelectItem>
                                            <SelectItem value="breastplate">Breastplate</SelectItem>
                                            <SelectItem value="halfplate">Half Plate</SelectItem>
                                            <SelectItem value="ringmail">Ring Mail</SelectItem>
                                            <SelectItem value="chainmail">Chain Mail</SelectItem>
                                            <SelectItem value="splint">Splint</SelectItem>
                                            <SelectItem value="plate">Plate</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="text-2xl w-[600px] flex justify-between">
                                    Shield:
                                    <Select
                                        value={characterData.equipment.shield}
                                        onValueChange={(v) =>
                                            setCharacterData({
                                                ...characterData,
                                                equipment: {
                                                    ...characterData.equipment,
                                                    shield: v,
                                                },
                                            })
                                        }
                                    >
                                        <SelectTrigger className="w-[300px]">
                                            <SelectValue placeholder="Shield?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="shield">Yes</SelectItem>
                                            <SelectItem value="noshield">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}
                    {/*{step === 3 && (
                        <div className="h-min flex flex-col items-center p-4 gap-10">
                            <h2 className="w-full bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
                                Step 4: Spells
                            </h2>
                            <div className="flex flex-col items-center gap-6">
                                WIP
                            </div>
                        </div>
                    )}*/}
                </div>
            </div>
        </main>
    );
}