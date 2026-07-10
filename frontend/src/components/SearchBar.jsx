import React, { useState } from 'react';

/**
 * SearchBar component to input company names.
 * @param {object} props
 * @param {function} props.onSearch - Callback function triggered on form submission.
 * @param {boolean} props.isLoading - Whether the search is currently loading.
 */
export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter company name (e.g. Tesla, Apple)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading || !query.trim()}>
        {isLoading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  );
}
