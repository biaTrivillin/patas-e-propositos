'use client';

import { Animal } from "@patas/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDog } from "react-icons/fa";

const AdoptionSection = () => {
    const [animais, setAnimais] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch('/api/animais/cachorros');
            const data = await res.json();
            setAnimais(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (animais.length === 0) return <div>Nenhum animal encontrado.</div>;

    return (
        <div className="px-4 md:px-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-5 flex gap-2 items-center">
                Adote um cachorro <FaDog className="text-3xl md:text-4xl" />
            </h1>

            <div className="flex flex-col md:flex-row gap-8 mb-20">
                <div className="flex-1 flex flex-col gap-3 items-start">
                    <div
                        className="w-full aspect-[4/3] md:h-80 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${animais[0].imagem})` }}
                    ></div>

                    <h2 className="text-xl md:text-2xl font-bold">{animais[0].nome}</h2>
                    <p className="text-sm md:text-md">{animais[0].minibio}</p>
                    <Link
                        href="#"
                        className="px-3 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
                    >
                        saiba mais
                    </Link>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    {animais.slice(1, 4).map(animal => (
                        <div key={animal.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                            <div
                                className="w-full sm:w-40 aspect-square flex-shrink-0 rounded-xl bg-cover bg-center"
                                style={{ backgroundImage: `url(${animal.imagem})` }}
                            ></div>

                            <div className="flex flex-col flex-grow items-start">
                                <h2 className="text-xl md:text-2xl font-bold">{animal.nome}</h2>
                                <p className="text-sm md:text-md text-gray-700 line-clamp-3">
                                    {animal.minibio}
                                </p>
                                <Link
                                    href="#"
                                    className="px-3 mt-2 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
                                >
                                    saiba mais
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdoptionSection;
