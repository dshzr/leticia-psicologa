import { Instagram, MessageCircle, Facebook } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.instagram.com/psicologa_leticia_rossetti/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
              aria-label="Instagram"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <Instagram className="w-7 h-7 text-white relative z-10" />
            </motion.a>
            
            <motion.a
              href="https://api.whatsapp.com/send?phone=5519982808077"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
              aria-label="WhatsApp"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <MessageCircle className="w-7 h-7 text-white relative z-10" />
            </motion.a>
            
            <motion.a
              href="https://www.facebook.com/share/15izrtuZ7x/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
              aria-label="Facebook"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <Facebook className="w-7 h-7 text-white relative z-10" />
            </motion.a>
          </div>
          
          <div className="text-center space-y-3">
            <p className="text-gray-700 text-lg">
              Psicóloga Letícia Rossetti
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}