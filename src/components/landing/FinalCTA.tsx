import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-5 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="w-6xl mx-auto rounded-3xl py-4 px-8 bg-accent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Card background */}
          <div className="absolute inset-0 gradient-bg opacity-95" />
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Comece gratuitamente
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para transformar
              <br />
              seu negócio?
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Junte-se a milhares de profissionais que já simplificaram sua gestão. 
              Experimente grátis por 14 dias, sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary cursor-pointer hover:bg-primary-foreground/90 shadow-lg w-full sm:w-auto"
              >
                Criar conta gratuita
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Sem cartão de crédito necessário
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 border border-primary-foreground/20 rounded-full opacity-50" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
