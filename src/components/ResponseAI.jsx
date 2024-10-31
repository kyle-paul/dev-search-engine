import styles from './responseAI.module.scss';
import { parseTextContent } from '../services/llmServices'

const ResAI = ({ aiResponse }) => {
  return (
    <div className={styles.aiCard}>
      <h3 className={styles.title}>AI Assistant</h3>
      <p className={styles.responseText}>{parseTextContent(aiResponse) || "Search something please..."}</p>
    </div>
  );
};

export default ResAI;