'use client';

import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);

    const ajouterAuPanier = (produit) => {
        setPanier(prev => {
            const existe = prev.find(p => p.id === produit.id);
            if (existe) {
                return prev.map(
                    p => p.id === produit.id 
                    ? { ...p, quantite: p.quantite + 1 }
                     : p
                    );
                }
            return [...prev, { ...produit, quantite: 1 }];
        });
    };

    const viderPanier = () => {
        setPanier([]);
    };

    const retirerDuPanier = (id)=>{
        setPanier(prev => prev.filter(p => p.id !== id));
    };

    const modifierQuantite = (id, delta) => {
        setPanier(prev => prev.map(
            p => p.id === id
            ? { ...p, quantite: Math.max(0, p.quantite + delta) }
            : p
        ));
    };

    const totalArticles = panier.reduce(
        (acc, p) => acc + p.quantite, 0
    );

    const totalPrix = panier.reduce(
        (acc, p) => acc + p.price * p.quantite, 0).toFixed(2);



    return (
        <CartContext.Provider value={{ 
            panier,
            ajouterAuPanier,
            retirerDuPanier,
            viderPanier,
            totalArticles,
            totalPrix,
            modifierQuantite
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart doit être utilisé à l'intérieur d'un CartProvider");
    }
    return context;
};