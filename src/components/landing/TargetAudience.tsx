import { motion } from "framer-motion";
import { Stethoscope, Scissors, Building2, Briefcase, Store } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Clínicas",
    description: "Gerencie pacientes, consultas e prontuários com facilidade.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
  },
  {
    icon: Scissors,
    title: "Salões de Beleza",
    description: "Organize agendamentos, clientes e serviços em um só lugar.",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-600",
  },
  {
    icon: Building2,
    title: "Consultórios",
    description: "Simplifique a gestão do seu consultório com ferramentas intuitivas.",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
  },
  {
    icon: Briefcase,
    title: "Profissionais Autônomos",
    description: "Tenha controle total sobre seus clientes e agenda.",
    gradient: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-600",
  },
  {
    icon: Store,
    title: "Pequenas Empresas",
    description: "Escale seu negócio com processos organizados e eficientes.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-600",
  },
];

export function TargetAudience() {
  return (
    <section id="para-quem" className="py-20 bg-background">
      <div className="container-narrow">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Para quem é
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Feito para o seu tipo de negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Independente do seu segmento, o FlowManage se adapta às suas 
            necessidades específicas.
          </p>
        </motion.div>



        <div className=" w-6xl ml-auto mr-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${audience.gradient} border border-border/30 hover-lift shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon size={24} className={audience.iconColor} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
