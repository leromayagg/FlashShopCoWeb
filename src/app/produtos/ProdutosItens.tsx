// import DropdownActions from "@/components/DropDownActions";
import { Apple, ChevronDown } from "lucide-react";
import { Imagem } from "../../components/Imagem";
import DropdownActions from "@/components/DropDownActions";
import NavBar from "@/components/NavBar";

interface ProdutoItensProps {
  produto: {
    id: number;
    nome: string;
    valor: number;
    imagem: string;
    quantidade: number;
  };
}

export function ProdutoItens(props: ProdutoItensProps) {
  const produto = props.produto;
  return (
    <div className="flex justify-between p-2">
    
      <div className="flex items-center gap-2">
        <Imagem name={produto.imagem} />
        <span>{produto.nome}</span>
        <span>{produto.valor}</span>
        <span>{produto.quantidade}</span>
      </div>
     
      <DropdownActions />
    </div>
  );
}
