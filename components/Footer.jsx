import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="font-bold text-lg mb-4 md:mb-0">
          <Link href="/">
            Timeless <span className="text-red-500 underline">Heaven</span>
          </Link>
        </div>

        <div className="flex flex-row gap-6 mb-4 md:mb-0">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        <div className="flex gap-4">
          <Link href="https://facebook.com">
            <Facebook />
          </Link>
          <Link href="https://twitter.com">
            <Twitter />
          </Link>
          <Link href="https://instagram.com">
            <Instagram />
          </Link>
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Timeless Heaven. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
