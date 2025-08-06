import { Animal } from "@patas/types";
import Link from "next/link";

type HorizontalCardProps = {
  animal: Animal;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({animal}) => {
    return (
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
                    href={`/animais/${animal.id}`}
                    className="px-3 mt-2 py-2 bg-blue-200 text-sm md:text-md text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md"
                >
                    saiba mais
                </Link>
            </div>
        </div>
    )
}

export default HorizontalCard;