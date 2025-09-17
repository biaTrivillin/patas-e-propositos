'use client';

import { Animal } from "@patas/types";
import { notFound } from "next/navigation";
import { use, useEffect, useState, useMemo } from "react";
import VerticalCard from "../components/commom/VerticalCard";
import Loader from "../components/commom/Loader";
import { FaCat, FaDog, FaSearch, FaVenusMars } from "react-icons/fa";
import { MdStraighten } from "react-icons/md";

type PageProps = {
    params: Promise<{ codigo: string }>;
};

export default function AnimalsPage({ params }: PageProps) {
    const { codigo } = use(params);

    const [loading, setLoading] = useState(false);
    const [animaisOriginais, setAnimaisOriginais] = useState<Animal[]>([]);
    const [nome, setNome] = useState("");
    const [porte, setPorte] = useState("");
    const [sexo, setSexo] = useState("");

    const isCodigoValido = codigo === "gatos" || codigo === "cachorros";

    const especies = {
        cachorros: {
            codigo: "cachorros",
            especie: "cachorro",
            icon: <FaDog className="text-4xl" />,
        },
        gatos: {
            codigo: "gatos",
            especie: "gato",
            icon: <FaCat className="text-4xl" />,
        },
    } as const;

    useEffect(() => {
        if (!isCodigoValido) return;

        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(`/api/animais/${codigo}`);
                const data: Animal[] = await res.json();
                setAnimaisOriginais(data);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [codigo, isCodigoValido]);

    const animaisFiltrados = useMemo(() => {
        return animaisOriginais.filter((animal) => {
            const matchNome = nome
                ? animal.nome.toLowerCase().includes(nome.toLowerCase())
                : true;
            const matchPorte = porte ? animal.porte === porte : true;
            const matchSexo = sexo ? animal.sexo === sexo : true;

            return matchNome && matchPorte && matchSexo;
        });
    }, [animaisOriginais, nome, porte, sexo]);

    function limparFiltros() {
        setNome("");
        setPorte("");
        setSexo("");
    }

    if (!isCodigoValido) return notFound();

    if (loading) return <Loader />;

    return (
        <>
            <div className="bg-salmon w-full h-50 rounded-b-lg"></div>
            <div className="max-w-xl p-6 shadow-lg rounded-lg bg-gray -mt-20 ml-10">
                <h1 className="text-3xl font-bold mb-3 flex gap-2">
                    Adote um {especies[codigo].especie} {especies[codigo].icon}
                </h1>
                <p>
                    Ao adotar, você não está apenas oferecendo um lar: está dando
                    uma nova chance, um futuro cheio de carinho e segurança. Cada
                    olhar, cada brincadeira e cada lambida será a prova de que o seu
                    gesto mudou uma vida para sempre.
                </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 items-center">
                <div className="relative flex-1 min-w-[200px]">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        id="nome"
                        placeholder="Pesquise por nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="relative flex-1 min-w-[160px]">
                    <MdStraighten className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                        id="porte"
                        value={porte}
                        onChange={(e) => setPorte(e.target.value)}
                        className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Porte</option>
                        <option value="pequeno">Pequeno</option>
                        <option value="medio">Médio</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>

                <div className="relative flex-1 min-w-[160px]">
                    <FaVenusMars className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select
                        id="sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                        className="appearance-none pl-10 pr-8 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Sexo</option>
                        <option value="femea">Fêmea</option>
                        <option value="macho">Macho</option>
                    </select>
                </div>

                <button
                    onClick={limparFiltros}
                    className="px-4 py-2 text-sm underline font-medium text-gray-600 hover:text-red-500 transition"
                >
                    Limpar filtros
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 my-20 px-5">
                {animaisFiltrados.length > 0 ? (
                    animaisFiltrados.map((animal) => (
                        <VerticalCard key={animal.id} animal={animal} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        Nenhum animal encontrado.
                    </p>
                )}
            </div>
        </>
    );
}
