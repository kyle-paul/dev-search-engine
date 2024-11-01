import dynamic from 'next/dynamic';
import styles from './responseAI.module.scss';

// Use dynamic import for react-markdown
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false });

const ResAI = ({ aiResponse }) => {
  return (
    <div className={styles.aiCard}>
      <h3 className={styles.title}>AI Assistant</h3>      
      {aiResponse ? (
        <ReactMarkdown className={styles.responseText}>{aiResponse}</ReactMarkdown>
      ) : (
        <p className={styles.responseText}>Search something please...</p>
      )}
    </div>
  );
};

export default ResAI;
