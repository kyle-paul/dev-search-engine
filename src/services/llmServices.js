import axios from 'axios';

const AIConfig = {
  baseURL: 'http://localhost:8000/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
};

async function getAI(topic, language) {
  try {
    const response = await axios.post('chat/completions', 
      {
        model: "Qwen/Qwen2.5-Coder-1.5B-Instruct-GPTQ-Int8",
        messages: [
          { role: "system", content: "You are a helpful assistant. User search a github repository. You will provide them more information of their topic" },
          { role: "user", content: `Tell me more about ${topic} used in ${language}` },
        ],
        temperature: 0.7,
        max_tokens: 512,
      },
      AIConfig
    );
    return response.data;
    
  } catch (error) {
    console.error("Error fetching completion:", error);
  }
}

function parseTextContent(text) {
  let readableText = text.replace(/\\n/g, '\n');
  readableText = readableText.replace(/\\n\n/g, '\n'); 
  readableText = readableText.replace(/\\n\n/g, '\n');
  return readableText;
}


export { getAI , parseTextContent}
