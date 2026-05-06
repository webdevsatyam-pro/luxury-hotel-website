import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Maximize2, Users, ArrowRight } from 'lucide-react';
import { Room } from '../constants/rooms';

interface RoomCardProps {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative bg-white overflow-hidden"
    >
      <Link to={`/rooms/${room.id}`} className="block relative aspect-[14/16] overflow-hidden">
        <motion.img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
        
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <div className="overflow-hidden mb-2">
            <motion.p className="text-[10px] uppercase tracking-[6px] text-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-700 font-bold">
              {room.category}
            </motion.p>
          </div>
          
          <div className="overflow-hidden mb-8">
            <motion.h3 className="text-3xl md:text-4xl font-serif text-white leading-tight translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
              {room.name}
            </motion.h3>
          </div>

          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[3px] text-white/70 font-display">
              <span className="flex items-center"><Maximize2 size={12} className="mr-2 text-gold" /> {room.size}</span>
              <span className="flex items-center"><Users size={12} className="mr-2 text-gold" /> {room.capacity}</span>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-gold-light mb-1">From</p>
              <p className="text-3xl font-serif text-white">${room.price}</p>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-500 bg-white/5 backdrop-blur-md">
          <ArrowRight size={20} className="text-white" />
        </div>
      </Link>
    </motion.div>
  );
}
