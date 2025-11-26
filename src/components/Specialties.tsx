import { SpecialtyCard } from "./SpecialtyCard";
import { motion } from "motion/react";

const specialties = [
  {
    id: 1,
    title: "Autoconhecimento",
    description: "Explore seus pensamentos, emoções e comportamentos com suporte profissional, promovendo maior compreensão de si mesmo e equilíbrio na sua vida.",
    image: "https://images.unsplash.com/photo-1758274530259-9a3b144acc9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwcmVmbGVjdGlvbiUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzY0MTE4MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Dificuldade nos relacionamentos",
    description: "Entenda as causas dos conflitos, melhore a comunicação e desenvolva conexões mais saudáveis com apoio psicológico especializado.",
    image: "https://images.unsplash.com/photo-1758524945869-24a53c8cbc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByZWxhdGlvbnNoaXAlMjBzdXBwb3J0fGVufDF8fHx8MTc2NDExODE5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Ansiedade e Depressão",
    description: "Encontre acolhimento e estratégias eficazes para lidar com emoções difíceis, recuperar sua saúde mental e viver com mais equilíbrio e bem-estar.",
    image: "https://images.unsplash.com/photo-1621887348744-6b0444f8a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjQwODU5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Traumas Emocionais",
    description: "Superar traumas é possível. Descubra caminhos para restaurar sua confiança, reescrever sua história e viver com mais leveza e plenitude.",
    image: "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsaW5nJTIwZW1vdGlvbmFsJTIwc3VwcG9ydHxlbnwxfHx8fDE3NjQxMTgxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Autoestima e Confiança",
    description: "Fortaleça sua autoestima e confiança para enfrentar desafios, valorizar suas conquistas e se conectar com seu verdadeiro potencial.",
    image: "https://images.unsplash.com/photo-1507248853396-d0022bede9c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbmNlJTIwZW1wb3dlcm1lbnR8ZW58MXx8fHwxNzY0MTE4MTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Bem-estar emocional na terceira idade",
    description: "Promova saúde mental e qualidade de vida, valorizando vínculos afetivos, autonomia e momentos de alegria nesta fase especial da vida.",
    image: "https://images.unsplash.com/photo-1758686253692-2d6921de12dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwaGFwcGluZXNzJTIwc2VuaW9yfGVufDF8fHx8MTc2NDExODE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Specialties() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-teal-600 uppercase tracking-wider text-sm">Nossas Áreas de Atuação</span>
          </motion.div>
          <h2 className="text-teal-700 mb-6">Principais Especialidades</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos suporte especializado em diversas áreas da saúde mental e emocional
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpecialtyCard {...specialty} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}