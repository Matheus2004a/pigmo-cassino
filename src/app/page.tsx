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
      <Welcome />

      <main className="grid justify-center bg-elevation-1 gap-14 py-12">
        <Criptomoney />
        <Casino />
        <Sports />
      </main>

      <Footer />
    </>
  );
}
