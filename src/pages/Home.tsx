import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Wind, ShieldCheck, Soup, Coffee, Dumbbell } from 'lucide-react';
import { ROOMS } from '../constants/rooms';
import RoomCard from '../components/RoomCard';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, filter: 'blur(10px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2400&auto=format&fit=crop" 
            alt="Hotel Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian/80" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] md:text-xs uppercase tracking-[12px] font-display text-gold-light"
            >
              Since 1924 • Paris
            </motion.p>
          </div>

          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-[10rem] font-serif leading-[0.85] text-white"
            >
              Lumina <br />
              <span className="italic font-light text-gold-light">Grand</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12"
          >
            <Link 
              to="/rooms" 
              className="group relative px-12 py-5 overflow-hidden bg-gold text-white uppercase tracking-[4px] text-[10px] font-bold"
            >
              <span className="relative z-10">Discover Suites</span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: 'circOut' }}
              />
              <motion.span 
                className="absolute inset-0 flex items-center justify-center text-obsidian z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
              >
                Discover Suites
              </motion.span>
            </Link>
            <Link 
              to="/about" 
              className="text-white uppercase tracking-[4px] text-[10px] font-bold flex items-center group"
            >
              Our Story <div className="ml-4 w-12 h-px bg-white/30 group-hover:w-16 group-hover:bg-gold transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[3px] text-white/50 mb-3">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-48 bg-ivory relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-gold uppercase tracking-[6px] text-[10px] font-bold mb-10">Unmatched Distinction</p>
              <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[0.9]">
                Where <span className="italic font-light">Heritage</span> <br /> 
                Meets Modernity
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-16 max-w-xl">
                Nestled in the golden triangle of Paris, Lumina Grand represents the absolute pinnacle of luxury hospitality. Our legacy is built on the art of pre-empting your every desire before you even conceive it.
              </p>
              
              <div className="grid grid-cols-2 gap-16 border-t border-gold/20 pt-16">
                <div className="group cursor-default">
                  <h4 className="text-6xl font-serif text-gold mb-4 group-hover:scale-110 transition-transform duration-500 origin-left italic">100+</h4>
                  <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Master Craftsmen</p>
                </div>
                <div className="group cursor-default">
                  <h4 className="text-6xl font-serif text-gold mb-4 group-hover:scale-110 transition-transform duration-500 origin-left italic">24h</h4>
                  <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Elite Concierge</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 aspect-[4/5] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hotel Architecture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating Decorative Box */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-12 -right-12 w-64 h-80 border-[1px] border-gold/40 -z-0 hidden md:block"
              />
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gold flex items-center justify-center text-white z-20 shadow-xl"
              >
                <Star size={32} fill="white" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-2xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold uppercase tracking-[6px] text-xs font-bold mb-8"
              >
                The Collection
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-serif leading-tight"
              >
                Refined Spaces <br />for <span className="italic font-light">Global Travelers</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link to="/rooms" className="text-[10px] uppercase tracking-[4px] font-bold text-obsidian flex items-center group pb-2 border-b border-gold/40 hover:border-gold transition-all">
                View All Residences <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {ROOMS.slice(0, 2).map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-32 bg-obsidian text-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-gold uppercase tracking-[4px] text-xs font-semibold mb-6">Exclusive Services</p>
            <h2 className="text-5xl font-serif">A World of Amenities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { icon: <Wind />, title: 'Luxury Spa', desc: 'Holistic treatments designed to rejuvenate your body and spirit.' },
              { icon: <Soup />, title: 'Fine Dining', desc: 'Michelin-starred cuisine curated by world-renowned chefs.' },
              { icon: <ShieldCheck />, title: 'Premium Security', desc: 'Discreet 24/7 security services for ultimate peace of mind.' },
              { icon: <Coffee />, title: 'Morning Concierge', desc: 'Bespoke breakfast experiences delivered to your suite.' },
              { icon: <Dumbbell />, title: 'Fitness Studio', desc: 'State-of-the-art equipment with panoramic city views.' },
              { icon: <Star />, title: 'VIP Experiences', desc: 'Exclusive access to the city’s most sought-after events.' },
            ].map((amenity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/10 hover:border-gold transition-colors duration-500 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  {amenity.icon}
                </div>
                <h4 className="text-xl font-serif mb-4 uppercase tracking-widest">{amenity.title}</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Guest Experience" 
                  className="w-full h-[600px] object-cover rounded-tl-[100px] rounded-br-[100px]"
                />
                <div className="absolute -bottom-10 -right-10 bg-gold p-12 text-white max-w-sm hidden md:block">
                  <Star className="mb-6" />
                  <p className="text-lg italic font-serif leading-relaxed mb-6">
                    "The most exquisite service I have ever experienced. Every detail was meticulously handled, from the room scents to the private chauffeur."
                  </p>
                  <p className="uppercase tracking-widest text-[10px] font-bold">Victoria Sterling, CEO</p>
                </div>
             </div>
             <div>
               <p className="text-gold uppercase tracking-[4px] text-xs font-semibold mb-6">Our Reputation</p>
               <h2 className="text-5xl font-serif mb-12">Unforgettable <br />Memories</h2>
               <div className="space-y-12">
                  <div className="border-l-2 border-gold pl-8">
                    <p className="text-gray-600 font-light mb-4 italic font-serif text-xl">
                      "A true masterpiece of hospitality. The Lumina Grand is not just a hotel, it's a cultural landmark."
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-bold">Travel & Leisure Magazine</p>
                  </div>
                  <div className="border-l-2 border-gold pl-8 opacity-50">
                    <p className="text-gray-600 font-light mb-4 italic font-serif text-xl">
                      "Redefining modern luxury with an old-world heart. Simply unmatched excellence."
                    </p>
                    <p className="text-[10px] uppercase tracking-widest font-bold">Forbes Travel Guide</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white border-t border-ivory">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="text-6xl md:text-8xl font-serif mb-12">Your Journey of <br /><span className="text-gold font-light italic">Luxury Begins</span> Here</h2>
           <p className="text-gray-500 font-light text-lg mb-16 px-12">
             Book your stay today and unlock the door to a world of unparalleled elegance and personalized service.
           </p>
           <Link 
             to="/booking" 
             className="inline-block px-12 py-6 bg-obsidian text-white uppercase tracking-widest text-sm hover:bg-gold transition-colors duration-500 shadow-xl"
           >
             Book Your Private Escape
           </Link>
        </div>
      </section>
    </div>
  );
}
