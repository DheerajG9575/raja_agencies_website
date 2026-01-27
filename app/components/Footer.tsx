'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#EF4444] mb-4">Raja Agencies</h3>
            <p className="text-gray-300 mb-2">Sales & Services Since 1992</p>
            <p className="text-gray-400 text-sm">
              Your trusted partner for batteries, inverters, solar panels, and installation services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/batteriesandinverters" className="text-gray-300 hover:text-[#EF4444] transition-colors">
                  Batteries & Inverters
                </a>
              </li>
              <li>
                <a href="/solar" className="text-gray-300 hover:text-[#EF4444] transition-colors">
                  Solar Solutions
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-[#EF4444] transition-colors">
                  Our Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-[#EF4444]" />
                <span>+91 XXX-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-[#EF4444]" />
                <span>info@rajaagencies.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-[#EF4444]" />
                <span>Your Location, City</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Raja Agencies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
