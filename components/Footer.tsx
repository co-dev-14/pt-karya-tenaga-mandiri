import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">PT. KARYA TENAGA MANDIRI</h3>
            <p className="text-sm leading-relaxed mb-4">
              Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) resmi dan terpercaya. Kami berdedikasi menempatkan PMI berkualitas ke pasar kerja global dengan perlindungan maksimal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/" className="hover:text-white transition">Beranda</a></li>
              <li><a href="#/about" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#/services" className="hover:text-white transition">Lowongan Kerja</a></li>
              <li><a href="#/contact" className="hover:text-white transition">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Kantor Pusat</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-500 shrink-0" />
                <span>Jl Raya Centex No 71, Ciracas, Jakarta Timur</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500 shrink-0" />
                <span>+62 857-1627-2011</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500 shrink-0" />
                <span>info@ptktm.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} PT. Karya Tenaga Mandiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
