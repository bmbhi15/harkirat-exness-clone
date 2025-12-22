"use client";
import { ChevronDown, LogOut } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/better-auth/auth-client";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type DropdownMenuCheckboxesProps = {
  userName: string | null;
};
export default function DropdownMenuCheckboxes({
  userName,
}: DropdownMenuCheckboxesProps) {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Successfully logged out");
            router.push("/log-in"); // redirect to login page
          },
          onError(context) {
            toast.error(context.error.message);
          },
        },
      });
    } catch (error) {
      console.error("Failed to log out user !!", error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-white cursor-pointer">
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {NAV_ITEMS.map((item) => (
          <DropdownMenuItem key={item.href} className="md:hidden">
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="md:hidden" />
        <DropdownMenuItem>
          <button onClick={handleLogOut}>
            <div className="flex flex-row space-x-4 items-center">
              <LogOut />
              <p>Log Out</p>
            </div>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
