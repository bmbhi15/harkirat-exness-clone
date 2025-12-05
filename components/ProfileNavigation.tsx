import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropdownMenuCheckboxes from "./DropdownMenu";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

type ProfileNavigationProps = {
  userName: string;
};
const ProfileNavigation = ({ userName }: ProfileNavigationProps) => {
  return (
    <div className="flex flex-row space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="hidden md:flex items-center align-bottom text-white">
        {userName}
      </p>
      <DropdownMenuCheckboxes userName={userName} />
    </div>
  );
};

export default ProfileNavigation;
