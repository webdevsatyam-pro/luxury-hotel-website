import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowRight, Star, Wind, ShieldCheck, Soup, Coffee, Dumbbell, Compass, Award, Gem } from 'lucide-react';
import { ROOMS } from '../constants/rooms';
import RoomCard from '../components/RoomCard';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2400&auto=format&fit=crop" 
            alt="Hotel Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian/90" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div style={{ opacity }}>
            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[10px] md:text-xs uppercase tracking-[12px] font-bold text-gold-light"
              >
                Since 1924 • Avenue Montaigne, Paris
              </motion.p>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.h1
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-7xl md:text-[12rem] font-display leading-[0.8] text-white"
              >
                Lumina <br />
                <span className="italic font-light text-gold-light font-serif">Grand</span>
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
                  initial={{ x: '-101%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                Our Legacy <div className="ml-4 w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-gold transition-all duration-700" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-[5px] text-white/30 mb-3 ml-[5px]">Explore</span>
          <div className="w-px h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gold" 
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section - The Philosophy */}
      <section className="py-56 bg-ivory text-obsidian relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-gold uppercase tracking-[8px] text-[10px] font-bold mb-10">Art Deco Grandeur</p>
              <h2 className="text-6xl md:text-8xl font-display mb-12 leading-[0.9]">
                Where <span className="italic font-light font-serif">History</span> <br /> 
                Meets the Future
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-16 max-w-xl">
                Standing as a beacon of Parisian sophistication since 1924, Lumina Grand is more than a hotel. It is a living testament to the Golden Age, reimagined for the modern visionary. Every corridor whispers stories of royalty, artists, and explorers.
              </p>
              
              <div className="grid grid-cols-2 gap-16 border-t border-gold/30 pt-16">
                <div>
                  <h4 className="text-6xl font-serif text-gold mb-4 italic">120</h4>
                  <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Palatial Residences</p>
                </div>
                <div>
                  <h4 className="text-6xl font-serif text-gold mb-4 italic">3</h4>
                  <p className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Michelin Stars</p>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 aspect-[4/5] overflow-hidden rounded-t-[200px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hotel Architecture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-16 -right-16 w-64 h-80 border border-gold/30 -z-0 hidden xl:block"
              />
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-10 -left-10 w-28 h-28 bg-gold flex items-center justify-center text-white z-20 shadow-2xl"
              >
                <Award size={40} strokeWidth={1} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Suites - Horizontal Scroll feel */}
      <section className="py-48 bg-white text-obsidian">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold uppercase tracking-[10px] text-[10px] font-bold mb-10"
              >
                The 2024 Collection
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-8xl font-display leading-[0.9]"
              >
                Signature <br />Palatial <span className="italic font-light font-serif">Living</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pb-6"
            >
              <Link to="/rooms" className="text-[10px] uppercase tracking-[4px] font-bold text-obsidian group flex items-center space-x-6">
                <span>Explore All Suites</span>
                <div className="w-16 h-[1px] bg-gold/30 group-hover:w-24 group-hover:bg-gold transition-all duration-700" />
                <ArrowRight size={16} className="text-gold group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {ROOMS.slice(0, 4).map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences - Large Grid */}
      <section className="py-48 bg-obsidian text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
               <p className="text-gold uppercase tracking-[8px] text-[10px] font-bold mb-10">Bespoke Concierge</p>
               <h2 className="text-6xl font-display leading-tight mb-12">The Fine Art of <br />Service</h2>
               <p className="text-lg text-white/50 font-light leading-relaxed max-w-lg italic">
                 "Luxury is not a commodity, it is an emotion. We don't just provide services; we craft unforgettable moments that resonate through time."
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Wind />, title: 'Deep Wellness', desc: 'Holistic treatments in our golden-leaf spa.' },
                { icon: <Soup />, title: 'Gastronomy', desc: 'Dining that transcends the culinary world.' },
                { icon: <Gem />, title: 'Elite Access', desc: 'Private tours of the Louvre after hours.' },
                { icon: <Compass />, title: 'City Tours', desc: 'Classic vintage car cruises along the Seine.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white/5 border border-white/5 hover:border-gold/30 transition-all duration-500 group"
                >
                  <div className="inline-flex p-4 rounded-full bg-gold/10 text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all duration-700">
                    {item.icon}
                  </div>
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-4">{item.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culinary - Full Width Splash */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966841-396ad88675c8?q=80&w=2400&auto=format&fit=crop" 
            alt="Fine Dining" 
            className="w-full h-full object-cover scale-110 lg:scale-100"
          />
          <div className="absolute inset-0 bg-obsidian/40 backdrop-blur-[2px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold uppercase tracking-[10px] text-[10px] font-bold mb-8">L'Infini Restaurant</p>
              <h2 className="text-6xl md:text-9xl font-display text-white mb-12">Gastronomic <br /><span className="italic font-light font-serif">Elysium</span></h2>
              <Link to="/dining" className="inline-block px-12 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[4px] font-bold hover:bg-gold hover:border-gold transition-all duration-700">
                Reserve a Table
              </Link>
            </motion.div>
        </div>
      </section>

      {/* Testimonials - Editorial Flip */}
      <section className="py-48 bg-ivory text-obsidian">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div className="relative group">
                <div className="absolute -inset-4 border border-gold/20 scale-95 group-hover:scale-100 transition-transform duration-1000 rounded-t-[150px]" />
                <motion.img 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Guest Experience" 
                  className="w-full h-[700px] object-cover rounded-t-[150px] relative z-10"
                />
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-16 -left-16 bg-obsidian p-16 text-white max-w-md hidden xl:block z-20 shadow-2xl"
                >
                  <Star size={32} className="text-gold mb-8" fill="#C5A059" />
                  <p className="text-2xl italic font-serif leading-relaxed mb-8">
                    "The most exquisite service I have ever experienced. Every detail was handled with surgical precision, yet felt entirely effortless."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/50 underline decoration-gold underline-offset-8">Victoria Sterling, CEO</p>
                </motion.div>
             </div>
             <div>
               <p className="text-gold uppercase tracking-[8px] text-[10px] font-bold mb-10 italic">Voices of Distinction</p>
               <h2 className="text-6xl font-display mb-16 leading-[1.1]">The Legacy of <br /><span className="italic font-light font-serif">Grandeur</span></h2>
               <div className="space-y-20">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-gold pl-12"
                  >
                    <p className="text-gray-600 font-light mb-8 italic font-serif text-2xl leading-relaxed">
                      "A true masterpiece of hospitality. The Lumina Grand is not just a hotel, it's a cultural landmark. It's where Paris finds its soul."
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-px bg-gold/40" />
                      <p className="text-[10px] uppercase tracking-widest font-bold">The New York Times</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="border-l-2 border-gold/20 pl-12 opacity-80"
                  >
                    <p className="text-gray-400 font-light mb-8 italic font-serif text-2xl leading-relaxed">
                      "Redefining modern luxury with an old-world heart. Simply unmatched excellence in the golden triangle."
                    </p>
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="w-12 h-px bg-gold/20" />
                      <p className="text-[10px] uppercase tracking-widest font-bold">Forbes Travel Guide</p>
                    </div>
                  </motion.div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section - The Invitation */}
      <section className="py-64 bg-white text-obsidian border-t border-ivory/50">
        <div className="container mx-auto px-6 text-center max-w-6xl">
           <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
           >
            <h2 className="text-7xl md:text-[8rem] font-display mb-16 leading-[0.85]">
              Experience <br />The <span className="text-gold-light font-light italic font-serif">Incomparable</span>
            </h2>
            <p className="text-gray-500 font-light text-xl mb-20 max-w-2xl mx-auto italic leading-relaxed">
              Unlock the door to a world where every desire is pre-empted and every moment is masterfully curated. Your Parisian escape awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
              <Link 
                to="/booking" 
                className="px-16 py-7 bg-obsidian text-white uppercase tracking-[4px] text-[12px] font-bold hover:bg-gold transition-all duration-700 shadow-2xl"
              >
                Inquire About A Stay
              </Link>
              <Link 
                to="/contact" 
                className="text-obsidian uppercase tracking-[4px] text-[12px] font-bold border-b border-gold/50 hover:border-gold transition-all duration-700 pb-2"
              >
                Speak with Concierge
              </Link>
            </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
