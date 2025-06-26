import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from "@/firebase/init";
import { Card } from "@/components/ui/card";

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
        if (!userId || !id) return; // Ensure userId and id are available before fetching

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
    }, [userId, id]); // Re-run the effect if userId or id changes

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
        <main className="flex flex-col items-center h-[calc(100vh-76px)]">
            <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                {character.name}
            </h1>

            <Card className="w-[90vw] h-auto flex flex-col items-center justify-center mt-8 p-8">
                <h2 className="text-[24px] font-semibold mb-4">Character Details</h2>
                <p><strong>Race:</strong> {character.race}</p>
                <p><strong>Class:</strong> {character.class}</p>
                <p><strong>Background:</strong> {character.background}</p>
                <h3 className="text-[20px] font-semibold mt-6">Stats</h3>
                <ul>
                    <li><strong>Strength:</strong> {character.stats.strength}</li>
                    <li><strong>Dexterity:</strong> {character.stats.dexterity}</li>
                    <li><strong>Constitution:</strong> {character.stats.constitution}</li>
                    <li><strong>Intelligence:</strong> {character.stats.intelligence}</li>
                    <li><strong>Wisdom:</strong> {character.stats.wisdom}</li>
                    <li><strong>Charisma:</strong> {character.stats.charisma}</li>
                </ul>
                <h3 className="text-[20px] font-semibold mt-6">Equipment</h3>
                <ul>
                    <li><strong>Melee Weapon:</strong> {character.equipment.meleeWeapon}</li>
                    <li><strong>Ranged Weapon:</strong> {character.equipment.rangedWeapon}</li>
                    <li><strong>Martial Melee Weapon:</strong> {character.equipment.martialMeleeWeapon}</li>
                    <li><strong>Martial Ranged Weapon:</strong> {character.equipment.martialRangedWeapon}</li>
                    <li><strong>Armor:</strong> {character.equipment.armor}</li>
                    <li><strong>Shield:</strong> {character.equipment.shield}</li>
                </ul>
            </Card>
        </main>
    );
}