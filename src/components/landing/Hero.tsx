import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import dashboardImage from "../../assets/dashboard.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 -z-10" />
      
    
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container-narrow">
        <div className="text-center max-w-4xl mx-auto">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Novo: Integração com calendário
            </span>
          </motion.div>

      
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Gerencie seu negócio de forma{" "}
            <span className="gradient-text">simples, rápida e inteligente</span>
          </motion.h1>

       
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Centralize clientes, agendamentos e dados do seu negócio em um único 
            dashboard intuitivo. Simplifique sua rotina e foque no que realmente importa.
          </motion.p>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button className="bg-primary cursor-pointer transition">
              Começar gratuitamente
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full cursor-pointer sm:w-auto">
              <Play className="mr-2" size={20} />
              Ver demonstração
            </Button>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <img
                src={dashboardImage}
                alt="FlowManage Dashboard"
                className="w-full h-auto"
              />
             
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            
          
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 hidden lg:block"
            >
              <div className="bg-accent-foreground rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-primary-foreground text-lg">📈</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">+32%</p>
                    <p className="text-xs text-muted-foreground">Produtividade</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 hidden lg:block"
            >
              <div className="bg-accent-foreground rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">2h/dia</p>
                    <p className="text-xs text-muted-foreground">Tempo economizado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Confiado por mais de 2.000 pequenos negócios
            </p>
            <div className="flex items-center gap-6 opacity-50">
              <div className="text-2xl font-bold text-muted-foreground">⭐ 4.9</div>
              <div className="h-8 w-px bg-border" />
              <div className="text-sm text-muted-foreground">+500 avaliações</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}