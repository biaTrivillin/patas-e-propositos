'use client';

import { FaPaw } from "react-icons/fa";

export default function LoadingPaws() {
  const paws = [
    { size: "text-xl", top: false, margin: "ml-2" },
    { size: "text-2xl", top: true, margin: "ml-4" },
    { size: "text-lg", top: false, margin: "ml-6" },
    { size: "text-3xl", top: true, margin: "ml-8" },
    { size: "text-xl", top: false, margin: "ml-10" },
  ];

  const animationDuration = 2500;
  
  return (
    <>
      <style>{`
        @keyframes stepIn {
          0% { opacity: 0; }
          10% { opacity: 1; }
          30% { opacity: 1; }
          40% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="p-20 mx-auto flex flex-col items-center">
        <h1 className="mb-6 font-bold text-xl text-gray-700 animate-pulse">
          Carregando...
        </h1>

        <div className="flex items-center relative h-10 w-[240px]">
          {paws.map((p, index) => {
            const delay = (animationDuration / paws.length) * index;
            return (
              <FaPaw
                key={index}
                className={`${p.size} ${p.margin} absolute text-gray-700 rotate-90`}
                style={{
                  left: `${index * 40}px`,
                  top: p.top ? 'calc(50% - 18px)' : 'calc(50% + 6px)',
                  animation: `stepIn ${animationDuration}ms ease-in-out infinite`,
                  animationDelay: `${delay}ms`,
                  transformOrigin: 'center center',
                  opacity: 0,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
