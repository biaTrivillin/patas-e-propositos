import { FaCat, FaDog } from "react-icons/fa";
import AdoptionSection from "./components/AdoptionSection";
import DonateBanner from "./components/DonateBanner";
import HomeBanner from "./components/HomeBanner";
import EducativeSection from "./components/EducativeSection";

const especies = [
  {
    codigo: "cachorros",
    especie: "cachorro",
    icon: <FaDog />
  },
  {
    codigo: "gatos",
    especie: "gato",
    icon: <FaCat />
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeBanner />
      <DonateBanner />
      {
        especies.map(especie => (
          <AdoptionSection
          key={especie.codigo}  
          especie={especie.especie}
          icon={especie.icon}
          codigo={especie.codigo}
          />
        ))
      }
      <EducativeSection/>

    </div>
  );
}
