import Link from "next/link";
import { Button } from "./ui/button";

//@components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Viergi <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* dekstop nav */}
        <Nav />
        {/* <div className="hidden xl:flex items-center gap-8"> */}
        {/* <Link href="/contact">
            <Button>Hire me</Button>
          </Link> */}
        {/* <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover h-[44px] px-6"
          >
            Hire me
          </Link> */}
        {/* </div> */}

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
