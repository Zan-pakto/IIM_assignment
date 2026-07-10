import React from 'react';
import SearchBar from '../components/SearchBar';

/**
 * Home page view of the app.
 * @param {object} props
 * @param {function} props.onSearch - Search action handler.
 * @param {boolean} props.isLoading - Whether the search is running.
 */
export default function Home({ onSearch, isLoading }) {
  return (
    <div>
      <h1>Investment Research Agent</h1>
      <p>
        Analyze balance sheets, growth profiles, market opportunities, and core risk vectors 
        synthesized through a Warren Buffett value investing lens.
      </p>
      <div>
        <SearchBar onSearch={onSearch} isLoading={isLoading} />
      </div>
    </div>
  );
}
