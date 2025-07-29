"use client";

import Link from "next/link";
import { FaPaw } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full px-6 py-4 flex items-center justify-between shadow-md">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-dark-blue flex items-center gap-2">
                <FaPaw className="text-2xl" />
                Patas e Propósitos
            </Link>

            {/* Botão do menu (visível apenas em mobile) */}
            <button 
                className="md:hidden text-2xl text-dark-blue"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Navegação */}
            <nav className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent transition-all duration-300 shadow-md md:shadow-none ${menuOpen ? "flex" : "hidden"}`}>
                <Link href="/" className="relative px-4 py-2 group">
                    <span className="text-gray-800">Adote um cão</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-dark-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/sobre" className="relative px-4 py-2 group">
                    <span className="text-gray-800">Adote um gato</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-dark-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>
        </header>
    );
}
