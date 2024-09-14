'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/UI/dropdown-menu"
import { ChevronDown } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-muted shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Business Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-muted-foreground">
              Prolog Billing
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 justify-center items-center relative">
            <Link href="/" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out">
              About
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/healthcare-system" className="w-full">Healthcare System</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/hospitals" className="w-full">Hospitals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/nursing-home" className="w-full">Nursing Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/emergency-rooms" className="w-full">Emergency Rooms</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/private-practices" className="w-full">Private Practices</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/all-specialties" className="w-full">All Specialties</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/why-choose-us" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out">
              Why Choose Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium transition duration-300 ease-in-out">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              HOME
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/healthcare-system" className="w-full">Healthcare System</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/hospitals" className="w-full">Hospitals</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/nursing-home" className="w-full">Nursing Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/emergency-rooms" className="w-full">Emergency Rooms</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/private-practices" className="w-full">Private Practices</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/all-specialties" className="w-full">All Specialties</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/why-choose-us" className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              Why Choose Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;