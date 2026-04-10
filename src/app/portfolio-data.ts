export interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
  thumbnail: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export const portfolioName = 'Sampurna Shrestha';
export const portfolioTitle = 'Java Developer | Backend Engineer | API Specialist';
export const portfolioIntro = 'I build secure Java backends, design clean REST APIs, and connect complex systems across government, payment, and integration-heavy platforms.';
export const profilePhoto = 'assets/profile-placeholder.svg';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/', exact: true },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' }
];

export const homeStats = [
  { value: 'Public Sector', label: 'Government systems' },
  { value: 'Payments', label: 'Platform integrations' },
  { value: 'APIs', label: 'Integration-first mindset' }
];


export const aboutHighlights = [
  'Delivered backend work for public-sector systems with a focus on correctness, stability, and maintainability.',
  'Worked on payment-system flows and other mission-critical integration points.',
  'Strong on Java, Spring Boot, SQL, clean API design, and dependable service delivery.'
];

export const skillGroups: SkillGroup[] = [
  {
    name: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices']
  },
  {
    name: 'Data & Messaging',
    items: ['SQL / MySQL', 'Kafka', 'ActiveMQ', 'Integration flows']
  },
  {
    name: 'Delivery',
    items: ['Git', 'CI / CD', 'Testing', 'Troubleshooting']
  },
  {
    name: 'Quality',
    items: ['Logging', 'Debugging', 'Monitoring', 'Performance tuning']
  }
];

export const projects: ProjectItem[] = [
  {
    title: 'Payment API Platform',
    category: 'Fintech',
    description: 'Built and supported payment-facing backend flows with a focus on reliability, secure transaction handling, and predictable integration contracts.',
    impact: 'Improved consistency across payment operations and downstream integrations.',
    tech: ['Java', 'Spring Boot', 'REST', 'SQL'],
    thumbnail: 'assets/project-payment.svg'
  },
  {
    title: 'Public Service Systems',
    category: 'Public sector',
    description: 'Contributed to backend systems used in public workflows, prioritizing auditability, maintainability, and dependable service behavior.',
    impact: 'Supported stable services for critical public-sector workflows.',
    tech: ['Java', 'APIs', 'SQL', 'Business rules'],
    thumbnail: 'assets/project-operations.svg'
  },
  {
    title: 'Integration Gateway',
    category: 'Integration',
    description: 'Integrated external systems and exchange points to keep data flowing between services with predictable handshakes and resilient error handling.',
    impact: 'Enabled smoother cross-system data exchange between platforms.',
    tech: ['REST APIs', 'Kafka', 'ActiveMQ', 'Validation'],
    thumbnail: 'assets/project-gateway.svg'
  }
];

export const experience = {
  role: 'Java Developer',
  company: 'Backend Systems Team',
  period: 'Backend systems, integrations, and production support',
  bullets: [
    'Delivered backend features for production systems with attention to correctness and maintainability.',
    'Worked on integration-heavy flows and coordinated with cross-system teams to keep services reliable.',
    'Supported SQL-backed services, issue analysis, and clean API contracts for downstream consumers.'
  ]
};

export const contacts: ContactItem[] = [
  {
    label: 'Email',
    value: 'sampurna.shrestha@example.com',
    href: 'mailto:sampurna.shrestha@example.com'
  },
  {
    label: 'GitHub',
    value: 'github.com/sampurna-shrestha',
    href: 'https://github.com/sampurna-shrestha'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sampurna-shrestha',
    href: 'https://www.linkedin.com/in/sampurna-shrestha/'
  }
];

