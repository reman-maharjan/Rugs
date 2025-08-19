"use client"

import Link from "next/link"
import { Heart, ShoppingCart, User } from "lucide-react"
import PromoBar from "./promoBar"
import SearchBar from "./searchBar"
import NavLinks from "./navLinks"

export default function Navbar() {
  return (
    <header className="w-full border-b">
    
      <PromoBar />

    
      <div className="flex items-center justify-between px-6 py-4">
        
        <Link href="/" className="text-3xl font-bold">
          Rugs<span className="text-teal-600">.com</span>
        </Link>

        
        <SearchBar />

        
        <div className="flex items-center gap-6">
          <Link href="/signin" className="flex items-center gap-1 text-sm hover:text-teal-600">
            <User className="h-5 w-5" />
            Sign In
          </Link>
          <Link href="/favorites" className="flex items-center gap-1 text-sm hover:text-teal-600">
            <Heart className="h-5 w-5" />
            Favorites
          </Link>
          <Link href="/cart" className="flex items-center gap-1 text-sm hover:text-teal-600">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>

      
      <NavLinks />
    </header>
  )
}
