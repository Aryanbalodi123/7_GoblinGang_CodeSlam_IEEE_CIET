import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'C8 Aileron Heritage', href: '/c8-aileron' },
  { name: 'Brand', href: '/brand' },
  { name: 'Company', href: '/company' },
  { name: 'News', href: '/news' },
  { name: 'Dealers', href: '/dealers' },
];

export default function Navbar() {
  return (
    <header className="w-full h-14 border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
  <nav className="container mx-auto flex items-center justify-between py-2 px-4 h-full">
        <Link href="/" className="inline-block" aria-label="Home">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Spyker logo" width={90} height={28} className="h-7 w-auto" />
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-black transition-colors duration-200 uppercase text-xs font-semibold tracking-wide px-2 py-1 rounded hover:bg-gray-100"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="p-2 text-black" aria-label="Open main menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
