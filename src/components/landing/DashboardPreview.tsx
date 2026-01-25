import { motion } from "framer-motion";
import { Check, TrendingUp, Users, Calendar, Bell } from "lucide-react";
import dashboardImage from "../../assets/dashboard.png";

const features = [
  "Dashboard intuitivo e personalizável",
  "Gestão completa de clientes",
  "Agendamento automatizado",
  "Relatórios e métricas em tempo real",
  "Notificações e lembretes",
  "Integração com calendário",
];

const stats = [
  { icon: Users, value: "2.5k+", label: "Usuários ativos" },
  { icon: Calendar, value: "50k+", label: "Agendamentos/mês" },
  { icon: TrendingUp, value: "98%", label: "Satisfação" },
];

export function DashboardPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container-narrow ml-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Preview do Sistema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Um dashboard que você vai{" "}
              <span className="text-accent">amar usar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interface moderna e intuitiva que coloca todas as informações 
              importantes na ponta dos seus dedos. Visualize, gerencie e 
              tome decisões com confiança.
            </p>

          
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

          
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mr-10 border border-border/50">
              <img
                src={dashboardImage}
                alt="FlowManage Dashboard Preview"
                className="w-full h-auto"
              />
            </div>

         
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 lg:-left-8"
            >
              <div className="bg-accent-foreground rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bell size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Novo agendamento</p>
                  <p className="text-xs text-muted-foreground">Maria - 14:00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
