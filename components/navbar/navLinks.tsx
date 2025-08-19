"use client";

import Link from "next/link";
import DecorMenuPopover from "../decor&more/decorMore";
import TrendingPopover from "../TrendingPopover/trendingpop"; // create a similar popover for New & Trending

const links = [
  "All Rugs",
  "Persian & Oriental",
  "Washable Rugs",
  "Natural & Wool Rugs",
  "Outdoor Rugs",
  "Baby & Kids",
  "Mats",
  "Decor & More",
  "New & Trending",
  "Clearance",
];

export default function NavLinks() {
  return (
    <nav className="flex justify-center gap-8 py-3 border-t text-sm font-medium relative">
      {links.map((item) => {
        if (item === "Decor & More") {
          return <DecorMenuPopover key={item} />;
        } else if (item === "New & Trending") {
          return <TrendingPopover key={item} />; // Popover for trending
        } else {
          return (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="hover:text-teal-600"
            >
              {item}
            </Link>
          );
        }
      })}
    </nav>
  );
}
