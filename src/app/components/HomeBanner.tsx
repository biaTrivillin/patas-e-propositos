import Image from "next/image";

const HomeBanner = () => {
    return (
        <div className="mt-30 flex gap-8">
            <div className="flex flex-col gap-5 flex-1">
                <h1 className="text-6xl font-bold">Patas e Propósitos</h1>
                <h2 className="text-2xl font-light">Conectando corações que latem e ronronam com lares cheios de amor.</h2>
                <div className="flex justify-start">
                    <button className="px-4 py-2 bg-blue-200 text-lg text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md">
                        adote um amigo
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 flex-2">
                <Image src="https://placekitten.com/600/400"
                    alt="Imagem principal"
                    className="w-full h-auto rounded" />    
                <div className="flex gap-4">
                    <Image src="https://placekitten.com/600/400"
                    alt="Imagem principal"
                    className="w-full h-auto rounded" />
                    <Image src="https://placekitten.com/600/400"
                    alt="Imagem principal"
                    className="w-full h-auto rounded" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
