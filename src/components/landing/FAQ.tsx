import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    question: "O FlowManage é gratuito?",
    answer: "Sim! Oferecemos um plano gratuito com recursos essenciais para você começar. Você pode fazer upgrade para planos pagos quando precisar de mais funcionalidades.",
  },
  {
    question: "Preciso instalar algum software?",
    answer: "Não, o FlowManage é 100% online. Você acessa pelo navegador em qualquer dispositivo - computador, tablet ou celular - sem precisar instalar nada.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente! Utilizamos criptografia de ponta a ponta e servidores seguros para garantir que seus dados e dos seus clientes estejam sempre protegidos.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, você tem total liberdade. Não há contratos de fidelidade e você pode cancelar ou fazer downgrade do seu plano quando quiser.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte via chat e email em horário comercial. Planos pagos têm acesso a suporte prioritário com tempo de resposta reduzido.",
  },
  {
    question: "Posso importar dados de outro sistema?",
    answer: "Sim! Temos ferramentas de importação que permitem migrar seus dados de planilhas Excel, Google Sheets ou outros sistemas de gestão de forma simples.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o FlowManage
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-accent-foreground shadow-lg shadow-gray-400/30 border-none px-6 rounded-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
