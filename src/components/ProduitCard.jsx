'use client';
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import AjouterAuPanier from "@/components/AjouterAuPanier";

export default function ProduitCard({produit}){

    const { ajouterAuPanier } = useCart();

    const handleAjouter = () => {
        ajouterAuPanier(produit);
    };

    return(
        <div className="border border-border rounded-lg p-4 flex flex-col items-center">
            <img src={produit.thumbnail} alt={produit.title} className="w-32 h-32 object-contain mb-4 bg-gray-200 rounded-xl p-4 text-center text-white text-sm"/>
            <h2 className="text-lg font-semibold text-gray-800">{produit.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{produit.category}</p>
            <p className="text-xl font-bold text-primary mt-4">{produit.price} €</p>
            <div className="flex items-center gap-3 mt-6 w-full">
                <AjouterAuPanier produit={produit}/>
                <Link href={`/produits/${produit.id}`} className="flex-1 px-4 py-3 text-sm font-medium text-center bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full transition-all cursor-pointer active:scale-95 shadow-sm">
                    détails
                </Link>
            </div>
        </div>
    );
}