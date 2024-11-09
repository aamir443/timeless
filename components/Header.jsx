"use client";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full bg-black h-20 items-center text-white justify-between mx-auto">
      <div className="font-bold mx-10 uppercase">
        <Link href="/">
          <div>
            Timeless <span className="text-red-500 underline">Heaven</span>
          </div>
        </Link>
      </div>
      <div className="flex mx-auto">
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/bedsheets">Bedsheets</Link>
          </li>
          <span>|</span>
          <li>
            <Link href="/pillow">Pillow</Link>
          </li>
          <span>|</span>
          <li>
            <Link href="/mattress">Mattress</Link>
          </li>
          <span>|</span>
          <li>
            <Link href="/blanket">Blanket</Link>
          </li>
        </ul>
      </div>
      <div className="mx-10 flex flex-row gap-4">
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <Link href="/profile">
          <User />
        </Link>
      </div>
    </div>
  );
};

export default Header;
