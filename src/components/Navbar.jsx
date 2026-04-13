import Link from "next/link";
import CartIcon from "./CartIcon";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Nirina Shop
            </Link>
          </div>
            {/* Navigation Links */}
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Accueil
                    </Link>
                    <Link href="/produits" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Produits
                    </Link>
                    <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                    </Link>
                    <div className="ml-4">
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </nav>
  );
}