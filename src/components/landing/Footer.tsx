import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#" },
    { label: "Preços", href: "#" },
    { label: "Integrações", href: "#" },
    { label: "Atualizações", href: "#" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Guias", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "API", href: "#" },
  ],
  empresa: [
    { label: "Sobre", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  legal: [
    { label: "Termos de uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
      
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
       
        <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl">FlowManage</span>
        </div>
        <p className="text-muted-foreground text-sm mb-6 max-w-xs">
          A plataforma de gestão que simplifica o dia a dia do seu negócio.
        </p>
         
        <div className="flex gap-4">
          {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
          >
            <social.icon size={18} />
          </a>
          ))}
        </div>
        </div>

       
        <div className="col-span-1 md:col-span-1">
        <h4 className="font-semibold mb-4">Produto</h4>
        <ul className="space-y-3">
          {footerLinks.produto.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-background transition-colors">
            {link.label}
            </a>
          </li>
          ))}
        </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
        <h4 className="font-semibold mb-4">Recursos</h4>
        <ul className="space-y-3">
          {footerLinks.recursos.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-background transition-colors">
            {link.label}
            </a>
          </li>
          ))}
        </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
        <h4 className="font-semibold mb-4">Empresa</h4>
        <ul className="space-y-3">
          {footerLinks.empresa.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-background transition-colors">
            {link.label}
            </a>
          </li>
          ))}
        </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
        <h4 className="font-semibold mb-4">Legal</h4>
        <ul className="space-y-3">
          {footerLinks.legal.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted-foreground hover:text-background transition-colors">
            {link.label}
            </a>
          </li>
          ))}
        </ul>
        </div>
      </div>

     
      <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
        © 2024 FlowManage. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
         Desenvolvido por Lidiane Soares
        </p>
      </div>
      </div>
    </footer>
  );
}