import { SkillCategory } from '@/types/index';

export const skillCategories: SkillCategory[] = [
  {
    id: 'agentic',
    title: 'Agentic & GenAI',
    skills: [
      'LangChain, LangGraph',
      'Microsoft Agent Framework, Copilot Studio',
      'Claude, Azure OpenAI, AWS Bedrock',
      'RAG, GraphRAG, Ollama'
    ]
  },
  {
    id: 'ml',
    title: 'ML & Fine-Tuning',
    skills: [
      'PyTorch, TensorFlow, Hugging Face',
      'LoRA / QLoRA, SLMs, ESM-2',
      'Model monitoring, drift detection',
      'Bias mitigation'
    ]
  },
  {
    id: 'testing',
    title: 'Test Automation',
    skills: [
      'Playwright, agentic crawlers',
      'Page Object Model',
      'GitHub Actions, CI/CD',
      'Grafana'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud',
    skills: [
      'AWS SageMaker, Bedrock, Lambda',
      'AWS Batch, ECS, DynamoDB',
      'Azure OpenAI, Synapse',
      'Azure AKS, Event Hubs'
    ]
  },
  {
    id: 'data',
    title: 'Data',
    skills: [
      'PostgreSQL, SQL Server, MongoDB',
      'Databricks, Spark, Kafka',
      'Elasticsearch, Neo4j, Redis',
      'DuckDB, HL7'
    ]
  },
  {
    id: 'languages',
    title: 'Languages & Viz',
    skills: [
      'Python, R, TypeScript',
      'Java, Scala, C#',
      'D3.js, React, Angular',
      'Tableau, Power BI, Plotly'
    ]
  }
];
