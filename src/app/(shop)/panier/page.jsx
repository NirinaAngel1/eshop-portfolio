'use client';

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function PanierPage(){
    const { panier, totalArticles, totalPrix, retirerDuPanier, viderPanier, modifierQuantite } = useCart();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon panier</h1>
            {panier.length === 0 ? (
                <><p className="text-gray-700">
                    Le panier est vide
                </p>
                <Link href="/produits" className="text-blue-500 text-xl hover:text-blue-700 mt-4 inline-block">
                        Continuer vos achats
                    </Link></>
            ) : (
                <>
                    <div className="space-y-6">
                        <h2>{totalArticles} article{totalArticles !== 1 ? 's' : ''}</h2>
                        {panier.map(p => (
                            <div key={p.id} className="flex items-center justify-between gap-4 border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                                {/* Partie Gauche : Image + Infos */}
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={p.thumbnail} 
                                        alt={p.title} 
                                        className="w-20 h-20 object-contain rounded-md bg-gray-100 p-2 shrink-0"
                                    />
                                    
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{p.title}</h3>
                                        <p className="text-blue-600 font-bold text-xl">{p.price} €</p>
                                        <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => modifierQuantite(p.id, -1)}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                                        >
                                            −
                                        </button>

                                        <span className="font-medium text-gray-900 w-6 text-center">
                                            {p.quantite}
                                        </span>

                                        <button
                                            onClick={() => modifierQuantite(p.id, 1)}
                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 font-bold"
                                        >
                                            +
                                        </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Partie Droite : Actions */}
                                <div className="shrink-0">
                                    <button 
                                        onClick={() => retirerDuPanier(p.id)} 
                                        className="px-4 py-2 text-sm font-medium bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-full transition-colors"
                                    >
                                        Retirer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">Total : <span className="font-medium">{totalPrix} €</span></p>
                        <div className="flex gap-4">
                            <button onClick={viderPanier} className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors">
                                Vider le panier
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}