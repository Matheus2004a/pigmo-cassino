import { Header } from "@/components/Header";
import { Casino } from "./ui/Casino";
import { Criptomoney } from "./ui/Criptomoney";
import { Footer } from "./ui/Footer";
import { Sports } from "./ui/Sports";
import { Welcome } from "./ui/Welcome";

export default function Home() {
  return (
    <>
      <Header />

      <main className="grid justify-center bg-elevation-1 py-4 px-8 gap-12">
        <Welcome />
        <Criptomoney />
        <Casino />
        <Sports />
      </main>

      <Footer />
    </>
  );
}
