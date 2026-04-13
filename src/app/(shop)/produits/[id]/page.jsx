import Link from "next/link";
import AjouterAuPanier from "@/components/AjouterAuPanier";

async function getProduit(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Erreur lors du chargement du produit');
    }
    const data = await res.json();
    console.log('Données du produit:', data); // Debug : Affiche les données reçues
    return data;
}

export async function generateMetadata({ params }) {
    const {id} = await params;
    const produit = await getProduit(id);
    return { title: produit.title };
}

export default async function ProduitDetail({ params }) {
    const {id} = await params;
    const produit = await getProduit(id);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-100 shadow-lg rounded-lg p-8">
                {/* Correction : DummyJSON utilise 'thumbnail' pour l'image principale */}
                <img 
                    src={produit.thumbnail} 
                    alt={produit.title} 
                    className="w-full md:w-1/2 h-auto object-contain rounded-lg shadow-lg"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900">{produit.title}</h1>
                    <p className="text-sm text-gray-600 mt-2 capitalize">{produit.category}</p>
                    <p className="text-2xl font-bold text-blue-600 mt-6">{produit.price} €</p>
                    <p className="mt-6 text-gray-700 leading-relaxed">{produit.description}</p>
                <div className="flex w-full py-4 gap-2 mt-4">
                    <AjouterAuPanier produit={produit} />
                    <Link href="/produits" className="flex-1 px-4 py-3 text-sm font-medium bg-gray-300 hover:bg-gray-400 text-center text-white rounded-full transition-all cursor-pointer active:scale-95 shadow-sm">
                        Revenir à la liste
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}
