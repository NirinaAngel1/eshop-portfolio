'use client';

import { useCart } from "@/context/CartContext";

export default function AjouterAuPanier({produit}){

    const { ajouterAuPanier } = useCart();
    const handleAjouter = () => {
        ajouterAuPanier(produit);
    };

    return (
        <button onClick={handleAjouter}
            className="flex-1 px-4 py-3 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all cursor-pointer active:scale-95 shadow-sm">
            Ajouter 🛒
        </button>
    );
}
