"use client";

import { FaBook, FaBookOpen, FaPlayCircle, FaVideo } from "react-icons/fa";

export default function RecursosEducativos() {
    const artigos = [
        {
            titulo: "Cuidados Essenciais com seu Pet",
            descricao: "Aprenda como oferecer os cuidados básicos para a saúde e bem-estar do seu animal.",
            imagem: "/images/close-up-hand-holding-dog-paw.jpg",
            link: "#",
        },
        {
            titulo: "Alimentação Saudável",
            descricao: "Descubra quais são os alimentos ideais para cães e gatos em cada fase da vida.",
            imagem: "/images/still-life-pet-food-arrangement.jpg",
            link: "#",
        },
        {
            titulo: "Adoção Responsável",
            descricao: "Entenda a importância da adoção consciente e as responsabilidades envolvidas.",
            imagem: "/images/side-view-rescue-dog-loving-affection-receives-from-woman-shelter.jpg",
            link: "#",
        },
    ];

    const videos = [
        {
            titulo: "Dicas para adestramento inicial",
            thumbnail: "/images/side-view-woman-playing-with-her-dog-park.jpg",
            link: "#",
        },
        {
            titulo: "Como preparar sua casa para um novo pet",
            thumbnail: "/images/freepik__adjust__51609.png",
            link: "#",
        },
        {
            titulo: "Cuidados veterinários básicos",
            thumbnail: "/images/close-up-veterinarian-taking-care-pet.jpg",
            link: "#",
        },
    ];

    return (
        <div className="min-h-screen text-gray-800">
            <div className="text-white bg-salmon w-full h-70 rounded-b-lg flex items-center justify-center relative">
                <img className="max-h-70 rounded-b-lg absolute start-0 bottom-0" src="/images/front-view-beautiful-dog-with-copy-space_1-removebg-preview.png" alt="" />
                <div className="flex justify-center flex-col">
                    <h1 className="text-5xl font-bold text-center">Recursos Educativos</h1>
                    <p className="mt-2 text-2xl">Aprenda tudo sobre adoção responsável e cuidados com pets</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Introdução */}
                <section className="mb-20 mt-10 text-center shadow-sm p-10 mx-auto max-w-3xl flex flex-col rounded-xl border border-gray-300">
                    <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center gap-3">
                        <FaBookOpen size={30} />
                        Por que aprender é importante?
                        <FaBookOpen size={30} />
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Antes de adotar, é essencial entender as responsabilidades e cuidados necessários
                        para garantir o bem-estar do animal e uma convivência saudável.
                    </p>
                </section>

                <section className="mb-30">
                    <h3 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-2 flex items-center gap-2">
                        <FaBook className="text-2xl"/>
                        Artigos Informativos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {artigos.map((artigo, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
                            >
                                <img
                                    src={artigo.imagem}
                                    alt={artigo.titulo}
                                    className="w-full h-48 object-cover rounded-xl mb-4"
                                />
                                <h4 className="text-xl font-semibold mb-2">{artigo.titulo}</h4>
                                <p className="text-gray-600 mb-4">{artigo.descricao}</p>
                                <a
                                    href={artigo.link}
                                    className="mt-auto bg-dark-blue text-white px-4 py-2 rounded-xl hover:bg-green-700 text-center"
                                >
                                    Ler mais
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl flex items-center gap-2 font-bold mb-6 border-b border-gray-200 pb-2">
                        <FaVideo className="text-2xl" />
                        Vídeos Educativos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.titulo}
                                    className="w-full h-48 object-cover group-hover:opacity-80 transition"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <FaPlayCircle className="-mt-10 w-16 h-16 text-white drop-shadow-lg" />
                                </div>
                                <div className="p-4 bg-white">
                                    <h4 className="text-lg font-semibold">{video.titulo}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
