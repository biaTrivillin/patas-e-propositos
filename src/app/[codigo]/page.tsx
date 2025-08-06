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
    const [loading, setLoading] = useState(false)
    const [animais, setAnimais] = useState<Animal[]>([])

    if (codigo !== 'gatos' && codigo !== 'cachorros') {
        return notFound();
    }

    const especies = {
        cachorros: {
            codigo: "cachorros",
            especie: "cachorro",
            icon: <FaDog className="text-4xl" />,
            text: 'Transforme o destino de um cãozinho com um simples gesto de amor. Ao adotar, você não apenas oferece um lar, mas ganha um amigo leal para todas as horas. Cada olhar de gratidão, cada rabinho abanando, será um lembrete diário de que você fez a escolha certa.'
        },
        gatos: {
            codigo: "gatos",
            especie: "gato",
            icon: <FaCat className="text-4xl" />,
            text: "Transforme o destino de um gatinho com um simples gesto de carinho. Ao adotar, você não apenas oferece um lar, mas conquista um companheiro cheio de personalidade. Cada ronronar de contentamento, cada olhar curioso e cada momento de afeto será um lembrete diário de que você fez a escolha certa."
        }
    }


    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/animais/${codigo}`);
            const data = await res.json();
            setAnimais(data);

            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
        fetchData();
    }, [codigo]);


    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="bg-salmon w-full h-50 rounded-b-lg"></div>
            <div className="max-w-xl p-6 shadow-lg rounded-lg bg-gray -mt-20 ml-10">
                <h1 className="text-3xl font-bold mb-3 flex gap-2">Adote um {especies[codigo].especie} {especies[codigo].icon}</h1>
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
