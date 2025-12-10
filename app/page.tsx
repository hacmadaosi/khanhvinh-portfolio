import Footer from "@/src/components/layout/Footer";
import CardInfo from "@/src/components/portfolio/CardInfo";
import History from "@/src/components/portfolio/History";
import Project from "@/src/components/portfolio/Project";
import Quote from "@/src/components/portfolio/Quote";
import Skill from "@/src/components/portfolio/Skill";

import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Toaster richColors />
      <div className="sm:p-12 p-8 sm:h-screen flex flex-col">
        <CardInfo />
        <Quote />
        <Skill />
      </div>
      <History />
      <div>
        <Project />
      </div>
      <Footer />
    </div>

  );
}
