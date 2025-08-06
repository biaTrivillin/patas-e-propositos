'use client';

import { Animal } from "@patas/types";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import VerticalCard from "../components/commom/VerticalCard";
import Loader from "../components/commom/Loader";
import { FaCat, FaDog } from "react-icons/fa";

type PageProps = {
    params: Promise<{ codigo: string }>;
};

export default function AnimalsPage({ params }: PageProps) {
    const { codigo } = use(params);
    const [loading, setLoading] = useState(false);
    const [animais, setAnimais] = useState<Animal[]>([]);

    const isCodigoValido = codigo === 'gatos' || codigo === 'cachorros';

    const especies = {
        cachorros: {
            codigo: "cachorros",
            especie: "cachorro",
            icon: <FaDog className="text-4xl" />,
            text: 'Transforme o destino de um cãozinho com um simples gesto de amor...'
        },
        gatos: {
            codigo: "gatos",
            especie: "gato",
            icon: <FaCat className="text-4xl" />,
            text: "Transforme o destino de um gatinho com um simples gesto de carinho..."
        }
    };

    useEffect(() => {
        if (!isCodigoValido) return;

        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/animais/${codigo}`);
            const data = await res.json();
            setAnimais(data);
            setTimeout(() => setLoading(false), 3000);
        }

        fetchData();
    }, [codigo, isCodigoValido]);

    if (!isCodigoValido) return notFound();

    if (loading) return <Loader />;

    return (
        <>
            <div className="bg-salmon w-full h-50 rounded-b-lg"></div>
            <div className="max-w-xl p-6 shadow-lg rounded-lg bg-gray -mt-20 ml-10">
                <h1 className="text-3xl font-bold mb-3 flex gap-2">
                    Adote um {especies[codigo].especie} {especies[codigo].icon}
                </h1>
                <p>{especies[codigo].text}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 my-20 px-5">
                {animais.map((animal) => (
                    <VerticalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </>
    );
}
