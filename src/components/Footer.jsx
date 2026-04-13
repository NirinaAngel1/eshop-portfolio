import { School, GitCommitVertical, Mail } from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // <footer className="mt-auto border-t border-gray-200 py-6 px-6">
      <footer className="bg-white dark:bg-gray-900 shadow-md mt-auto border-t border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">

        {/* Bloc 1 - Copyright et nom */}
        <div className="text-sm text-foreground/50">
          <span>Nirina Shop</span>
          <span className="mx-2">|</span>
          <span>&copy; {currentYear} - Tous droits réservés.</span>
        </div>

        {/* Bloc 2 - Réseaux sociaux */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/nirina-angelin-razafimandimby" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <School size={18} />
          </a>
          <a href="https://github.com/NirinaAngel1" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <GitCommitVertical size={18} />
          </a>
          <a href="mailto:angen3r@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}