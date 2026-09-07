"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { HiChevronDown, HiOutlineUser, HiXMark } from "react-icons/hi2";
import { HiOutlineMenu } from "react-icons/hi";
import LinkButton from "./LinkButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm relative z-50">
      <div className="px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="#">
          <Image
            src="/images/logo.png"
            alt="logo header"
            width={500}
            height={64}
            className="w-31 md:w-41"
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LinkButton href="#" bg="#571244">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#DDD0DA] p-1 grid place-items-center">
                  <HiOutlineUser className=" text-[#571244]" />
                </span>
                <span>Account</span>
                <HiChevronDown />
              </div>
            </LinkButton>
          </div>
          <div className="hidden md:block">
            <LinkButton href="#" bg="#EF4353">
              Take Assessment
            </LinkButton>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 focus:outline-none text-white bg-black grid place-items-center rounded-md"
            aria-label="Toggle Navigation Menu">
            {mobileMenuOpen ? (
              <HiXMark className="w-6.5 h-6.5" />
            ) : (
              <HiOutlineMenu className="w-6.5 h-6.5" />
            )}
          </button>
        </div>
      </div>

      <nav className="hidden md:block border-t border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-8 h-12">
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#571244] pb-1 border-b-2 border-transparent hover:border-[#571244] transition">
            About
            <HiChevronDown />
          </div>

          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#571244] pb-1 border-b-2 border-transparent hover:border-[#571244] transition">
            What We Do
            <HiChevronDown />
          </div>

          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#571244] pb-1 border-b-2 border-transparent hover:border-[#571244] transition">
            Jobs
            <HiChevronDown />
          </div>

          <Link href="#" className="hover:text-[#571244] transition">
            Projects
          </Link>
          <Link href="#" className="hover:text-[#571244] transition">
            TG Academy
          </Link>
          <Link href="#" className="hover:text-[#571244] transition">
            Strategic Partnership
          </Link>
          <Link href="#" className="hover:text-[#571244] transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-[#571244] transition">
            Book a Consultation
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-xl absolute w-full">
          <div>
            <button className="w-full flex items-center justify-between py-2.5">
              <span>About</span>
              <HiChevronDown />
            </button>
          </div>

          <div>
            <button className="w-full flex items-center justify-between py-2.5 text-gray-800 font-medium">
              <span>What We Do</span>
              <HiChevronDown />
            </button>
          </div>

          <div>
            <button className="w-full flex items-center justify-between py-2.5 text-gray-800 font-medium">
              <span>Jobs</span>
              <HiChevronDown />
            </button>
          </div>

          <Link href="#" className="block py-2.5m">
            Projects
          </Link>
          <Link href="#" className="block py-2.5">
            TG Academy
          </Link>
          <Link href="#" className="block py-2.5">
            Strategic Partnership
          </Link>
          <Link href="#" className="block py-2.5">
            Pricing
          </Link>
          <Link href="#" className="block py-2.5">
            Book a Consultation
          </Link>

          <div className="pt-4 border-t border-gray-100 md:hidden grid grid-cols-2 gap-3 text-center">
            <LinkButton href="#" bg="#571244">
              Account
            </LinkButton>
            <LinkButton href="#" bg="#EF4353">
              Take Assessment
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
