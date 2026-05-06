import { motion } from 'motion/react';
import { ROOMS } from '../constants/rooms';
import RoomCard from '../components/RoomCard';

export default function Rooms() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop" 
            alt="Suites Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[8px] font-display mb-6 text-gold-light"
          >
            Lumina Collections
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif"
          >
            Rooms & <span className="italic font-light">Suites</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-32 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 border-b border-obsidian/10 pb-16 gap-8">
            <div className="flex space-x-12 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
              {['All Collections', 'Royal Suites', 'Executive', 'Grand Deluxe'].map((cat, i) => (
                <motion.button 
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[10px] uppercase tracking-[4px] font-bold text-obsidian/40 hover:text-gold transition-colors whitespace-nowrap relative group"
                >
                  {cat}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-[4px] font-bold">
              / Results: {ROOMS.length}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-32">
            {ROOMS.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-4xl font-serif mb-8 leading-tight">The Art of <br />Sleep</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  We believe that a perfect stay begins with a perfect sleep. Our custom-designed Lumina Signature mattresses and 1000-thread-count Egyptian cotton linens ensure a restful night.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" alt="Pillow Menu" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-video overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop" alt="Aromatherapy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
