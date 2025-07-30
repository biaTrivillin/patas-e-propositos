import AdoptionSection from "./components/AdoptionSection";
import DonateBanner from "./components/DonateBanner";
import HomeBanner from "./components/HomeBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HomeBanner />
      <DonateBanner/>
      <AdoptionSection/>
    </div>
  );
}
