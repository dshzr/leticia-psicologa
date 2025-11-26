import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-teal-700 relative">
              Psicóloga Letícia Rossetti
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h1>
          </div>

          <motion.a
            href="https://api.whatsapp.com/send?phone=5513996990062"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Fale conosco no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}