'use client';
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
    const { totalArticles } = useCart();

    return(
        <Link href="/panier" className="relative">
            🛒 Panier
            {totalArticles > 0 &&
            <span className="absolute -top-2 -right-2 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalArticles}
            </span>
            }
        </Link>
    );
}