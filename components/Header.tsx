import Image from "next/image";
import NavigationMenu from "./NavigationMenu";
import ProfileNavigation from "./ProfileNavigation";

type HeaderProps = {
  userName: string | null;
};
const Header = ({ userName }: HeaderProps) => {
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
        <ProfileNavigation userName={userName} />
      </nav>
    </header>
  );
};

export default Header;
