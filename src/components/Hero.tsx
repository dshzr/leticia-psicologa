import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 py-24 lg:py-40 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-teal-100"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700">Atendimento Especializado</span>
            </motion.div>
            
            <h2 className="text-teal-700 leading-tight">
              Acolhimento e sensibilidade para o seu bem-estar
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              Espaço seguro e acolhedor para você cuidar da sua saúde mental e emocional. 
              Atendimento humanizado com foco no seu bem-estar e qualidade de vida.
            </p>
            
            <motion.a
              href="https://api.whatsapp.com/send?phone=5519982808077"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-10 py-5 rounded-full transition-all shadow-xl hover:shadow-2xl"
            >
              <span className="text-lg">Agende sua sessão!</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400 to-purple-400 rounded-3xl opacity-20 blur-2xl" />
            
            <motion.div 
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/perfil.png"
                alt="Psicóloga Letícia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}