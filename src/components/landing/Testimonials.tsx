import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Marina Santos",
    role: "Dermatologista",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    content: "O FlowManage transformou a gestão da minha clínica. Economizo pelo menos 2 horas por dia que antes gastava com papelada. Agora tenho mais tempo para meus pacientes.",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Dono de Barbearia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Finalmente consigo ver todos os agendamentos da semana de uma vez. Reduzi as faltas em 40% só com os lembretes automáticos. Excelente investimento!",
    rating: 5,
  },
  {
    name: "Ana Paula Ferreira",
    role: "Personal Trainer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Como autônoma, precisava de algo simples e eficiente. O FlowManage é exatamente isso. Meus alunos adoram receber os lembretes e eu adoro ter tudo organizado.",
    rating: 5,
  },
];

const metrics = [
  { value: "32%", label: "Aumento na produtividade" },
  { value: "2h/dia", label: "Tempo economizado" },
  { value: "40%", label: "Redução de faltas" },
  { value: "98%", label: "Taxa de satisfação" },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container-narrow">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de profissionais já transformaram seus negócios com o FlowManage.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className=" text-shadow-primary text-3xl md:text-4xl text-accent font-bold mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </motion.div>

   
        <div className=" w-full px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#e5e5e7] rounded-2xl p-4 hover-lift"
            >
            
              <Quote size={32} className="text-accent mb-4" />

             
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

             
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} className="fill-primary text-primary" />
                ))}
              </div>

             
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
