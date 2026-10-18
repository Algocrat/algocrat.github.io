import { Project } from '@/types/index';

export const projects: Project[] = [
  {
    id: 'awardlens',
    title: 'AwardLens AI: Federal Procurement Intelligence',
    context: 'Independent project · Algocrat Labs',
    tags: ['Procurement Intelligence', 'Fine-Tuned SLMs', 'Claude'],
    description: 'Building a platform that helps contractors find and track federal opportunities.',
    highlights: [
      'A two-tier router sends narrow and SQL-style questions to fine-tuned small models and broader reasoning to Claude.',
      'Runs almost entirely on free cloud tiers (Cloudflare and Oracle Always Free) to keep hosting costs near zero.'
    ],
    links: [{ label: 'Live dashboard', url: 'https://awards-dashboard.pages.dev/' }]
  },
  {
    id: 'dragon-farm',
    title: 'Dragon Farm: Drag-and-Drop SLM Fine-Tuning for R',
    context: 'Independent project · Algocrat Labs',
    tags: ['R Package', 'LoRA / QLoRA', 'SLMs'],
    description: 'Built an R package that lets RStudio users fine-tune small language models (LoRA/QLoRA) through an agentic, drag-and-drop pipeline, similar to what Azure AI Foundry offers.',
    highlights: [
      'Gives R analysts and statisticians a way to customize models without learning Python or MLOps.'
    ],
    links: [{ label: 'dragonfarm.dev', url: 'https://dragonfarm.dev/' }]
  },
  {
    id: 'deviz-informance',
    title: 'DeViz and Informance.ai: Agentic Data Storytelling',
    context: 'Independent project · Algocrat Labs',
    tags: ['Agentic Pipeline', 'D3.js', 'Data Storytelling'],
    description: "Built an agentic pipeline that reads long documents like SEC 10-K filings, pulls the numbers into JSON and turns them into interactive D3.js data stories. Completed a full story for Costco's 2024 10-K.",
    highlights: [
      'Informance.ai packages the same idea for investor relations teams at mid-cap public companies, built on Astro and Cloudflare Pages.'
    ],
    links: [
      { label: 'deviz.io', url: 'https://deviz.io/' },
      { label: 'informance.ai', url: 'https://informance.ai/' }
    ]
  },
  {
    id: 'starlims-crawler',
    title: 'Agentic STARLIMS Test Crawler',
    context: 'CDC · Booz Allen Hamilton',
    tags: ['Agentic Testing', 'Playwright', 'STARLIMS'],
    description: 'Built an AI crawler that tests a STARLIMS (ExtJS) lab system starting from just an entry point and a JSON workflow payload. No hand-written scripts or test cases needed.',
    highlights: [
      "Gave the agent workflow data, the app's HTML and workflow definitions so it knows what to test. It runs on Playwright and captures several locators per element, since ExtJS pages change their DOM a lot.",
      'Moved the team from writing tests by hand to agentic testing, one piece at a time. Now extending it so tests can be written straight from specs using Microsoft Agent Framework.'
    ],
    links: []
  },
  {
    id: 'mimic-qa',
    title: 'MIMIC-IV Clinical Q&A System',
    context: 'Booz Allen Hamilton',
    tags: ['Healthcare AI', 'LLM', 'FastAPI'],
    description: 'Built a natural language question-answering system over the MIMIC-IV clinical database using FastAPI, PostgreSQL, and large language models. Enables clinicians to query complex medical data using plain English.',
    highlights: [],
    links: [],
    metrics: [
      { value: '70%', label: 'Faster Queries' },
      { value: '$2M', label: 'Annual Savings' }
    ]
  },
  {
    id: 'healthcare-pipelines',
    title: 'Real-Time Health Data Pipelines',
    context: 'Booz Allen Hamilton',
    tags: ['Event-Driven', 'HL7', 'Clinical Data'],
    description: 'Built event-driven data pipelines for HL7 messages and mortality data enabling clinical decision support. Applied CQRS/Event Sourcing patterns to survey workflows for real-time analytics.',
    highlights: [],
    links: [],
    metrics: [
      { value: 'Real-time', label: 'Data Processing' },
      { value: 'HIPAA', label: 'Compliant' }
    ]
  }
];
