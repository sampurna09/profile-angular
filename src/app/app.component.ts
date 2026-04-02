import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly name = 'Sampurna Shrestha';
  readonly title = 'Java Developer | Backend Engineer | API Specialist';
  readonly intro = 'I build secure, scalable Java backends, design clean REST APIs, and connect complex systems across government and payment platforms.';

  readonly stats = [
    { value: 'FCGO', label: 'Government systems' },
    { value: 'Fonepay', label: 'Payment platform experience' },
    { value: 'APIs', label: 'Integration-first mindset' }
  ];

  readonly aboutPoints = [
    'Experience delivering backend work for government systems at FCGO.',
    'Hands-on payment system experience with Fonepay and mission-critical integrations.',
    'Focused on Java, Spring Boot, SQL, and dependable API design.'
  ];

  readonly skills = [
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
    }
  ];

  readonly projects = [
    {
      title: 'Payment API (Fonepay)',
      category: 'Fintech',
      description: 'Built and supported payment-facing backend flows with a focus on reliability, secure transaction handling, and clear integration contracts.',
      impact: 'Improved integration consistency for payment operations.',
      tech: ['Java', 'Spring Boot', 'REST', 'SQL']
    },
    {
      title: 'Government Systems (FCGO)',
      category: 'Public sector',
      description: 'Contributed to backend systems used in government workflows, prioritizing auditability, maintainability, and dependable service behavior.',
      impact: 'Supported stable services for critical workflows.',
      tech: ['Java', 'APIs', 'SQL', 'Business rules']
    },
    {
      title: 'API Integrations (EPF, CIT, SSF)',
      category: 'Integration',
      description: 'Integrated external systems and exchange points to keep data flowing between institutions with predictable handshakes and error handling.',
      impact: 'Enabled smoother cross-system data exchange.',
      tech: ['REST APIs', 'Kafka', 'ActiveMQ', 'Validation']
    }
  ];

  readonly experience = {
    role: 'Java Developer',
    company: 'FCGO',
    period: 'Backend systems, integrations, and service support',
    bullets: [
      'Delivered backend features for government-facing systems with attention to correctness and maintainability.',
      'Worked on integration-heavy flows and coordinated with cross-system teams to keep services reliable.',
      'Supported SQL-backed services, issue analysis, and clean API contracts for downstream consumers.'
    ]
  };

  readonly contacts = [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      label: 'GitHub',
      value: 'github.com/your-github',
      href: 'https://github.com/your-github'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-linkedin',
      href: 'https://www.linkedin.com/in/your-linkedin/'
    }
  ];
}
