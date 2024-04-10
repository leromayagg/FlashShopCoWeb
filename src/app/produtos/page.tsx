import NavBar from "../../components/NavBar";
// import { Apple, ChevronDown } from "lucide-react";

import { Button } from "@nextui-org/button";
import { ProdutoItens } from "./ProdutosItens";

export default function Produto() {
  const produtos = [
    {
      id: 1,
      nome: "Macbook",
      valor: 3400.0,
      imagem: "Laptop",
      quantidade: 13,
    },
    {
      id: 2,
      nome: "AirPods",
      valor: 900.0,
      imagem: "Headset",
      quantidade: 23,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="produtos" />
      <section className="relative bg-transparent rounded-lg divide-x divide-gray-200">
        <div className="flex justify-between gap-8">
          <h2 className="text-2xl font-bold">Produtos Cadastrados</h2>
          <Button>nova produto</Button>
        </div>

        {produtos.map((produto) => (
          <ProdutoItens produto={produto}/>
        ))}
      </section>
    </main>
  );
}
