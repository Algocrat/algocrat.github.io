import { useState, ReactNode } from 'react';
import styles from './Tabs.module.css';

interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
}

const Tabs = ({ items, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const activeContent = items.find(item => item.id === activeTab)?.content;

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList} role="tablist" data-active-tab={activeTab}>
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`panel-${item.id}`}
            id={`tab-${item.id}`}
            className={`${styles.tab} ${activeTab === item.id ? styles.active : ''}`}
            onClick={() => handleTabClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {items.map((item) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`panel-${item.id}`}
            aria-labelledby={`tab-${item.id}`}
            className={styles.tabPanel}
            hidden={activeTab !== item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
