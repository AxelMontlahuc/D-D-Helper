import { useState, useEffect } from "react";
import { auth, db } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CharactersPage() {
    interface Character {
        id: string;
        name: string;
        race: string;
        class: string;
        background: string;
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
            race: doc.data().race || "Unknown Race",
            class: doc.data().class || "Unknown Class",
            background: doc.data().background || "Unknown Background",
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

            <Card className="w-[90vw] h-[75vh] flex items-center justify-center mt-8">
                <div className="w-[85%] flex justify-between items-center px-4 py-2">
                    <h2 className="text-[20px] font-semibold">Characters</h2>
                    <Button
                        onClick={() => router.push("/create-character")}
                        className="hover:cursor-pointer"
                    >
                        Add Character
                    </Button>
                </div>
                <div className="w-[85%] h-[70%]">
                    <Table>
                        <TableHeader>
                            <TableRow className="">
                                <TableHead className="text-left px-4 py-2">Name</TableHead>
                                <TableHead className="text-left px-4 py-2">Race</TableHead>
                                <TableHead className="text-left px-4 py-2">Class</TableHead>
                                <TableHead className="text-left px-4 py-2">Background</TableHead>
                                <TableHead className="text-left px-4 py-2">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="border rounded-md">
                            {characters.map((character) => (
                                <TableRow
                                    key={character.id}
                                    className="cursor-pointer"
                                >
                                    <TableCell className="px-4 py-2">{character.name}</TableCell>
                                    <TableCell className="px-4 py-2">{character.race}</TableCell>
                                    <TableCell className="px-4 py-2">{character.class}</TableCell>
                                    <TableCell className="px-4 py-2">{character.background}</TableCell>
                                    <TableCell className="px-4 py-2 w-[0px]">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/character/${character.id}`)}
                                            className="hover:cursor-pointer"
                                        >
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </main>
    );
}