import { Mail, Phone, MapPin, Briefcase, Award, GraduationCap, Code, Cloud, Database, Zap, Rocket, Download } from 'lucide-react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div id="resume" className={styles.resumeContainer}>
      <div className={styles.resumeHeader}>
        <h1>Tejas Patel</h1>
        <p>Hands-on AI Architect & Technical Lead | Agentic AI • Intelligent Test Automation • Model Fine-Tuning</p>
        <div className={styles.contactInfo}>
          <span><Mail size={16} /> tejas-patel@hotmail.com</span>
          <span><Phone size={16} /> 404-583-8581</span>
          <span><MapPin size={16} /> Atlanta, GA</span>
          <a href="/Tejas_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download PDF</a>
        </div>
      </div>

      <section className={styles.section}>
        <h2><Briefcase size={24} className={styles.sectionIcon} /> Professional Summary</h2>
        <p>
          Hands-on AI architect and engineer with 23 years of experience. I design and build agentic AI
          applications myself, mostly in Python, R and TypeScript. At CDC I built a Playwright crawler that
          tests a STARLIMS lab system with no hand-written scripts. On my own time, under Algocrat Labs, I build
          AI products including a federal procurement intelligence platform, Dragon Farm (an R package for SLM
          fine-tuning) and a D3 data storytelling pipeline. Strong background in data architecture, HL7
          healthcare data and federal health IT. I lead the automation team at CDC and build alongside them.
        </p>
        <p><strong>Agentic Systems ◆ AI Test Automation ◆ Small Language Models ◆ Data Storytelling ◆ Federal Health IT</strong></p>
      </section>

      <section className={styles.section}>
        <h2><Code size={24} className={styles.sectionIcon} /> Technical Skills</h2>
        <div className={styles.skills}>
          <div><strong><Zap size={16} className={styles.inlineIcon} /> Agentic & GenAI:</strong> LangChain, LangGraph, Microsoft Agent Framework, Copilot Studio, Claude, Azure OpenAI, AWS Bedrock, RAG, GraphRAG, Ollama</div>
          <div><strong><Code size={16} className={styles.inlineIcon} /> ML & Fine-Tuning:</strong> PyTorch, TensorFlow, Hugging Face, LoRA / QLoRA, SLMs, ESM-2, model monitoring, drift detection, bias mitigation</div>
          <div><strong><Code size={16} className={styles.inlineIcon} /> Test Automation:</strong> Playwright, agentic crawlers, Page Object Model, GitHub Actions, CI/CD, Grafana</div>
          <div><strong><Cloud size={16} className={styles.inlineIcon} /> Cloud:</strong> AWS (SageMaker, Bedrock, Lambda, Batch, ECS, DynamoDB), Azure (OpenAI, Synapse, AKS, Event Hubs)</div>
          <div><strong><Database size={16} className={styles.inlineIcon} /> Data:</strong> PostgreSQL, SQL Server, MongoDB, Databricks, Spark, Kafka, Elasticsearch, Neo4j, Redis, DuckDB, HL7</div>
          <div><strong><Code size={16} className={styles.inlineIcon} /> Languages & Viz:</strong> Python, R, TypeScript, Java, Scala, C# • D3.js, React, Angular, Tableau, Power BI, Plotly</div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Rocket size={24} className={styles.sectionIcon} /> Independent AI Projects</h2>
        <p><em>Side projects I build on my own time under the Algocrat Labs name, separate from my Booz Allen work.</em></p>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div><h3>AwardLens AI: Federal Procurement Intelligence</h3></div>
            <div className={styles.date}><a href="https://awards-dashboard.pages.dev/" target="_blank" rel="noopener noreferrer">awards-dashboard.pages.dev</a></div>
          </div>
          <ul>
            <li>Building a platform that helps contractors find and track federal opportunities. A two-tier router sends narrow and SQL-style questions to fine-tuned small models and broader reasoning to Claude.</li>
            <li>Runs almost entirely on free cloud tiers (Cloudflare and Oracle Always Free) to keep hosting costs near zero.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div><h3>Dragon Farm: Drag-and-Drop SLM Fine-Tuning for R</h3></div>
            <div className={styles.date}>
              <a href="https://dragonfarm.dev/" target="_blank" rel="noopener noreferrer">dragonfarm.dev</a>
            </div>
          </div>
          <ul>
            <li>Built an R package that lets RStudio users fine-tune small language models (LoRA/QLoRA) through an agentic, drag-and-drop pipeline, similar to what Azure AI Foundry offers.</li>
            <li>Gives R analysts and statisticians a way to customize models without learning Python or MLOps.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div><h3>DeViz and Informance.ai: Agentic Data Storytelling</h3></div>
            <div className={styles.date}>
              <a href="https://deviz.io/" target="_blank" rel="noopener noreferrer">deviz.io</a>{' • '}
              <a href="https://informance.ai/" target="_blank" rel="noopener noreferrer">informance.ai</a>
            </div>
          </div>
          <ul>
            <li>Built an agentic pipeline that reads long documents like SEC 10-K filings, pulls the numbers into JSON and turns them into interactive D3.js data stories. Completed a full story for Costco's 2024 10-K.</li>
            <li>Informance.ai packages the same idea for investor relations teams at mid-cap public companies, built on Astro and Cloudflare Pages.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Briefcase size={24} className={styles.sectionIcon} /> Professional Experience</h2>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Data & AI Technology Leader</h3>
              <h4>Booz Allen Hamilton · Technical Lead, AI and Automation for CDC Office of Laboratory Systems and Response (OLSR)</h4>
            </div>
            <div className={styles.date}>Apr 2014 - Present</div>
          </div>
          <p><strong>Agentic STARLIMS Test Crawler (CDC · Booz Allen)</strong></p>
          <ul>
            <li>Built an AI crawler that tests a STARLIMS (ExtJS) lab system starting from just an entry point and a JSON workflow payload. No hand-written scripts or test cases needed.</li>
            <li>Gave the agent workflow data, the app's HTML and workflow definitions so it knows what to test. It runs on Playwright and captures several locators per element, since ExtJS pages change their DOM a lot.</li>
            <li>Moved the team from writing tests by hand to agentic testing, one piece at a time. Now extending it so tests can be written straight from specs using Microsoft Agent Framework.</li>
          </ul>
          <ul>
            <li>Own delivery to CDC: set technical direction for the automation team, coach engineers and manage the client relationship.</li>
            <li>Applied protein language models to public health genomics, benchmarking ESM-2 embeddings against profile HMMs for antimicrobial resistance gene detection.</li>
            <li>Assessed multi-agent orchestration frameworks for enterprise AI work, focusing on task breakdown and production scale.</li>
            <li>Share agentic automation practices with the Booz Allen Atlanta AI Community of Practice through live demos.</li>
          </ul>
          <p><em>Earlier at Booz Allen · Enterprise Data Architecture, Federal Health</em></p>
          <ul>
            <li>Led the digitization of a national ambulatory care survey, designing a reusable CQRS-based survey platform and governed pipelines for structured and HL7 healthcare data.</li>
            <li>Set up standardized XDR data exchange with major EMR vendors and built real-time pipelines for mortality data streams.</li>
            <li>Built a high-performance Apache Solr and .NET search and analytics API.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Business Intelligence Architect</h3>
              <h4>MediaBrix</h4>
            </div>
            <div className={styles.date}>Aug 2012 - Apr 2014</div>
          </div>
          <ul>
            <li>Built Random Forest models to predict ad behavior for targeting, along with SSIS/SSRS pipelines and SSAS OLAP cubes.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Business Intelligence Architect</h3>
              <h4>EyeWonder</h4>
            </div>
            <div className={styles.date}>Nov 2010 - Aug 2012</div>
          </div>
          <ul>
            <li>Designed ad analytics warehouses, a Naive Bayes fraud detection system and near-real-time conversion pipelines.</li>
          </ul>
        </div>

        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <h3>Database Developer, Consultant, Senior BI Developer</h3>
              <h4>Earlier Roles</h4>
            </div>
            <div className={styles.date}>2003 - 2010</div>
          </div>
          <ul>
            <li>Wrote Microsoft Press certification exam content, built sentiment analysis engines and OLAP warehouses, and worked on optimization problems in healthcare and supply chain.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2><Award size={24} className={styles.sectionIcon} /> Certifications</h2>
        <div className={styles.certifications}>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>AWS Certified Machine Learning - Specialty</strong>
              <span>2025-2028</span>
            </div>
          </div>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>AWS Certified Solutions Architect - Associate</strong>
              <span>2025-2028</span>
            </div>
          </div>
          <div className={styles.cert}>
            <Award size={18} className={styles.certIcon} />
            <div>
              <strong>Project Management Professional (PMP), PMI</strong>
              <span>2024-2027</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2><GraduationCap size={24} className={styles.sectionIcon} /> Education</h2>
        <div className={styles.education}>
          <strong>M.S. Industrial Engineering</strong>
          <p>Georgia Institute of Technology</p>
          <strong>B.S. Mechanical Engineering</strong>
          <p>SRT Marathwada University, India</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
