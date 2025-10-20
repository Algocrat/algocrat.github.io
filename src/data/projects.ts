import { Project } from '@/types/index';

export const projects: Project[] = [
  {
    id: 'mimic-qa',
    title: 'MIMIC-IV Clinical Q&A System',
    tags: ['Healthcare AI', 'LLM', 'FastAPI'],
    description: 'Built a natural language question-answering system over the MIMIC-IV clinical database using FastAPI, PostgreSQL, and large language models. Enables clinicians to query complex medical data using plain English.',
    metrics: [
      { value: '70%', label: 'Faster Queries' },
      { value: '$2M', label: 'Annual Savings' }
    ]
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent AI Orchestration',
    tags: ['Multi-Agent', 'LangGraph', 'CrewAI'],
    description: 'Benchmarked and implemented MetaGPT, CrewAI, LangGraph, and Ollama for enterprise workflow automation. Designed agent orchestration frameworks for task decomposition and collaborative problem-solving.',
    metrics: [
      { value: '1000+', label: 'Hours Saved' },
      { value: '40%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'slm-architecture',
    title: 'SLM-First Architecture',
    tags: ['Small Language Models', 'LoRA', 'Fine-tuning'],
    description: 'Designed and deployed small language model architectures (under 10B parameters) with LoRA/QLoRA fine-tuning for domain-specific tasks. Optimized for cost, latency, and regulatory compliance.',
    metrics: [
      { value: '60%', label: 'Lower Latency' },
      { value: '45%', label: 'Better Throughput' }
    ]
  },
  {
    id: 'healthcare-pipelines',
    title: 'Real-Time Healthcare Pipelines',
    tags: ['Event-Driven', 'HL7', 'Clinical Data'],
    description: 'Built event-driven data pipelines for HL7 messages and mortality data enabling clinical decision support. Applied CQRS/Event Sourcing patterns to survey workflows for real-time analytics.',
    metrics: [
      { value: 'Real-time', label: 'Data Processing' },
      { value: 'HIPAA', label: 'Compliant' }
    ]
  },
  {
    id: 'mlops-governance',
    title: 'MLOps Governance Platform',
    tags: ['MLOps', 'Monitoring', 'Compliance'],
    description: 'Deployed ML monitoring and governance processes including bias mitigation, model drift alerts, and explainability dashboards. Ensured compliance with HIPAA, GDPR, and CCPA regulations.',
    metrics: [
      { value: '24/7', label: 'Monitoring' },
      { value: '100%', label: 'Compliance' }
    ]
  },
  {
    id: 'cloud-microservices',
    title: 'Cloud-Native Microservices',
    tags: ['Azure', 'Microservices', '.NET Core'],
    description: 'Architected Micronaut-based API services for Azure API Management automation. Developed containerized microservices in .NET Core with event-driven patterns for scalability and resilience.',
    metrics: [
      { value: 'Auto', label: 'Scaling' },
      { value: '99.9%', label: 'Uptime' }
    ]
  }
];
