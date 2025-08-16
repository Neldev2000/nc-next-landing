// Keyword Strategy for NextCore - Comprehensive SEO Coverage

export interface KeywordGroup {
  category: string;
  keywords: string[];
  searchVolume: 'high' | 'medium' | 'low';
  difficulty: 'easy' | 'medium' | 'hard';
  intent: 'informational' | 'transactional' | 'navigational';
}

export const keywordStrategy: KeywordGroup[] = [
  // 1. Brand Protection & Disambiguation
  {
    category: 'Brand Protection',
    keywords: [
      'NextCore ISP',
      'NextCore software ISP',
      'NextCore proveedores internet',
      'NextCore no IA',
      'NextCore no cloud',
      'NextCore especialistas ISP',
      'NextCore vs otras empresas',
      'NextCore diferencia IA',
    ],
    searchVolume: 'medium',
    difficulty: 'easy',
    intent: 'navigational'
  },

  // 2. Primary ISP Keywords (High Volume)
  {
    category: 'Primary ISP Keywords',
    keywords: [
      'software para ISPs',
      'software proveedores internet',
      'plataforma gestión ISP',
      'gestión FTTH',
      'software gestión clientes ISP',
      'sistema tickets ISP',
      'gestión almacenes ISP',
    ],
    searchVolume: 'high',
    difficulty: 'hard',
    intent: 'transactional'
  },

  // 3. FTTH Specific Keywords
  {
    category: 'FTTH Keywords',
    keywords: [
      'gestión clientes FTTH',
      'software FTTH ISP',
      'plataforma FTTH',
      'gestión redes fibra óptica',
      'software instalación FTTH',
      'gestión contratos FTTH',
      'sistema FTTH',
      'integración OZMap FTTH',
    ],
    searchVolume: 'medium',
    difficulty: 'medium',
    intent: 'transactional'
  },

  // 4. Technical Integration Keywords
  {
    category: 'Technical Integrations',
    keywords: [
      'integración OZMap ISP',
      'SmartOLT gestión OLTs',
      'FreeRadius ISP',
      'software integración OZMap',
      'gestión OLTs SmartOLT',
      'autenticación FreeRadius ISP',
      'mapeo red OZMap',
      'integración SmartOLT NextCore',
    ],
    searchVolume: 'low',
    difficulty: 'easy',
    intent: 'informational'
  },

  // 5. Problem-Solution Keywords
  {
    category: 'Problem-Solution',
    keywords: [
      'cómo gestionar ISP',
      'problemas gestión ISP',
      'centralizar gestión ISP',
      'automatizar ISP',
      'optimizar operaciones ISP',
      'mejorar eficiencia ISP',
      'reducir costos ISP',
      'escalar ISP',
    ],
    searchVolume: 'medium',
    difficulty: 'medium',
    intent: 'informational'
  },

  // 6. Long-tail Specific Keywords
  {
    category: 'Long-tail Specific',
    keywords: [
      'software para gestionar clientes FTTH desde captación hasta instalación',
      'plataforma integral para proveedores de servicios de internet',
      'cómo centralizar la gestión de proyectos en un ISP',
      'sistema de tickets de soporte técnico para ISPs',
      'gestión de inventario y almacenes para proveedores de internet',
      'integración OZMap SmartOLT FreeRadius para ISPs',
      'software especializado para ISPs no genérico',
      'plataforma gestión ISP con experiencia operativa',
    ],
    searchVolume: 'low',
    difficulty: 'easy',
    intent: 'transactional'
  },

  // 7. Comparison Keywords
  {
    category: 'Comparison Keywords',
    keywords: [
      'NextCore vs competidores ISP',
      'mejor software ISP',
      'comparación software ISP',
      'alternativas software ISP',
      'NextCore vs otras plataformas',
      'software ISP recomendado',
      'reviews software ISP',
      'opiniones NextCore ISP',
    ],
    searchVolume: 'medium',
    difficulty: 'medium',
    intent: 'informational'
  },

  // 8. Industry-Specific Keywords
  {
    category: 'Industry Specific',
    keywords: [
      'software telecomunicaciones',
      'gestión proveedores servicios',
      'plataforma telecomunicaciones',
      'software sector telecom',
      'gestión operativa telecomunicaciones',
      'sistema telecomunicaciones',
      'software industria telecom',
      'plataforma gestión telecom',
    ],
    searchVolume: 'medium',
    difficulty: 'hard',
    intent: 'transactional'
  }
];

// Content Mapping Strategy
export const contentMapping = {
  homepage: [
    'software para ISPs',
    'plataforma gestión ISP',
    'NextCore ISP',
    'software proveedores internet'
  ],
  features: [
    'gestión FTTH',
    'gestión clientes ISP',
    'sistema tickets ISP',
    'gestión almacenes ISP'
  ],
  resources: [
    'how to manage ISP',
    'OZMap integration',
    'SmartOLT OLT management',
    'ISP management problems'
  ],
  'nextcore-isp': [
    'NextCore no IA',
    'NextCore especialistas ISP',
    'NextCore vs otras empresas',
    'software especializado ISP'
  ]
};

// SEO Content Calendar
export const contentCalendar = [
  {
    month: 'Mes 1',
    content: [
      'Guía: Ciclo de vida del cliente FTTH',
      'Artículo: Por qué los ISPs necesitan software especializado',
      'Tutorial: Integración OZMap + NextCore',
      'Caso de uso: Optimización de operaciones ISP'
    ]
  },
  {
    month: 'Mes 2',
    content: [
      'Artículo: 5 errores comunes al elegir software para ISPs',
      'Guía: Gestión avanzada de OLTs con SmartOLT',
      'Tutorial: Automatización con FreeRadius',
      'Comparativa: NextCore vs competidores'
    ]
  },
  {
    month: 'Mes 3',
    content: [
      'Artículo: Cómo escalar tu ISP con NextCore',
      'Guía: Reducción de costos operativos',
      'Tutorial: Reportes y analytics para ISPs',
      'Caso de éxito: ISP que creció 300%'
    ]
  }
];

// Local SEO Strategy
export const localSEOKeywords = [
  'software ISP [país]',
  'gestión FTTH [país]',
  'proveedores internet [país]',
  'software telecomunicaciones [país]',
  'NextCore [país]',
  'plataforma ISP [país]'
];

// Voice Search Optimization
export const voiceSearchKeywords = [
  'cuál es el mejor software para ISPs',
  'cómo gestionar un proveedor de internet',
  'qué software necesito para mi ISP',
  'cómo optimizar operaciones de ISP',
  'mejor plataforma para gestión FTTH',
  'software recomendado para proveedores de internet'
];
