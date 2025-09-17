import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full mt-10 border-t border-gray-200 bg-white py-6 flex flex-col text-center items-center text-sm text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} Patas e Propósitos. Todos os direitos reservados.
            </p>
            <p className="mt-3 flex items-center">
                Feito com
                <span className="mx-2 text-red-500"><FaHeart /></span>
                por <span className="ml-1 font-medium text-gray-700">@BiaTrivillin</span>
            </p>
        </footer>
    );
}
