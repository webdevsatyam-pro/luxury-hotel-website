import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative py-40 bg-obsidian text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-gold uppercase tracking-[6px] text-xs font-semibold mb-8">Our Heritage</p>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-tight">Centuries of <span className="italic font-light">Grace</span> & Vision</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Founded in 1924, Lumina Grand has stood as a beacon of sophistication and uncompromising luxury for over a century. What began as a grand residence for royalty has evolved into a world-class destination for the modern visionary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-serif mb-8 leading-tight underline decoration-gold/20 underline-offset-8">A Vision of Perfection</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Our founders believed that luxury isn't about excess—it's about the precision of care. Every marble slab in our lobby, every hand-woven silk in our suites, and every smile from our concierge is part of a century-long promise of perfection.
              </p>
              <div className="space-y-6">
                 {[
                   { icon: <ShieldCheck className="text-gold" />, title: 'Integrity', text: 'Preserving our heritage while embracing the future.' },
                   { icon: <Leaf className="text-gold" />, title: 'Harmony', text: 'Creating spaces that breathe in unison with nature.' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-6">
                     <div className="mt-1">{item.icon}</div>
                     <div>
                       <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                       <p className="text-gray-500 text-sm font-light">{item.text}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
               className="order-1 lg:order-2"
            >
              <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200" alt="Hotel Interior" className="w-full h-[600px] object-cover shadow-2xl" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=1200" alt="Hotel Experience" className="w-full h-[600px] object-cover shadow-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif mb-8 leading-tight underline decoration-gold/20 underline-offset-8">Global Distinction</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                We have been recognized by the worlds leading hospitality awards for over 20 consecutive years. However, our greatest reward is the smile on our guests' faces as they step into their sanctuary.
              </p>
              <div className="space-y-6">
                 {[
                   { icon: <Globe className="text-gold" />, title: 'International Presence', text: 'Serving distinguished guests from across the globe.' },
                   { icon: <Heart className="text-gold" />, title: 'Human Connection', text: 'Personalized service that anticipates every need.' },
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-6">
                     <div className="mt-1">{item.icon}</div>
                     <div>
                       <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                       <p className="text-gray-500 text-sm font-light">{item.text}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
