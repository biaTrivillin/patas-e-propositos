import { Animal } from "@patas/types";
import Link from "next/link"

type VerticalCardProps = {
    animal: Animal;
};


const VerticalCard = ({ animal }: VerticalCardProps) => {
    return (
        <div className="flex flex-col gap-3 items-start">
            <div
                className="w-full aspect-[4/3] md:h-80 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${animal.imagem})` }}
            ></div>

            <h2 className="text-xl md:text-2xl font-bold">{animal.nome}</h2>
            <p className="text-sm md:text-md">{animal.minibio}</p>
            <Link
                href="#"
                className="px-3 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
            >
                saiba mais
            </Link>
        </div>
    )
}

export default VerticalCard;