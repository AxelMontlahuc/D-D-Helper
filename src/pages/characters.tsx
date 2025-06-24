import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CharactersPage() {
    interface Character {
        id: string;
        name: string;
        [key: string]: any;
    }

    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
    const [characters, setCharacters] = useState<Character[]>([]);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoggedIn(!!user);
            if (user) {
                fetchCharacters(user.uid);
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchCharacters = async (userId: string) => {
        const charactersRef = collection(db, `users/${userId}/characters`);
        const snapshot = await getDocs(charactersRef);
        const charactersData = snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name || "Unnamed Character",
            ...doc.data()
        }));
        setCharacters(charactersData);
    };

    if (loggedIn === null) {
        return <div>Loading...</div>;
    }

    if (!loggedIn) {
        router.push("/account");
        return null;
    }

    return (
        <main className="flex flex-col items-center h-[calc(100vh-76px)]">
            <h1 className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                My Characters
            </h1>

                <Card className="w-[90vw] h-[65vh] p-0 flex flex-row gap-0 mt-8 p-8">
                <Table className="w-full h-full flex flex-col items-center">
                    <TableHeader className="w-full flex flex-row justify-between items-center">
                        <h2 className="text-[20px]">Characters</h2>
                        <Button
                            onClick={() => router.push("/create-character")}
                        >
                            Add Character
                        </Button>
                    </TableHeader>
                    <div className="w-[95%] flex flex-col items-center">
                        <Separator className="m-8" />
                    </div>
                    <tbody>
                        {characters.map((character) => (
                            <TableRow
                                key={character.id}
                                onClick={() => router.push(`/character/${character.id}`)}
                                className="cursor-pointer hover:bg-gray-100"
                            >
                                <TableCell>{character.name}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                </Card>
        </main>
    );
}