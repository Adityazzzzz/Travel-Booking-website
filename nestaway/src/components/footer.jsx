import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-wrap items-center text-sm text-gray-600">
            <span className="mr-2">© 2025 NestAway, Inc.</span>
            <span className="mx-2 hidden md:inline">·</span>
            <Link to={'/privacy'} className="mr-2 hover:underline">
              Privacy
            </Link>
            <span className="mx-2 hidden md:inline">·</span>
            <Link to={"/terms"} className="mr-2 hover:underline">
              Terms
            </Link>
            <span className="mx-2 hidden md:inline">·</span>
            <Link to={"/"} className="hover:underline">
              Company details
            </Link>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
