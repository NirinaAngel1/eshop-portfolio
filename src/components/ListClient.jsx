'use client';
import { useState } from "react";
import { Search } from "lucide-react";
import ProduitCard from "@/components/ProduitCard";

export default function ListClient({ produits }){
    const [query, setQuery] = useState('');
    const [category, setCategory]=useState('toutes');

    const categories = ['toutes', ...new Set(produits.map(produit => produit.category))];

    const filteredProduits = produits.filter(produit => {
        const matchesQuery = produit.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === 'toutes' || produit.category === category;
        return matchesQuery && matchesCategory;
    });

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Barre d'outils : Recherche + Filtre */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-4">
                
                {/* Barre de recherche */}
                <div className="relative group flex-1 max-w-md">
                    <Search 
                        size={20} 
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-500 transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-xs"
                    />
                </div>

                {/* Filtre par catégorie */}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 hidden sm:inline">Filtrer par :</span>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="min-w-[160px] px-4 py-2.5 rounded-lg border border-border bg-background cursor-pointer focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all capitalize"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat === 'toutes' ? 'Toutes les catégories' : cat}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Compteur et résultats */}
            <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {filteredProduits.length} {filteredProduits.length > 1 ? 'produits trouvés' : 'produit trouvé'}
                </p>
            </div>

            {/* Grille de produits */}
            {filteredProduits.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProduits.map((produit) => (
                        <ProduitCard key={produit.id} produit={produit} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
                    <p className="text-gray-400 text-lg">Aucun produit ne correspond à votre recherche 😕</p>
                </div>
            )}
</div>
    );
}