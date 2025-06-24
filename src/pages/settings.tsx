import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Settings() {
    const [tab, setTab] = useState('general');
    const handleTabChange = (newTab: string) => {
        setTab(newTab);
    }

    return (
        <main className="flex flex-col items-center h-[calc(100vh-76px)]">
            <h1 className="m-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
                Settings
            </h1>

            <Card className="w-[70vw] h-[60vh] p-0 flex flex-row gap-0">
                <Card className="flex flex-col items-center h-full w-[15vw] rounded-r-none">
                    <CardContent onClick={() => handleTabChange("general")} className="hover:cursor-pointer hover:bg-input rounded-md w-full text-center">General</CardContent>
                    <CardContent onClick={() => handleTabChange("theme")} className="hover:cursor-pointer hover:bg-input rounded-md w-full text-center">Theme</CardContent>
                    <CardContent className="hover:cursor-pointer hover:bg-input rounded-md w-full text-center">
                        <Link href="/account">Account</Link>
                    </CardContent>
                </Card>

                <Card className="h-full w-[55vw] flex flex-col p-12 rounded-l-none">
                    {tab === 'general' && (
                        <CardContent className="flex flex-row justify-between ">
                            Name <input type="text" className="bg-input rounded-md pl-2 pr-2 focus:outline-none focus:ring-0" />
                        </CardContent>
                    )}
                    {tab === 'theme' && (
                        <CardContent className="flex flex-row justify-between ">
                            Theme <input type="text" className="bg-input rounded-md pl-2 pr-2 focus:outline-none focus:ring-0" />
                        </CardContent>
                    )}
                </Card>
            </Card>
        </main>
    )
}