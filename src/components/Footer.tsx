import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase mb-8 block">
              Lumina <span className="font-light">Grand</span>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-xs">
              Every detail matters. Experience the true definition of luxury hospitality where tradition meets modern elegance.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/rooms" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Rooms & Suites</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Our Story</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">123 Luxury Boulevard, <br />Paris, 75001, France</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-gold shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+33 (0) 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span className="text-gray-400 text-sm">reservations@luminagrand.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-semibold mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to receive exclusive offers and updates.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors text-white"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-[3px]">
          <p>© 2026 Lumina Grand Hotel. All Rights Reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
