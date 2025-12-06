import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Nuestras Telas", href: "/#telas" },
  { name: "Visión", href: "/vision" },
  { name: "Historia", href: "/historia" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-[#1A3C34]/95 to-transparent backdrop-blur-[2px]">
      
      <Link href="/" className="group relative block">
        <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
          
          <div className="absolute inset-0 bg-[#C5A065] opacity-10 blur-[25px] rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <Image
            src="/111.png"   
            alt="Sello Stephan Textil"
            fill
          />
        </div>
      </Link>

      <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-[#E8E4D0]/80 mt-2">
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href}
            className="hover:text-[#C5A065] transition-colors relative group py-1"
          >
            {item.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C5A065] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        ))}
      </div>

      <Link href="#contacto">
        <button className="text-[#E8E4D0] text-xs font-bold tracking-widest border border-[#E8E4D0]/30 px-6 py-3 hover:bg-[#C5A065] hover:text-[#0F1C18] hover:border-[#C5A065] transition-all duration-300 uppercase backdrop-blur-sm">
          Contacto
        </button>
      </Link>
    </nav>
  );
}