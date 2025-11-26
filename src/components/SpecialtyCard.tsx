import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface SpecialtyCardProps {
  title: string;
  description: string;
  image: string;
}

export function SpecialtyCard({ title, description, image }: SpecialtyCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative"
      whileHover={{ y: -8 }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-purple-500/0 group-hover:from-teal-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none z-10" />

      <div className="aspect-[4/3] overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8 relative z-20">
        <h3 className="text-teal-700 mb-4 group-hover:text-teal-800 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Decorative line */}
        <motion.div
          className="h-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}