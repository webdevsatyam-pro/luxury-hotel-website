import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-ivory">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <p className="text-gold uppercase tracking-[6px] text-xs font-semibold mb-8">Get In Touch</p>
              <h1 className="text-6xl font-serif mb-12 text-obsidian">Contact Us</h1>
              <p className="text-xl text-gray-500 font-light mb-16 leading-relaxed">
                Whether you have a specific request or simply wish to inquire about our services, our dedicated team is at your complete disposal.
              </p>

              <div className="space-y-12">
                <div className="flex items-start space-x-8">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold rounded-full shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="uppercase text-[10px] tracking-[4px] font-bold text-gray-600 mb-2">Location</h4>
                    <p className="text-lg font-serif">123 Luxury Boulevard, Paris, 75001, France</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold rounded-full shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="uppercase text-[10px] tracking-[4px] font-bold text-gray-600 mb-2">Telephone</h4>
                    <p className="text-lg font-serif">+33 (0) 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold rounded-full shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="uppercase text-[10px] tracking-[4px] font-bold text-gray-600 mb-2">Email</h4>
                    <p className="text-lg font-serif">concierge@luminagrand.com</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 shadow-2xl border border-ivory"
            >
              <h3 className="text-2xl font-serif mb-10 text-center uppercase tracking-widest">Inquiry Form</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">First Name</label>
                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Last Name</label>
                    <input type="text" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                  <input type="email" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Subject</label>
                  <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-sm bg-transparent">
                    <option>General Inquiry</option>
                    <option>Reservations</option>
                    <option>Events & Weddings</option>
                    <option>Spa Bookings</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Message</label>
                  <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-gold transition-colors text-sm resize-none" />
                </div>
                <button className="w-full py-5 bg-obsidian text-white uppercase tracking-[4px] text-xs font-bold hover:bg-gold transition-colors flex items-center justify-center group shadow-lg">
                  Send Message <Send size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section placeholder */}
      <section className="h-[500px] w-full grayscale opacity-70">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.327429176378419!3d48.87440627133465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sOp%C3%A9ra%20Garnier!5e0!3m2!1sen!2sfr!4v1714995000000!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
      </section>
    </div>
  );
}
