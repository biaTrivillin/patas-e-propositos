import { Animal } from "@patas/types";
import { FaDog, FaCat, FaVenus, FaMars, FaSyringe, FaRulerVertical, FaBirthdayCake } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

type AnimalInfoCardProps = {
    animal: Animal;
};

export default function AnimalInfoCard({ animal }: AnimalInfoCardProps) {
    return (
        <div className="w-full p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col gap-4 h-full">
            <h3 className="text-2xl font-semibold border-b border-gray-300 pb-3">Informações</h3>

            <InfoRow
                icon={animal.especie === 'gato' ? <FaCat /> : <FaDog />}
                label="Espécie"
                value={animal.especie}
            />

            <InfoRow
                icon={<FaRulerVertical />}
                label="Porte"
                value={animal.porte}
            />

            <InfoRow
                icon={<FaBirthdayCake />}
                label="Idade"
                value={`${animal.idade} ${animal.idade === 1 ? 'ano' : 'anos'}`}
            />

            <InfoRow
                icon={animal.sexo === 'fêmea' ? <FaVenus /> : <FaMars />}
                label="Sexo"
                value={animal.sexo}
            />

            <InfoRow
                icon={<FaDog />}
                label="Raça"
                value={animal.raca}
            />

            {/* Selos de status */}
            {(animal.castrado || animal.vacinado) && (
                <div className="flex flex-col gap-3 mt-1 items-start">
                    {animal.vacinado && (
                        <Badge icon={<FaSyringe />} text="Vacinado" />
                    )}
                    {animal.castrado && (
                        <Badge icon={<FaScissors />} text="Castrado" />
                    )}
                </div>
            )}
        </div>
    );
}

type InfoRowProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

function InfoRow({ icon, label, value }: InfoRowProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="text-salmon text-2xl">{icon}</div>
            <div className="flex gap-1">
                <span className="text-lg font-bold">{label}:</span>
                <span className="text-lg">{value}</span>
            </div>
        </div>
    );
}

type BadgeProps = {
    icon: React.ReactNode;
    text: string;
};

function Badge({ icon, text }: BadgeProps) {
    return (
        <span className="flex items-center gap-1 bg-salmon text-white px-3 py-1 rounded-full text-sm font-medium shadow">
            {icon}
            {text}
        </span>
    );
}
