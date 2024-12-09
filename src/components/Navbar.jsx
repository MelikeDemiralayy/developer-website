import logo from "../assets/images/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo ve Menü */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign In ve Create Account */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>

         {/* mobil menu button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none">
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
         {/* mobile menu */}
        {mobileDrawerOpen && (
          <div className="absolute top-14 left-0 w-full bg-neutral-900 text-white p-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 px-4 rounded-md hover:bg-neutral-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="py-2 px-4 border rounded-md text-center hover:bg-neutral-700"
            >
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-center"
            >
              Create an Account
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
