import Link from "next/link";

interface NavBarProps {
  active: "dashboard" | "produtos" | "usuario";
}

export default function NavBar(props: NavBarProps) {
  const { active } = props;
  const classActive = "whitespace-nowrap text-sm font-normal text-gray-200 transition-opacity hover:opacity-70";

  return (
    <nav className="flex justify-between items-center dark w-full px-5 py-5 ">
      <h1 className="text-3xl font-bold ">Flash Shop Co</h1>
      <ul className="flex gap-8">
        <li className={active == "dashboard" ? classActive : ""}>
          <Link href="/">dashboard</Link>
        </li>
        <li className={active == "produtos" ? classActive : ""}>
          <Link href="/produtos">produtos</Link>
        </li>

      </ul>
      <div className="w-14 rounded-full overflow-hidden">
        <Link href="/usuario">
          <img src="https://i.pravatar.cc/150" alt="avatar do usuário" />
        </Link>
      </div>
    </nav>
  );
}
