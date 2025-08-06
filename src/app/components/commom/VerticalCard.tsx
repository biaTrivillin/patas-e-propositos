'use client';

import { Animal } from "@patas/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiZoomIn } from "react-icons/fi";

type VerticalCardProps = {
    animal: Animal;
};

const VerticalCard = ({ animal }: VerticalCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-3 items-start">
                <div className="relative w-full aspect-[4/3] md:h-80 bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${animal.imagem})` }}>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute bottom-2 right-2 bg-dark-blue bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition"
                    >
                        <FiZoomIn size={20} />
                    </button>
                </div>

                <h2 className="text-xl md:text-2xl font-bold">{animal.nome}</h2>
                <p className="text-sm md:text-md">{animal.minibio}</p>
                <Link
                    href={`animais/${animal.id}`}
                    className="px-3 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
                >
                    saiba mais
                </Link>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <Image
                        src={animal.imagem}
                        alt={animal.nome}
                        className="max-w-full max-h-full object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
};

export default VerticalCard;
