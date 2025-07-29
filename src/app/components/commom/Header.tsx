"use client";

import Link from "next/link";
import { FaPaw } from "react-icons/fa";

export function Header() {
    return (
        <header className="w-full px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-dark-blue flex items-center gap-2">
                <FaPaw className="text-2xl" />
                Patas e Propósitos
            </Link>

            <nav className="space-x-4">
                <Link href="/" className="relative inline-block group">
                    <span className="text-gray-800">Adote um cão</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-dark-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/sobre" className="relative inline-block group">
                    <span className="text-gray-800">Adote um gato</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-dark-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

        </header>
    );
}
