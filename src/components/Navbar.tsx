'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-emerald-500 text-white p-4 sticky top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">EMR Radiology</div>
        <div className="space-x-6">
          <Link href="#home" className="hover:text-teal-200">Home</Link>
          <Link href="#about" className="hover:text-teal-200">About</Link>
          <Link href="#pricing" className="hover:text-teal-200">Pricing</Link>
          <Link href="#case-studies" className="hover:text-teal-200">Case Studies</Link>
          <Link href="#contact-sales" className="hover:text-teal-200">Contact Sales</Link>
          <Link href="#signup" className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;