"use client";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
  const path = usePathname();
  return (
    <ul className="flex-col md:flex flex-row gap-8 text-xl">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={`hover:text-white transition`}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
