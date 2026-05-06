import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const IMAGES = [
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200', category: 'Lobby' },
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200', category: 'Pool' },
  { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200', category: 'Suites' },
  { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200', category: 'Dining' },
  { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200', category: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=1200', category: 'Spa' },
  { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200', category: 'Suites' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200', category: 'Dining' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-gold uppercase tracking-[6px] text-xs font-semibold mb-6">Visual Journey</p>
            <h1 className="text-6xl font-serif mb-8 text-obsidian">Our Gallery</h1>
            <div className="w-16 h-px bg-gold mx-auto" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {IMAGES.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden bg-white shadow-xl"
                onClick={() => setSelectedImg(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.category} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white">
                    <Maximize2 size={32} className="mx-auto mb-4" />
                    <p className="uppercase text-[10px] tracking-[4px] font-bold">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-obsidian/95 backdrop-blur-sm flex items-center justify-center p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
