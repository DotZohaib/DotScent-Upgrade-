import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent py-8 bg-white">
      <div className="absolute inset-0 bg-white/25 backdrop-blur-lg"></div>
      <div className="relative max-w-6xl mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Brand & Social */}
          <div className="space-y-2">
            <h3 className="font-serif text-3xl font-bold text-gray-900">DotScent</h3>
            <p className="text-gray-700 text-sm">
              Luxury fragrances crafted for the discerning individual. Define your unique style.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/people/DotScent/61574441123695/?sk=about', label: 'Facebook' },
                { Icon: Instagram, href: 'https://www.instagram.com/dotscent_perfume?igsh=MTJrcmJzZ3hkc3NqMg==', label: 'Instagram' },
                { Icon: SiWhatsapp, href: 'https://wa.me/923194635913', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-white/60 rounded-full shadow-sm hover:bg-white/80 transition"
                >
                  <Icon size={20} className="text-gray-800" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Returns */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <p className="text-gray-700 text-sm">
              <strong>Phone:</strong>
              <a href="tel:+923194635913" className="ml-1 underline hover:text-gray-900">
                +92 319 4635913
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Email:</strong>
              <a href="mailto:dotscent2025@gmail.com" className="ml-1 underline hover:text-gray-900">
                dotscent2025@gmail.com
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Returns & Refunds:</strong>
              <a href="mailto:dotscent2025@gmail.com" className="ml-1 underline hover:text-gray-900">
                dotscent2025@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} DotScent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
