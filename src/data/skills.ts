import { SkillCategory } from '@/types/index';

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      'TensorFlow, PyTorch',
      'LangChain, LangGraph',
      'MetaGPT, CrewAI, AutoGen',
      'RAG, LoRA/QLoRA',
      'Hugging Face, Ollama'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    skills: [
      'AWS SageMaker, Bedrock',
      'Azure OpenAI, Synapse',
      'Lambda, ECS, AKS',
      'DynamoDB, Event Hubs'
    ]
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    skills: [
      'PostgreSQL, MongoDB',
      'Spark, Databricks, Kafka',
      'Elasticsearch, Neo4j',
      'React, D3.js, Tableau'
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      'Python, Java, Scala',
      'TypeScript, C',
      'PySpark, Apache Beam',
      'FastAPI, .NET Core'
    ]
  }
];
