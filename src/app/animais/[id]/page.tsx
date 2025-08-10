'use client';

import { Animal } from "@patas/types";
import { use, useEffect, useState } from "react";
import VerticalCard from "../../components/commom/VerticalCard";
import Loader from "../../components/commom/Loader";
import AnimalInfoCard from "@patas/app/components/commom/AnimalInfoCard";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default function AnimalsPage({ params }: PageProps) {
    const { id } = use(params);

    const [loading, setLoading] = useState(false);
    const [animal, setAnimal] = useState<Animal>();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(`/api/animais/${id}`);
            const data = await res.json();
            setAnimal(data);
            setLoading(false);
        }
        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="bg-salmon w-full h-50 rounded-b-lg"></div>

            <div className="flex flex-col md:flex-row -mt-24 mx-5 gap-6 md:gap-10">
                {animal && (
                    <>
                        <div className="w-full md:w-3/4">
                            <VerticalCard animal={animal} />
                        </div>
                        <div className="w-full md:w-1/4">
                            <AnimalInfoCard animal={animal} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
