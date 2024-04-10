import {  Book, Bus, Cigarette, Headset, Laptop } from "lucide-react";

interface ImagemProps {
    name: string;
}
const imagens = [
    { name: "Laptop", imagem: <Laptop/> },
    { name: "Headset", imagem: <Headset/> },
];

export function Imagem({ name }: ImagemProps) {
    return imagens.find((imagem) => imagem.name == name)?.imagem;
}