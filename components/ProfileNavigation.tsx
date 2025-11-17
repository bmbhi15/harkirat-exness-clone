import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DropdownMenu from "./DropdownMenu";

const ProfileNavigation = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="hidden md:flex items-center align-bottom text-white">
        Harkirat Singh
      </p>
      <DropdownMenu />
    </div>
  );
};

export default ProfileNavigation;
