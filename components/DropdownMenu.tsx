"use client";
import { ChevronDown, LogOut } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DropdownMenuCheckboxes() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-white cursor-pointer">
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Harkirat Singh</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {NAV_ITEMS.map((item) => (
          <DropdownMenuItem key={item.href} className="md:hidden">
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuItem>
          <Link href="/sign-up">
            <div className="flex flex-row space-x-4 items-center">
              <LogOut />
              <p>Log Out</p>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
