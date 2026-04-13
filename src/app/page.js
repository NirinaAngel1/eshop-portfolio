import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans selection:bg-blue-100">
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Cercles de décoration en arrière-plan (Cohérence avec la page produits) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full -z-10"></div>

        <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Colonne Texte */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-bold tracking-wide uppercase">
                <Zap size={14} fill="currentColor" />
                Vaovao be!!!
              </div>

              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Ny mora sy ny tsara indrindra<br /> 
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  no tafiaraka !
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Tongasoa eto @ <span className="font-semibold text-gray-900 dark:text-white">Nirina Shop</span>. 
                Ho hitanao ato ny vokatra tsara sy voafantina amin'ny vidiny mirary. Hanampy anao ahita izay ilainao amin'ny fotoana fohy indrindra izahay.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  href="/produits" 
                  className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-blue-500/25 hover:scale-105"
                >
                  Sokafy ny botika
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-200" />
                    ))}
                  </div>
                  <span>maro ireo mpanjifa mahatoky</span>
                </div>
              </div>

              {/* Petits arguments de vente rapides */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-semibold">Fandoavam-bola voaharo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600">
                  </div>
                  <span className="text-sm font-semibold">🚚 sara-panaterana mora!</span>
                </div>
              </div>
            </div>

            {/* Colonne Image */}
            <div className="flex-1 relative group">
              {/* Effet de lueur derrière l'image */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500"></div>
              
              <div className="relative animate-float">
                <Image 
                  src="/images/Panier_gros.png" 
                  alt="panier nirina_shop" 
                  width={600} 
                  height={500}
                  priority
                  className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_35px_35px_rgba(59,130,246,0.2)]"
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}