import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Maximize2, Users, Wind, ShieldCheck, Soup, Coffee, ArrowLeft, Calendar } from 'lucide-react';
import { ROOMS } from '../constants/rooms';

export default function RoomDetail() {
  const { id } = useParams();
  const room = ROOMS.find(r => r.id === id);

  if (!room) {
    return <div className="h-screen flex items-center justify-center">Room Not Found</div>;
  }

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[80vh]">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        
        <div className="absolute bottom-20 left-0 w-full z-10">
          <div className="container mx-auto px-6">
            <Link to="/rooms" className="inline-flex items-center text-white/60 hover:text-gold transition-colors mb-8 uppercase text-[10px] tracking-widest font-bold">
              <ArrowLeft size={16} className="mr-3" /> Back to Rooms
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-white mb-6"
            >
              {room.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-10 text-white/80 uppercase text-[10px] tracking-[4px] font-medium">
              <span className="flex items-center"><Maximize2 size={16} className="text-gold mr-3" /> {room.size} Space</span>
              <span className="flex items-center"><Users size={16} className="text-gold mr-3" /> Up to {room.capacity}</span>
              <span className="text-gold font-serif text-2xl italic not-italic">From ${room.price} / night</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="lg:col-span-2">
              <div className="mb-20">
                <h2 className="text-4xl font-serif mb-10 border-b border-obsidian/10 pb-6 uppercase tracking-widest text-obsidian/40 text-sm font-bold">Overview</h2>
                <p className="text-xl font-light text-gray-700 leading-relaxed mb-8">
                  {room.description}
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Every element of the {room.name} has been curated to provide a sense of timeless luxury. From the hand-selected artworks accompanying the walls to the bespoke furniture, this space serves as a private urban oasis.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-4xl font-serif mb-10 border-b border-obsidian/10 pb-6 uppercase tracking-widest text-obsidian/40 text-sm font-bold">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center py-4 border-b border-obsidian/5 space-x-4">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <span className="text-gray-700 uppercase tracking-widest text-xs font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div>
                <h2 className="text-4xl font-serif mb-10 border-b border-obsidian/10 pb-6 uppercase tracking-widest text-obsidian/40 text-sm font-bold">Resort Features</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail 1" />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1521783988139-8539988047ee?q=80&w=1200" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail 2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white shadow-2xl p-10 border border-ivory">
                <h3 className="text-2xl font-serif mb-8 text-center uppercase tracking-widest">Reserve Suite</h3>
                <div className="space-y-6 mb-10">
                  <div className="p-4 border border-ivory bg-ivory/30">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Dates</label>
                    <div className="flex items-center text-sm font-bold text-obsidian">
                      <Calendar className="mr-3 text-gold" size={16} /> 12 May - 18 May
                    </div>
                  </div>
                  <div className="p-4 border border-ivory bg-ivory/30">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">Guests</label>
                    <div className="flex items-center text-sm font-bold text-obsidian">
                      <Users className="mr-3 text-gold" size={16} /> 2 Adults
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-10 border-b border-ivory pb-6">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px]">Total Per Night</span>
                  <span className="text-2xl font-serif text-gold">${room.price}</span>
                </div>

                <Link
                  to="/booking"
                  className="block w-full py-5 bg-obsidian text-white text-center uppercase tracking-widest text-xs hover:bg-gold transition-colors font-bold shadow-xl"
                >
                  Confirm Availability
                </Link>
                <p className="text-[10px] text-center text-gray-400 mt-6 uppercase tracking-widest">Best Price Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
