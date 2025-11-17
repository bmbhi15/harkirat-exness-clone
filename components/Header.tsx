import Image from "next/image";
import Link from "next/link";
import NavigationMenu from "./NavigationMenu";
import { NAV_ITEMS } from "@/lib/constants";
import ProfileNavigation from "./ProfileNavigation";
const Header = () => {
  return (
    <header className="header">
      <nav className="header-wrapper container">
        <Image
          src="/assets/icons/logo.svg"
          alt="app-logo"
          width={50}
          height={24}
          className="h-full w-auto"
        />
        <div className="hidden md:block">
          <NavigationMenu />
        </div>
        <ProfileNavigation />
      </nav>
    </header>
  );
};

export default Header;
