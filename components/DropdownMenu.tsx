"use client";
import { ChevronDown, LogOut } from "lucide-react";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
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

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

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
