import { Apple, Book, Bus, Cigarette } from "lucide-react";

interface IconProps {
  name: string;
}
const icons = [
  { name: "apple", icon: <Apple /> },
  { name: "cigarette", icon: <Cigarette /> },
  { name: "bus", icon: <Bus /> },
  { name: "book", icon: <Book /> },
];

export function Icon({ name }: IconProps) {
  return icons.find((icon) => icon.name == name)?.icon;
}
