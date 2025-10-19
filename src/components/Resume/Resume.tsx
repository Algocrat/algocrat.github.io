import { Mail, Phone, MapPin, Briefcase, Award, GraduationCap, Code, Cloud, Database, Zap } from 'lucide-react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div id="resume" className={styles.resumeContainer}>
      <div className={styles.resumeHeader}>
        <h1>Tejas Patel</h1>
        <div className={styles.contactInfo}>
          <span><Mail size={16} /> tejas-patel@hotmail.com</span>
          <span><Phone size={16} /> 404-583-8581</span>
          <span><MapPin size={16} /> Atlanta, GA 30319</span>
        </div>
      </div>

      <section className={styles.section}>
        <h2><Briefcase size={24} className={styles.sectionIcon} /> Professional Summary</h2>
        <p>
          Data and AI Technology Leader with 20+ years of experience architecting multi-agent AI systems,
          enterprise-grade data pipelines, and production-scale ML solutions. Proven track record of scaling
          AI/ML teams from 5 to 25 members and delivering measurable ROI across healthcare, government, and
          enterprise sectors.
        </p>
      </section>

      <section className={styles.section}>
        <h2><Zap size={24} className={styles.sectionIcon} /> Core Competencies</h2>
        <div className={styles.competencies}>
          <div className={styles.competencyColumn}>
            <ul>
              <li>Multi-Agent AI Systems (MetaGPT, CrewAI, LangGraph)</li>
              <li>MLOps & Model Governance</li>
              <li>Cloud Architecture (AWS, Azure)</li>
              <li>Healthcare AI & Clinical Pipelines</li>
            </ul>
          </div>
          <div className={styles.competencyColumn}>
            <ul>
              <li>Team Leadership & Scaling (5→25 members)</li>
              <li>Fine-Tuning & RAG Systems</li>
              <li>Real-Time Event-Driven Architectures</li>
              <li>Executive Partnership & AI Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Briefcase size={24} className={styles.sectionIcon} /> Professional Experience</h2>
        
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Data and AI Technology Leader</h3>
              <h4>Booz Allen Hamilton</h4>
            </div>
            <div className={styles.date}>April 2014 - Present</div>
          </div>
          <ul>
            <li>Scaled AI/ML teams from 5 to 25 members across healthcare and government sectors</li>
            <li>Built MIMIC-IV clinical Q&A system using FastAPI, PostgreSQL, and LLMs (70% faster queries, $2M annual savings)</li>
            <li>Benchmarked and deployed multi-agent frameworks (MetaGPT, CrewAI, LangGraph) for enterprise automation</li>
            <li>Designed SLM-first architectures with LoRA/QLoRA fine-tuning (60% lower latency, 45% better throughput)</li>
            <li>Implemented MLOps governance including bias mitigation, model drift alerts, and explainability dashboards</li>
            <li>Partnered with C-level executives on AI adoption roadmaps and strategic initiatives</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Business Intelligence Architect</h3>
              <h4>MediaBrix</h4>
            </div>
            <div className={styles.date}>August 2012 - April 2014</div>
          </div>
          <ul>
            <li>Modeled ad behavior with Random Forests for predictive targeting</li>
            <li>Built SSRS/SSIS pipelines and distributed OLAP systems (SSAS)</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Business Intelligence Architect</h3>
              <h4>EyeWonder</h4>
            </div>
            <div className={styles.date}>November 2010 - August 2012</div>
          </div>
          <ul>
            <li>Designed multi-star schema warehouses for ad analytics</li>
            <li>Developed fraud detection system using Naive Bayes</li>
            <li>Built near real-time conversion pipelines</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Code size={24} className={styles.sectionIcon} /> Technical Skills</h2>
        <div className={styles.skills}>
          <div>
            <strong><Code size={16} className={styles.inlineIcon} /> AI/ML:</strong> 
            TensorFlow, PyTorch, LangChain, LangGraph, MetaGPT, CrewAI, AutoGen, RAG, LoRA/QLoRA, Hugging Face, Ollama
          </div>
          <div>
            <strong><Cloud size={16} className={styles.inlineIcon} /> Cloud:</strong> 
            AWS SageMaker, Bedrock, Lambda, ECS, Azure OpenAI, Synapse, AKS, DynamoDB, Event Hubs
          </div>
          <div>
            <strong><Database size={16} className={styles.inlineIcon} /> Data:</strong> 
            PostgreSQL, MongoDB, Spark, Databricks, Kafka, Elasticsearch, Neo4j, React, D3.js, Tableau
          </div>
          <div>
            <strong><Code size={16} className={styles.inlineIcon} /> Languages:</strong> 
            Python, Java, Scala, TypeScript, C, PySpark, Apache Beam, FastAPI, .NET Core
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Award size={24} className={styles.sectionIcon} /> Certifications</h2>
        <div className={styles.certifications}>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>AWS Certified Machine Learning - Specialty</strong>
              <span>Issued Jul 2025 | Expires Jul 2028</span>
            </div>
          </div>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>AWS Certified Solutions Architect</strong>
              <span>Issued Mar 2025 | Expires Mar 2028</span>
            </div>
          </div>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>Project Management Professional (PMP)</strong>
              <span>Issued Sep 2024 | Expires Sep 2027</span>
            </div>
          </div>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>Azure Data Scientist Associate</strong>
              <span>Issued Mar 2022</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><GraduationCap size={24} className={styles.sectionIcon} /> Education</h2>
        <div className={styles.education}>
          <strong>Bachelor's Degree</strong>
          <p>Management Information Systems</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
