'use client';

import { Animal } from "@patas/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import HorizontalCard from "./commom/HorizontalCard";
import Loader from "./commom/Loader";

type AdoptionSectionProps = {
    especie: string;
    icon: React.ReactNode;
    codigo: string;
};

const AdoptionSection = ({ especie, icon, codigo }: AdoptionSectionProps) => {
    const [animais, setAnimais] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(codigo)
    })

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/animais/${codigo}`);
            const data = await res.json();
            setAnimais(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) return <Loader/>;
    if (animais.length === 0) return <div>Nenhum animal encontrado.</div>;

    return (
        <div className="px-4 md:px-8" key={codigo}>
            <h1 className="text-2xl md:text-3xl font-bold mb-5 flex gap-2 items-center">
                Adote um {especie} {icon}
            </h1>

            <div className="flex flex-col md:flex-row gap-8 mb-5 border-b pb-10 border-gray-300">
                <div className="flex-1 flex flex-col gap-3 items-start">
                    <div
                        className="w-full aspect-[4/3] md:h-80 bg-cover bg-center rounded-xl"
                        style={{ backgroundImage: `url(${animais[0].imagem})` }}
                    ></div>

                    <h2 className="text-xl md:text-2xl font-bold">{animais[0].nome}</h2>
                    <p className="text-sm md:text-md">{animais[0].minibio}</p>
                    <Link
                        href={`/animais/${animais[0].id}`}
                        className="px-3 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
                    >
                        saiba mais
                    </Link>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    {animais.slice(1, 4).map(animal => (
                        <HorizontalCard animal={animal} />
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Link
                    href={`/${codigo}`}
                    className="px-3 py-2 bg-dark-blue text-sm md:text-md text-white  rounded-lg hover:bg-blue-300 transition shadow-md"
                >
                    Ver todos
                </Link>
            </div>
        </div>
    );
};

export default AdoptionSection;
