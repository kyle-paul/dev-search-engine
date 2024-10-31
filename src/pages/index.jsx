import { useState } from 'react';
import Search from '../components/Search';
import { searchRepos } from '../services/githubService';
import RepoList from '../components/RepoList';
import getRandomWord from '../helpers/randowWord.helper';
import styles from './index.module.scss';
import { getAI } from '../services/llmServices';
import ResAI from '../components/ResponseAI';

const Index = (props) => {
  
  const [searchText, setSearchText] = useState(props.searchText);
  const [language, setLanguage] = useState('');
  const [repos, setRepos] = useState(props.repos);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAIResponse] = useState('');

  const onSearchTextChange = (text) => {
    setSearchText(text);
  };

  const onLanguageChange = (language) => {
    setLanguage(language);
  };

  const onSearch = () => {
    loadRepos(searchText, language);
    fetchAIResponse(searchText, language);
  };

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };

  const fetchAIResponse = async (topic, language) => {
    try {
      const response = await getAI(topic, language);
      setAIResponse(response.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
        onSearch={onSearch}
      />
      <ResAI aiResponse={aiResponse}/>
      <RepoList loading={loading} repos={repos} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchText = getRandomWord();
  const res = await searchRepos(searchText);

  return {
    props: {
      searchText: searchText,
      repos: res.data.items,
    },
  };
};

export default Index;
