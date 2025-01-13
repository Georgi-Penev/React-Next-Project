import Image from "next/image";
import Link from "next/link";
import Logo from "./AoS.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Ace Ticket Tracking</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Add a New Ticket</Link>
    </nav>
  );
}
