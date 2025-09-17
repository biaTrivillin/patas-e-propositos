"use client";

import Link from "next/link";
import { FaBook } from "react-icons/fa";

export default function EducativeSection() {
  return (
    <section className="bg-white rounded-3xl p-10 md:p-16 shadow-md hover:shadow-lg transition mx-2 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Aprenda antes de adotar
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mb-8">
          Tenha acesso a informações essenciais para garantir uma adoção consciente, segura e cheia de amor.
        </p>
        <Link href="/recursos-educativos">
          <button className="px-6 py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-gray-800 to-black hover:opacity-90 transition">
            Explorar Recursos
          </button>
        </Link>
      </div>

      <div className="order-1 md:order-2 flex-shrink-0">
        <div className="bg-gray-100 rounded-full p-6 flex items-center justify-center">
          <FaBook className="text-gray-700 text-5xl md:text-6xl" />
        </div>
      </div>
    </section>
  );
}
