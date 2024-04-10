import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard"/>
      <h2 className="flex font-bold mt-20 justify-center text-4xl md:text-5xl lg:text-6xl">Bem - Vindo ao FlashShopCo</h2>
      <h3>Incompleto</h3>
    </main>
  );
}
