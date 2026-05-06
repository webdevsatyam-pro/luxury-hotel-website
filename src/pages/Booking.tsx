import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Home, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { ROOMS } from '../constants/rooms';

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-20 bg-ivory min-h-screen">
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-obsidian/5 -z-10" />
             <div className="flex justify-between max-w-2xl mx-auto items-center">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-ivory transition-all duration-500 ${step >= s ? 'border-gold text-gold shadow-lg shadow-gold/20' : 'border-gray-200 text-gray-300'}`}>
                      {step > s ? <CheckCircle size={20} /> : s}
                    </div>
                    <span className={`text-[10px] uppercase font-bold mt-3 tracking-widest ${step >= s ? 'text-gold' : 'text-gray-300'}`}>
                      {['Details', 'Selection', 'Confirm'][s-1]}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-white shadow-2xl border border-ivory p-12 overflow-hidden">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Check-in Date</label>
                      <div className="relative border-b border-gray-200 py-3 transition-all hover:border-gold group">
                        <Calendar className="absolute right-0 top-3 text-gold group-hover:scale-110 transition-transform" />
                        <input type="date" className="w-full bg-transparent focus:outline-none text-sm font-serif font-bold cursor-pointer" defaultValue="2026-05-12" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Check-out Date</label>
                      <div className="relative border-b border-gray-200 py-3 transition-all hover:border-gold group">
                         <Calendar className="absolute right-0 top-3 text-gold group-hover:scale-110 transition-transform" />
                         <input type="date" className="w-full bg-transparent focus:outline-none text-sm font-serif font-bold cursor-pointer" defaultValue="2026-05-18" />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Guests</label>
                      <div className="relative border-b border-gray-200 py-3 transition-all hover:border-gold group">
                        <Users className="absolute right-0 top-3 text-gold group-hover:scale-110 transition-transform" />
                        <select className="w-full bg-transparent focus:outline-none text-sm font-serif font-bold cursor-pointer appearance-none">
                            <option>1 Adult</option>
                            <option selected>2 Adults</option>
                            <option>2 Adults, 1 Child</option>
                            <option>2 Adults, 2 Children</option>
                        </select>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[4px] font-bold text-gray-400">Promo Code</label>
                      <div className="relative border-b border-gray-200 py-3 transition-all hover:border-gold">
                         <input type="text" className="w-full bg-transparent focus:outline-none text-sm font-serif font-bold tracking-widest placeholder:text-gray-200 uppercase" placeholder="ENTER CODE" />
                      </div>
                   </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-6 bg-obsidian text-white uppercase tracking-[4px] text-xs font-bold hover:bg-gold transition-colors flex items-center justify-center group"
                >
                  Search Availability <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div className="flex justify-between items-center border-b border-ivory pb-8">
                  <h3 className="text-3xl font-serif">Available Properties</h3>
                  <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-gray-400 hover:text-gold transition-colors underline underline-offset-4">Modify Search</button>
                </div>
                <div className="space-y-8">
                   {ROOMS.map((room) => (
                      <div key={room.id} className="flex flex-col md:flex-row border border-ivory hover:shadow-xl transition-all duration-500 overflow-hidden group">
                         <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                           <img src={room.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={room.name} />
                         </div>
                         <div className="md:w-2/3 p-8 flex flex-col justify-between">
                            <div>
                               <div className="flex justify-between items-start mb-4">
                                  <h4 className="text-2xl font-serif">{room.name}</h4>
                                  <span className="text-2xl font-serif text-gold">${room.price} <span className="text-[10px] text-gray-400 not-italic uppercase tracking-widest italic font-sans font-bold">/ night</span></span>
                               </div>
                               <p className="text-gray-500 font-light text-sm mb-6 max-w-lg">{room.description}</p>
                            </div>
                            <div className="flex justify-between items-center">
                               <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                                  <span>{room.size}</span>
                                  <span>{room.capacity}</span>
                               </div>
                               <button 
                                onClick={() => setStep(3)}
                                className="px-8 py-3 bg-gold text-white uppercase tracking-widest text-[10px] font-bold hover:bg-obsidian transition-colors"
                               >
                                Select Property
                               </button>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-10 overflow-hidden">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.3 }}
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                </div>
                <h3 className="text-5xl font-serif mb-6 leading-tight">Registration <span className="italic font-light">Confirmed</span></h3>
                <p className="text-gray-500 font-light text-lg mb-12 max-w-xl mx-auto">
                  An invitation to Lumina Grand Hotel has been sent to your primary email address. Our personal concierge will accompany your journey from this moment forward.
                </p>
                <div className="bg-ivory/50 p-10 max-w-md mx-auto mb-12 border border-ivory">
                  <h4 className="uppercase text-[10px] tracking-[4px] font-bold mb-8">Reservation Details</h4>
                  <div className="space-y-4 text-sm font-medium">
                     <div className="flex justify-between">
                        <span className="text-gray-400 uppercase tracking-widest text-[10px]">Reference</span>
                        <span className="uppercase tracking-widest">LGH-2026-X8</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-gray-400 uppercase tracking-widest text-[10px]">Property</span>
                        <span>Royal Penthouse Suite</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-gray-400 uppercase tracking-widest text-[10px]">Arrival</span>
                        <span>12 May, 2026</span>
                     </div>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="px-12 py-5 bg-obsidian text-white uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors"
                >
                  Return to Sanctuary
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
