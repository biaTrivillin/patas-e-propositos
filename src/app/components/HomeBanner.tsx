const HomeBanner = () => {
    return (
        <div className="mt-30 flex flex-col md:flex-row gap-6">
            {/* Coluna de texto */}
            <div className="flex flex-col gap-5 flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold">Patas e Propósitos</h1>
                <h2 className="text-lg md:text-2xl font-light">
                    Conectando corações que latem e ronronam com lares cheios de amor.
                </h2>
                <div className="flex justify-center md:justify-start">
                    <a href="#adote" className="px-4 py-2 bg-blue-200 text-lg text-dark-blue rounded-lg hover:bg-blue-300 transition shadow-md">
                        adote um amigo
                    </a>
                </div>
            </div>

            {/* Coluna de imagens */}
            <div className="flex flex-col md:flex-row flex-2 gap-4">
                <div className="w-full md:w-1/2 h-60 md:h-auto bg-[url('/images/freepik__the-style-is-candid-image-photography-with-natural__78755.jpeg')] bg-cover bg-center rounded-lg"></div>

                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div className="flex-1 h-40 md:h-auto bg-[url('/images/freepik__the-style-is-candid-image-photography-with-natural__78758.jpeg')] bg-cover bg-center rounded-lg"></div>
                    <div className="flex-1 h-40 md:h-auto bg-[url('/images/freepik__the-style-is-candid-image-photography-with-natural__78759.jpeg')] bg-cover bg-start rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
