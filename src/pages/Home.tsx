import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Star, Wind, ShieldCheck, Soup, Coffee, Dumbbell, Compass, Award, Gem, ChevronDown, Phone, MapPin, Clock, Play } from 'lucide-react';
import { ROOMS } from '../constants/rooms';
import RoomCard from '../components/RoomCard';

// ─── Animated Counter ───────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Section Header ──────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p className="text-[10px] md:text-[11px] uppercase tracking-[10px] font-bold text-gold-light mb-8">
      {children}
    </p>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const [activeTab, setActiveTab] = useState(0);
  const experiences = [
    { label: 'Wellness', icon: <Wind size={18}/>, title: 'Golden Sanctuary Spa', desc: 'Surrender to an ancient ritual reborn in golden-leaf marble halls. Our master therapists blend Eastern wisdom with Parisian elegance across 2,400 sq ft of pure serenity. Private thermal circuits, bespoke aromatherapy, and exclusive anti-aging treatments await.', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1400&auto=format&fit=crop' },
    { label: 'Gastronomy', icon: <Soup size={18}/>, title: "L'Infini Restaurant", desc: 'Our three-Michelin-starred kitchen, helmed by Chef Antoine Moreau, presents an ever-evolving tasting menu that tells the story of France through hyper-seasonal, artisan ingredients. Sixty covers. Zero compromises.', img: 'https://images.unsplash.com/photo-1550966841-396ad88675c8?q=80&w=1400&auto=format&fit=crop' },
    { label: 'Elite Access', icon: <Gem size={18}/>, title: 'Private Experiences', desc: 'After-hours access to the Louvre, private helicopter tours of the Château Valley, bespoke shopping journeys through Place Vendôme with a personal stylist. Your wish is the blueprint; our network is the canvas.', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1400&auto=format&fit=crop' },
    { label: 'Fitness', icon: <Dumbbell size={18}/>, title: 'Altitude Fitness Club', desc: 'A glass-walled rooftop gym with Eiffel Tower views, Technogym equipment, personal trainers, and sunrise yoga on the terrace. Wellness here is as elevated as the address.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop' },
  ];

  const timeline = [
    { year: '1924', title: 'Foundation', desc: 'Visionary architect Henri Lumière conceives the grand dame of Avenue Montaigne — an Art Deco masterpiece born in the Golden Age.' },
    { year: '1942', title: 'The War Years', desc: 'Sheltering resistance artists and diplomats alike, the hotel becomes a sanctuary of culture amid the storm of occupation.' },
    { year: '1968', title: 'First Michelin Star', desc: 'Chef Dupont earns the first of three stars, putting L\'Infini on the global gastronomic map.' },
    { year: '1995', title: 'Grand Renovation', desc: 'A two-year restoration returns every gilded detail to its original splendour, while adding discreet modern comfort.' },
    { year: '2024', title: 'A New Chapter', desc: 'The centennial collection of suites — reimagining luxury for the modern visionary while honouring the original spirit.' },
  ];

  return (
    <div className="overflow-hidden bg-white">

      {/* ══════════════════════════════════════════
          1. HERO — Full viewport, parallax
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2400&auto=format&fit=crop"
            alt="Lumina Grand Hotel Lobby"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/25 to-obsidian/95" />
        </motion.div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 z-1 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(197,160,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
        />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div style={{ opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex items-center justify-center gap-6 mb-10"
            >
              <div className="w-16 h-px bg-gold/40" />
              <p className="text-[10px] md:text-[11px] uppercase tracking-[12px] font-bold text-gold-light">
                Since 1924 · Avenue Montaigne, Paris
              </p>
              <div className="w-16 h-px bg-gold/40" />
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 160 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4rem,14vw,13rem)] font-display leading-[0.82] text-white"
              >
                Lumina
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-14">
              <motion.h1
                initial={{ y: 160 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.05, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(4rem,14vw,13rem)] font-display leading-[0.82] text-gold-light italic font-serif"
              >
                Grand
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="text-white/50 text-sm md:text-base font-light tracking-widest mb-14 max-w-md mx-auto"
            >
              A century of Parisian elegance — reimagined.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            >
              <Link to="/rooms" className="group relative px-12 py-5 bg-gold text-white uppercase tracking-[4px] text-[10px] font-bold overflow-hidden">
                <span className="relative z-10 group-hover:text-obsidian transition-colors duration-500">Discover Suites</span>
                <motion.div className="absolute inset-0 bg-white" initial={{ x: '-101%' }} whileHover={{ x: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} />
              </Link>
              <Link to="/booking" className="px-12 py-5 border border-white/20 text-white uppercase tracking-[4px] text-[10px] font-bold hover:border-gold hover:text-gold transition-all duration-500">
                Book A Stay
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[6px] text-white/25">Scroll</span>
          <div className="w-px h-16 bg-white/10 relative overflow-hidden">
            <motion.div animate={{ y: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} className="absolute inset-x-0 top-0 h-1/2 bg-gold" />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          2. MARQUEE STRIP
      ══════════════════════════════════════════ */}
      <div className="bg-gold py-5 overflow-hidden">
        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[8px] font-bold text-white/80 px-10">
              Five Star · Michelin Starred · Since 1924 · Paris · ✦
            </span>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          3. PHILOSOPHY / INTRO
      ══════════════════════════════════════════ */}
      <section className="py-40 md:py-56 bg-ivory text-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
              <SectionLabel>Art Deco Grandeur · Paris</SectionLabel>
              <h2 className="text-[clamp(3rem,7vw,6rem)] font-display mb-10 leading-[0.9]">
                Where <span className="italic font-light font-serif">History</span><br />Meets the Future
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-14 max-w-xl">
                Standing as a beacon of Parisian sophistication since 1924, Lumina Grand is more than a hotel. It is a living testament to the Golden Age, reimagined for the modern visionary. Every corridor whispers stories of royalty, artists, and explorers.
              </p>
              <Link to="/about" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[4px] font-bold text-obsidian group">
                Our Full Story
                <div className="w-14 h-px bg-gold/40 group-hover:w-24 group-hover:bg-gold transition-all duration-700" />
                <ArrowRight size={14} className="text-gold group-hover:translate-x-2 transition-transform" />
              </Link>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-gold/30 mt-16 pt-16">
                {[
                  { val: 120, suf: '', label: 'Palatial Suites' },
                  { val: 3, suf: '★', label: 'Michelin Stars' },
                  { val: 100, suf: '+', label: 'Years of Legacy' },
                ].map((s, i) => (
                  <div key={i}>
                    <h4 className="text-5xl md:text-6xl font-serif text-gold mb-2 italic">
                      <Counter end={s.val} suffix={s.suf} />
                    </h4>
                    <p className="text-[9px] uppercase tracking-[4px] font-bold text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
                className="relative z-10 aspect-[4/5] overflow-hidden rounded-t-[200px]">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop" alt="Hotel Architecture" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-16 -right-16 w-64 h-80 border border-gold/30 -z-0 hidden xl:block" />
              <motion.div initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, type: 'spring' }}
                className="absolute -top-10 -left-10 w-24 h-24 bg-gold flex items-center justify-center text-white z-20 shadow-2xl">
                <Award size={36} strokeWidth={1} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. FEATURED SUITES
      ══════════════════════════════════════════ */}
      <section className="py-40 md:py-48 bg-white text-obsidian">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <SectionLabel>The 2024 Collection</SectionLabel>
              <h2 className="text-[clamp(3rem,7vw,7rem)] font-display leading-[0.9]">
                Signature <br />Palatial <span className="italic font-light font-serif">Living</span>
              </h2>
            </div>
            <Link to="/rooms" className="text-[10px] uppercase tracking-[4px] font-bold text-obsidian group flex items-center gap-5 pb-4">
              <span>Explore All Suites</span>
              <div className="w-14 h-px bg-gold/30 group-hover:w-24 group-hover:bg-gold transition-all duration-700" />
              <ArrowRight size={14} className="text-gold group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-28">
            {ROOMS.slice(0, 4).map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. EXPERIENCE TABS
      ══════════════════════════════════════════ */}
      <section className="py-40 md:py-48 bg-obsidian text-white">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <SectionLabel>Bespoke Experiences</SectionLabel>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-display leading-[0.9] max-w-2xl">
              The Fine Art <br />of <span className="italic font-light font-serif">Service</span>
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            {experiences.map((e, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className={`flex items-center gap-3 px-6 py-3 text-[10px] uppercase tracking-[4px] font-bold border transition-all duration-500 ${activeTab === i ? 'bg-gold border-gold text-white' : 'border-white/10 text-white/40 hover:border-gold/40 hover:text-white/70'}`}>
                {e.icon} {e.label}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={experiences[activeTab].img} alt={experiences[activeTab].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-display mb-8">{experiences[activeTab].title}</h3>
              <p className="text-white/50 font-light leading-relaxed text-lg mb-12">{experiences[activeTab].desc}</p>
              <Link to="/experiences" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[4px] font-bold text-gold group">
                Learn More
                <div className="w-12 h-px bg-gold/40 group-hover:w-20 transition-all duration-700" />
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. CULINARY SPLASH
      ══════════════════════════════════════════ */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550966841-396ad88675c8?q=80&w=2400&auto=format&fit=crop"
            alt="Fine Dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/50 backdrop-blur-[1px]" />
        </div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <SectionLabel>L'Infini Restaurant · 3 Michelin Stars</SectionLabel>
            <h2 className="text-[clamp(3.5rem,11vw,9rem)] font-display text-white mb-10 leading-[0.85]">
              Gastronomic<br /><span className="italic font-light font-serif">Elysium</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg font-light max-w-xl mx-auto mb-14">
              Sixty covers. One tasting menu. An evening that rewrites everything you thought you knew about French cuisine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/dining" className="px-12 py-5 bg-gold text-white uppercase tracking-[4px] text-[10px] font-bold hover:bg-white hover:text-obsidian transition-all duration-500">
                Reserve a Table
              </Link>
              <Link to="/dining" className="flex items-center gap-3 text-white/60 text-[10px] uppercase tracking-[4px] font-bold hover:text-white transition-colors">
                <Play size={16} fill="currentColor" /> View the Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. HISTORY TIMELINE
      ══════════════════════════════════════════ */}
      <section className="py-40 md:py-48 bg-ivory text-obsidian overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-24">
            <SectionLabel>A Century of Stories</SectionLabel>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-display leading-[0.9]">
              Our <span className="italic font-light font-serif">Legacy</span>
            </h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[88px] md:left-1/2 top-0 bottom-0 w-px bg-gold/20 hidden sm:block" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative flex flex-col sm:flex-row gap-8 sm:gap-0 items-start ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'sm:pr-20 sm:text-right' : 'sm:pl-20'}`}>
                    <h3 className="text-2xl font-display mb-3">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed max-w-sm sm:ml-auto">{item.desc}</p>
                  </div>
                  {/* Year bubble */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 bg-obsidian border-4 border-ivory items-center justify-center z-10 shadow-xl">
                    <span className="text-gold font-serif italic text-sm">{item.year}</span>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-40 md:py-48 bg-white text-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/20 scale-95 group-hover:scale-100 transition-transform duration-1000 rounded-t-[150px]" />
              <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
                alt="Guest Experience" className="w-full h-[550px] md:h-[700px] object-cover rounded-t-[150px] relative z-10" />
              <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-16 -left-4 xl:-left-16 bg-obsidian p-10 xl:p-16 text-white max-w-xs xl:max-w-md hidden md:block z-20 shadow-2xl">
                <Star size={28} className="text-gold mb-6" fill="#C5A059" />
                <p className="text-xl xl:text-2xl italic font-serif leading-relaxed mb-8">
                  "The most exquisite service I have ever experienced. Every detail handled with surgical precision, yet entirely effortless."
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/50 underline decoration-gold underline-offset-8">Victoria Sterling, CEO</p>
              </motion.div>
            </div>
            <div>
              <SectionLabel>Voices of Distinction</SectionLabel>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display mb-16 leading-[1.1]">
                The Legacy of <br /><span className="italic font-light font-serif">Grandeur</span>
              </h2>
              <div className="space-y-16">
                {[
                  { quote: 'A true masterpiece of hospitality. Not just a hotel — a cultural landmark where Paris finds its soul.', source: 'The New York Times' },
                  { quote: 'Redefining modern luxury with an old-world heart. Simply unmatched excellence in the golden triangle.', source: 'Forbes Travel Guide' },
                  { quote: 'Lumina Grand is the only address in Paris that fully delivers on the promise of true five-star grandeur.', source: 'Condé Nast Traveller' },
                ].map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`border-l-2 pl-10 ${i === 0 ? 'border-gold' : 'border-gold/20 opacity-70'}`}>
                    <p className="text-gray-600 font-light mb-6 italic font-serif text-xl leading-relaxed">{t.quote}</p>
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-px bg-gold/40" />
                      <p className="text-[10px] uppercase tracking-widest font-bold">{t.source}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. AWARDS STRIP
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-obsidian border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center">
            {[
              { icon: <Star size={32} strokeWidth={1}/>, label: 'Forbes 5-Star', sub: '2019–2024' },
              { icon: <Award size={32} strokeWidth={1}/>, label: 'World\'s Best', sub: 'Travel + Leisure 2023' },
              { icon: <Gem size={32} strokeWidth={1}/>, label: 'Palace Status', sub: 'French Ministry of Tourism' },
              { icon: <ShieldCheck size={32} strokeWidth={1}/>, label: 'Preferred Hotels', sub: 'Legend Collection' },
            ].map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4">
                <div className="text-gold">{a.icon}</div>
                <div>
                  <p className="text-white text-sm font-bold tracking-widest uppercase">{a.label}</p>
                  <p className="text-white/30 text-[10px] tracking-wider mt-1">{a.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. LOCATION / CONTACT STRIP
      ══════════════════════════════════════════ */}
      <section className="py-32 bg-ivory text-obsidian">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x divide-gold/20">
            {[
              { icon: <MapPin className="text-gold" size={22}/>, label: 'Address', val: '32 Avenue Montaigne, 75008 Paris, France' },
              { icon: <Phone className="text-gold" size={22}/>, label: 'Reservations', val: '+33 (0)1 47 23 55 11' },
              { icon: <Clock className="text-gold" size={22}/>, label: 'Check-in / Check-out', val: 'From 3:00 PM · Until 12:00 PM' },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-5 md:px-10 first:pl-0 last:pr-0">
                <div className="mt-1">{c.icon}</div>
                <div>
                  <p className="text-[9px] uppercase tracking-[5px] font-bold text-gray-400 mb-2">{c.label}</p>
                  <p className="text-sm font-light text-obsidian leading-relaxed">{c.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          11. FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-52 md:py-64 bg-white text-obsidian border-t border-ivory/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(197,160,89,0.07), transparent)' }} />
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
            <SectionLabel>The Invitation</SectionLabel>
            <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-display mb-12 leading-[0.88]">
              Experience <br />The <span className="text-gold-light font-light italic font-serif">Incomparable</span>
            </h2>
            <p className="text-gray-500 font-light text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
              Unlock the door to a world where every desire is pre-empted and every moment masterfully curated. Your Parisian escape awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/booking" className="px-14 py-6 bg-obsidian text-white uppercase tracking-[4px] text-[11px] font-bold hover:bg-gold transition-all duration-700 shadow-2xl">
                Inquire About A Stay
              </Link>
              <Link to="/contact" className="text-obsidian uppercase tracking-[4px] text-[11px] font-bold border-b border-gold/50 hover:border-gold transition-all duration-700 pb-1">
                Speak with Concierge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}