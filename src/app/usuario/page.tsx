import NavBar from "@/components/NavBar";


export default function Usuario() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="usuario"/>
      <h2 className="flex font-bold mt-20 justify-center text-4xl md:text-5xl lg:text-6xl">Usuario</h2>
      <h3>Incompleto</h3>
    </main>
  );
}
