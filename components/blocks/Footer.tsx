import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiArrowRight, FiArrowUp } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    // Main footer container with the dark gray background
    <footer className="bg-zinc-900 text-gray-400">
      
      {/* Top section with address, logo, and contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Column 1: Address & Contact Info (FIXED) */}
          <div className="flex flex-col sm:flex-row sm:gap-10 text-xs leading-relaxed">
            {/* Address Block */}
            <address className="not-italic mb-4 sm:mb-0">
              Spyker N.V.<br />
              Edisonweg 2<br />
              3899 AZ Zeewolde<br />
              The Netherlands
            </address>
            {/* Phone/Fax Block */}
            <p>
              T: +31 (0)36 535 87 87<br />
              F: +31 (0)36 535 87 80
            </p>
          </div>

          {/* Column 2: Logo Placeholder */}
              <div className="flex justify-center items-start">
                {/* Footer logo from /public/logo-footer.png */}
                <Image
                  src="/logo-footer.png"
                  alt="Spyker Logo"
                  width={112}
                  height={112}
                  className="opacity-80 rounded-full object-contain"
                  priority
                />
              </div>

          {/* Column 3: Contact Button (FIXED) */}
          <div className="flex flex-col items-start md:items-end w-full">
            <p className="text-xs mb-3">For more info or enquiries:</p>
            {/* Partitioned Button */}
            <button className="flex w-full max-w-xs md:max-w-none md:w-52 border border-gray-600 text-gray-200 text-xs uppercase tracking-wider hover:bg-gray-800 hover:border-gray-500 transition-colors">
              <span className="flex-grow px-4 py-2 text-left">
                Contact Spyker
              </span>
              <span className="border-l border-gray-600 px-3 py-2 flex items-center justify-center group-hover:border-gray-500">
                 <FiArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
          
        </div>
      </div>

      {/* Bottom section (legal, social, back-to-top) */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-x-5 gap-y-3 text-xs uppercase tracking-wider text-gray-500">
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-gray-600">© 2013 SPYKER N.V.</span>
          </div>

          {/* Center: Social Media (FIXED) */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-gray-500">Follow Us:</span>
            <div className="flex gap-2">
              <a 
                href="https://facebook.com" // Replace with actual URL
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="border border-gray-600 p-1.5 text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://twitter.com" // Replace with actual URL
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="border border-gray-600 p-1.5 text-gray-500 hover:text-white hover:border-gray-500 transition-colors"
              >
                <FaTwitter size={16} />
              </a>
            </div>
          </div>

          {/* Right Side: Back to Top (FIXED) */}
          {/* Partitioned Link Button */}
          <a 
            href="#" 
            className="flex border border-gray-600 text-xs uppercase tracking-wider text-gray-500 hover:text-white hover:border-white transition-colors"
          >
            <span className="px-3 py-1.5">
              Top
            </span>
            <span className="border-l border-gray-600 px-2 py-1.5 flex items-center justify-center group-hover:border-white">
              <FiArrowUp className="h-4 w-4" />
            </span>
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;