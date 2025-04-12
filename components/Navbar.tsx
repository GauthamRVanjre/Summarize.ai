import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/constants";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FileText, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  return (
    <header className="fixed w-full px-4 lg:px-6 h-14 flex items-center justify-between z-50 bg-gray-950/80 backdrop-blur-sm">
      <Link className="flex items-center justify-center" href="/">
        <FileText className="h-6 w-6 text-purple-400" />
        <span className="ml-2 text-lg font-bold text-purple-400">
          SummarizeAI
        </span>
      </Link>
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        {isLoggedIn ? (
          <Button className="bg-purple-600 hover:bg-purple-700 text-gray-100">
            <LogoutLink>Logout</LogoutLink>
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              className="text-gray-100 hover:text-purple-400 hover:bg-gray-800"
            >
              <LoginLink>Login</LoginLink>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-gray-100">
              <RegisterLink>Sign Up</RegisterLink>
            </Button>
          </>
        )}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6 text-gray-100" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] bg-gray-900"
        >
          <SheetHeader>
            <SheetTitle className="text-left text-purple-400">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                className="text-lg font-medium text-white  hover:text-purple-400 transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              className="text-md text-purple-600 bg-white font-medium hover:text-purple-400 hover:bg-purple-200"
            >
              Log in
            </Button>
            <Button className="text-md bg-purple-600 hover:bg-purple-700 text-white">
              Sign up
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
