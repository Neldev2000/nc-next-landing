export interface Dictionary {
  header: {
    nav: {
      home: string;
      features: string;
      pricing: string;
      login: string;
      contact: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      button: string;
    }[];
    features: {
      title: string;
      items: string[];
      notAvailable: string;
    unlimited: string;
    };
    
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    navigation: {
      company: {
        title: string;
        links: {
          aboutUs: string;
          careers: string;
          press: string;
        };
      };
      support: {
        title: string;
        links: {
          helpCenter: string;
          contactSupport: string;
          faq: string;
        };
      };
      legal: {
        title: string;
        links: {
          privacyPolicy: string;
          termsOfService: string;
        };
      };
      connect: {
        title: string;
        links: {
          linkedin: string;
          twitter: string;
        };
      };
    };
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
  };
}

export const en: Dictionary = {
  header: {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      login: 'Login',
      contact: 'Contact',
    }
  },
  hero: {
    title: 'Simplify your ISP management and boost your performance with NextCore',
    subtitle: 'Optimize your operations, improve customer satisfaction and increase your revenue with our comprehensive ISP solution',
    cta: 'Get Started',
  },
  features: {
    title: 'Everything you need in one platform',
    subtitle: 'Features',
    items: [
      {
        title: 'Projects',
        description: 'We centralize all your project documentation and automate operational and financial reports.'
      },
      {
        title: 'Infrastructure Rental',
        description: 'Manage and monetize your infrastructure rental to other ISPs with automated billing and real-time monitoring.'
      },
      {
        title: 'Sales & Installation',
        description: 'Minimize friction between sales and installation. Speed up service activation.'
      },
      {
        title: 'Warehouse',
        description: 'Comprehensively manage your organization\'s inventory connected to your projects and installations.'
      }
    ]
  },
  pricing: {
    title: 'Choose the plan that fits your needs',
    subtitle: 'Plans',
    plans: [
      {
        name: 'Basic',
        price: '$1365/month',
        button: 'Choose Basic'
      },
      {
        name: 'Standard',
        price: '$1612/month',
        button: 'Choose Standard'
      },
      {
        name: 'Premium',
        price: '$1755/month + fees',
        button: 'Choose Premium'
      }
    ],
    features: {
      title: 'Features',
      items: ['Projects Module', 'Warehouse Module', 'Projects', 'Email Support', 'Sales & Installation Module', 'Active Contracts', 'Priority Support', 'Simulation & Monitoring Module', 'Automated Billing Module', 'API Access', 'Unlimited'],
      notAvailable: 'Not Available',
      unlimited: 'Unlimited',
    },
  },
  services: {
    title: 'Our Services',
    subtitle: 'Services',
    items: [
      {
        title: 'Services',
        description: 'We offer a wide range of solutions for your needs'
      }
    ]
  },
  about: {
    title: 'About Us',
    subtitle: 'About',
    content: 'Learn more about our company and mission'
  },
  contact: {
    title: 'Connect with us',
    subtitle: 'We are here to help you',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      company: 'Company',
      message: 'Leave us your message',
      phone: 'Phone',
      submit: 'Send'
    }
  },
  footer: {
    navigation: {
      company: {
        title: "Company",
        links: {
          aboutUs: "About Us",
          careers: "Careers",
          press: "Press",
        },
      },
      support: {
        title: "Support",
        links: {
          helpCenter: "Help Center",
          contactSupport: "Contact Support",
          faq: "FAQ",
        },
      },
      legal: {
        title: "Legal",
        links: {
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
        },
      },
      connect: {
        title: "Connect",
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