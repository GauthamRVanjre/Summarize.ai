import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-400">
            © 2024 SummarizeAI. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
