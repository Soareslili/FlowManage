import { motion } from "framer-motion";
import { Calendar, Clock, Database, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Organização total",
    description: "Mantenha todos os seus compromissos e tarefas em um só lugar, com visualização clara e intuitiva.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Clock,
    title: "Economia de tempo",
    description: "Automatize tarefas repetitivas e reduza o tempo gasto com processos manuais em até 70%.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Database,
    title: "Dados centralizados",
    description: "Acesse informações de clientes, histórico e métricas importantes a qualquer momento.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "Interface intuitiva",
    description: "Design moderno e fácil de usar. Sem curva de aprendizado, comece a usar em minutos.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-secondary/30">
      <div className="container-narrow">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para crescer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas poderosas pensadas para simplificar a gestão do seu negócio
            e impulsionar seus resultados.
          </p>
        </motion.div>

     
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {benefits.map((benefit, index) => (
              <motion.div
            key={index}
            variants={itemVariants}
            className="group"
              >
            <div className="h-full bg-[#f1efef] rounded-2xl p-8 hover-lift">
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
