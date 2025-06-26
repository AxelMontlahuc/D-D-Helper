import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@/firebase/init";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function CharacterPage() {
    const router = useRouter();
    const { userId, id } = router.query;

    const [character, setCharacter] = useState<Character | null>(null);
    const [loading, setLoading] = useState(true);

    interface Character {
        id: string;
        name: string;
        race: string;
        class: string;
        background: string;
        stats: {
            strength: number;
            dexterity: number;
            constitution: number;
            intelligence: number;
            wisdom: number;
            charisma: number;
        };
        equipment: {
            meleeWeapon: string;
            rangedWeapon: string;
            martialMeleeWeapon: string;
            martialRangedWeapon: string;
            armor: string;
            shield: string;
        };
    }

    useEffect(() => {
        if (!userId || !id) return;

        const fetchCharacter = async () => {
            try {
                const characterDocRef = doc(db, `users/${userId}/characters`, id as string);
                const characterDoc = await getDoc(characterDocRef);

                if (characterDoc.exists()) {
                    setCharacter(characterDoc.data() as Character);
                } else {
                    console.error("Character not found");
                    setCharacter(null);
                }
            } catch (error) {
                console.error("Error fetching character:", error);
                setCharacter(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [userId, id]);

    if (loading) {
        return (
            <main className="flex flex-col items-center h-[calc(100vh-76px)]">
                <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                    Loading Character...
                </h1>
            </main>
        );
    }

    if (!character) {
        return (
            <main className="flex flex-col items-center h-[calc(100vh-76px)]">
                <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                    Character not found
                </h1>
            </main>
        );
    }

    return (
        <main className="flex items-center justify-center">
            <Card className="w-[90vw] h-[80vh] flex flex-col justify-center mt-8 p-20">
                <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                    {character.name}
                </h1>

                <div className="flex flex-row h-[100%] w-[100%]">
                    <Card className="w-[50%] h-[100%] rounded-r-none p-12">
                        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">
                            Stats
                        </h2>
                        <ul className="h-full flex flex-col justify-between">
                            <li>
                                Strength: {character.stats.strength}
                                <Progress value={character.stats.strength * 100 / 20} />
                            </li>
                            <li>
                                Dexterity: {character.stats.dexterity}
                                <Progress value={character.stats.dexterity * 100 / 20} />
                            </li>
                            <li>
                                Constitution: {character.stats.constitution}
                                <Progress value={character.stats.constitution * 100 / 20} />
                            </li>
                            <li>
                                Intelligence: {character.stats.intelligence}
                                <Progress value={character.stats.intelligence * 100 / 20} />
                            </li>
                            <li>
                                Wisdom: {character.stats.wisdom}
                                <Progress value={character.stats.wisdom * 100 / 20} />
                            </li>
                            <li>
                                Charisma: {character.stats.charisma}
                                <Progress value={character.stats.charisma * 100 / 20} />
                            </li>
                        </ul>
                    </Card>
                    <div className="flex flex-col w-[50%] h-[100%]">
                        <Card className="w-[100%] h-[50%] rounded-l-none p-12">
                            <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">
                                Basics
                            </h2>
                            <ul className="h-full flex flex-col justify-between">
                                <li>Race: {character.race}</li>
                                <li>Class: {character.class}</li>
                                <li>Background: {character.background}</li>
                            </ul>
                        </Card>
                        <Card className="w-[100%] h-[50%] rounded-l-none p-12">
                            <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl">
                                Equipment
                            </h2>
                            <ul className="h-full flex flex-col justify-between">
                                <li>Melee Weapon: {character.equipment.meleeWeapon}</li>
                                <li>Ranged Weapon: {character.equipment.rangedWeapon}</li>
                                <li>Martial Melee Weapon: {character.equipment.martialMeleeWeapon}</li>
                                <li>Martial Ranged Weapon: {character.equipment.martialRangedWeapon}</li>
                                <li>Armor: {character.equipment.armor}</li>
                                <li>Shield: {character.equipment.shield}</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Card>
        </main>
    );
}