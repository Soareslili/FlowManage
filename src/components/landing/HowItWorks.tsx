import { motion} from 'framer-motion';
import { UserPlus, Users, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Cadastre-se em menos de 2 minutos. Sem cartão de crédito, sem compromisso.",
  },
  {
    number: "02",
    icon: Users,
    title: "Cadastre clientes e dados",
    description: "Importe sua base existente ou adicione novos clientes facilmente.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Acompanhe tudo no dashboard",
    description: "Visualize métricas, agendamentos e insights em tempo real.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container-narrow">
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples como 1, 2, 3
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece a usar o FlowManage em minutos. Sem configurações complexas,
            sem instalações complicadas.
          </p>
        </motion.div>

      
        <div className="relative">
        
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
               
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                      <step.icon size={32} className="text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 text-primary/30">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}