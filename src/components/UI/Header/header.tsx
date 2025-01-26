'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/popover"
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from "@/components/UI/button"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const serviceLinks = [
    { href: "/healthcare-system", label: "Healthcare System" },
    { href: "/hospitals", label: "Hospitals" },
    { href: "/nursing-homes", label: "Nursing Home" },
    { href: "/emergency-rooms", label: "Emergency Rooms" },
    { href: "/private-practices", label: "Private Practices" },
    { href: "/all-specialties", label: "All Specialties" },
  ];

  return (
    <nav className="bg-muted shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Business Name and Logo */}
          <div className="flex-shrink-0 flex gap-2 items-center">
            <Image 
              src="/images/PM-Billing-nbg.png"
              alt="PM Billing Logo" 
              width={40} 
              height={40} 
            />
            <Link href="/" className="text-2xl font-bold text-muted-foreground">
              PM Billing
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="flex md:hidden items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 justify-center items-center">
            <Link href="/" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
              About
            </Link>

            {/* Services Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-56 p-2 bg-muted border border-muted-foreground/20 rounded-md shadow-lg">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-muted-foreground/10 transition duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                ))}
              </PopoverContent>
            </Popover>

            <Link href="/why-choose-us" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">
              Why Choose Us
            </Link>
            <button 
              onClick={() => window.location.href = 'mailto:vserve@pmbilling.us'}
              className="bg-green-300 text-white px-6 py-3 rounded-full font-medium text-base 
                         hover:bg-green-600 transition-colors duration-300 ease-in-out"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-muted shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary w-full justify-between px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleServices}
            >
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </Button>
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/why-choose-us" className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Why Choose Us
            </Link>
            <button 
              onClick={() => window.location.href = 'mailto:vserve@pmbilling.us'}
              className="bg-green-300 text-white w-full text-left px-6 py-3 rounded-full font-medium text-base 
                         hover:bg-green-600 transition-colors duration-300 ease-in-out"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;