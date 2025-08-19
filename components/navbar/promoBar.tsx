"use client"

import Link from "next/link"

export default function PromoBar() {
  return (
    <div className="bg-teal-700 text-white text-sm py-2 px-6 flex justify-between">
      <span>Extra 10% Off 2+ Rugs</span>
      <span>Free Shipping + Free 30 Day Returns</span>
      <Link href="/order-status" className="hover:underline">
        Order Status
      </Link>
    </div>
  )
}
