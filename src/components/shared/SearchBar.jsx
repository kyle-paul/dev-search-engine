import React from 'react';
import TextInput from './TextInput';
import Select from './Select';
import styles from './searchbar.module.scss';

const SearchBar = ({ searchValue, onSearchChange, languageValue, onLanguageChange, onSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <TextInput
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Repo Search"
      />
      <Select
        value={languageValue}
        onChange={onLanguageChange}
        options={[{ value: 'all', label: 'All' }, { value: 'javascript', label: 'JavaScript' }]}
      />
      <button className={styles.searchButton} onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
