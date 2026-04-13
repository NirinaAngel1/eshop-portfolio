import ListClient from "@/components/ListClient";

async function getProduits(){
    const res = await fetch('https://dummyjson.com/products', {cache: 'no-store'});
    if(!res.ok){
        throw new Error('Erreur lors du chargement des produits');
    }
    const data = await res.json();
    return data.products;
}

export default async function Produits(){

    const produits = await getProduits();

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Header Section / Hero */}
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 px-8 py-12 mb-10 shadow-xl">
        {/* Décoration subtile en arrière-plan */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"></div>

        <div className="relative text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Bienvenue sur <span className="text-blue-200">Nirina Shop</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 font-light leading-relaxed">
                Plongez dans notre univers et découvrez une sélection exclusive de produits de qualité, 
                choisis avec soin pour vous.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                    ✨ Nouveautés 2026
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/10">
                    🚚 Livraison rapide
                </span>
            </div>
        </div>
    </div>

    {/* Section ListClient */}
    <div className="space-y-6">
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Nos Articles</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
        </div>
        
        <ListClient produits={produits} />
    </div>
</div>
    );
}