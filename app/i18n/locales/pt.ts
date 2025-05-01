import type { Dictionary } from './en';

export const dictionary: Dictionary = {
  header: {
    nav: {
      home: 'Início',
      features: 'Recursos',
      pricing: 'Preços',
      login: 'Entrar',
      contact: 'Contato',
    }
  },
  hero: {
    title: 'Simplifique sua gestão de ISP e aumente seu desempenho com NextCore',
    subtitle: 'Otimize suas operações, melhore a satisfação do cliente e aumente seus lucros com nossa solução completa para ISPs',
    cta: 'Começar',
  },
  features: {
    title: 'Tudo que você precisa em uma plataforma',
    subtitle: 'Recursos',
    items: [
      {
        title: 'Projetos',
        description: 'Centralizamos toda a documentação dos seus projetos e automatizamos relatórios operacionais e financeiros.'
      },
      {
        title: 'Aluguel de Infraestrutura',
        description: 'Gerencie e monetize sua infraestrutura de aluguel para outros ISPs com faturamento automatizado e monitoramento em tempo real.'
      },
      {
        title: 'Vendas e Instalação',
        description: 'Minimize o atrito entre vendas e instalação. Acelere a ativação do serviço.'
      },
      {
        title: 'Armazém',
        description: 'Gerencie de forma abrangente o inventário da sua organização conectado aos seus projetos e instalações.'
      }
    ]
  },
  pricing: {
    title: 'Escolha o plano que atende às suas necessidades',
    subtitle: 'Planos',
    plans: [
      {
        name: 'Básico',
        price: 'R$1365/mês',
        button: 'Escolher Básico'
      },
      {
        name: 'Padrão',
        price: 'R$1755/mês',
        button: 'Escolher Padrão'
      },
      {
        name: 'Premium',
        price: 'R$1755/mês + taxas',
        button: 'Escolher Premium'
      }
    ],
    features: {
      title: 'Recursos',
      items: ['Módulo de Projetos', 'Módulo de Armazém', 'Projetos', 'Suporte por Email', 'Módulo de Vendas e Instalação', 'Contratos Ativos', 'Suporte Prioritário', 'Módulo de Simulação e Monitoramento', 'Módulo de Faturamento Automatizado', 'Acesso à API', 'Ilimitado'],
      notAvailable: 'Não Disponível',
      unlimited: 'Ilimitado'
    }
  },
  services: {
    title: 'Nossos Serviços',
    subtitle: 'Serviços',
    items: [
      {
        title: 'Serviços',
        description: 'Oferecemos uma ampla gama de soluções para suas necessidades'
      }
    ]
  },
  about: {
    title: 'Sobre Nós',
    subtitle: 'Sobre Nós',
    content: 'Saiba mais sobre nossa empresa e missão'
  },
  contact: {
    title: 'Conecte-se conosco',
    subtitle: 'Estamos aqui para ajudar',
    form: {
      firstName: 'Nome',
      lastName: 'Sobrenome',
      email: 'E-mail',
      company: 'Nome da Empresa',
      phone: 'Telefone',
      message: 'Deixe sua mensagem',
      submit: 'Enviar'
    }
  },
  footer: {
    navigation: {
      company: {
        title: "Empresa",
        links: {
          aboutUs: "Sobre Nós",
          careers: "Carreiras",
          press: "Imprensa",
        },
      },
      support: {
        title: "Suporte",
        links: {
          helpCenter: "Central de Ajuda",
          contactSupport: "Contatar Suporte",
          faq: "Perguntas Frequentes",
        },
      },
      legal: {
        title: "Legal",
        links: {
          privacyPolicy: "Política de Privacidade",
          termsOfService: "Termos de Serviço",
        },
      },
      connect: {
        title: "Conectar",
        links: {
          linkedin: "LinkedIn",
          twitter: "Twitter",
        },
      },
    },
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },
  },
}; 