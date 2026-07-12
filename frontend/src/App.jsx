import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';
import Loading from './components/Loading';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';

/**
 * Main application coordinator managing views and network state.
 * Uses Axios to fetch investment dossiers from the backend API.
 */
export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'result'
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [resultData, setResultData] = useState(null);
  const [lastCompany, setLastCompany] = useState('');

  const handleSearch = async (companyName) => {
    setIsLoading(true);
    setErrorMsg(null);
    setLastCompany(companyName);

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';
      // Perform the POST request to the backend API using Axios
      const response = await axios.post(`${apiBase}/api/analyze`, {
        company: companyName
      });

      const resData = response.data;

      if (!resData.success) {
        throw new Error(resData.message || resData.error || 'Failed to analyze company');
      }

      setResultData(resData.data);
      setCurrentPage('result');
    } catch (err) {
      console.error('Error during investment analysis:', err);
      
      // Extract the most descriptive error message from the Axios response
      const serverMessage = err.response?.data?.message || err.response?.data?.error;
      const networkMessage = err.message;
      
      setErrorMsg(serverMessage || networkMessage || 'An unexpected error occurred during the analysis.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setCurrentPage('home');
    setResultData(null);
    setErrorMsg(null);
  };

  const handleRetry = () => {
    if (lastCompany) {
      handleSearch(lastCompany);
    }
  };

  return (
    <div className="min-h-screen flex flex-col grid-bg bg-[var(--bg-app)] text-[var(--text-primary)] transition-all duration-300">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center">
        <ErrorBoundary>
          {isLoading && <Loading companyName={lastCompany} />}
          
          {!isLoading && errorMsg && (
            <Error message={errorMsg} onRetry={handleRetry} />
          )}

          {!isLoading && !errorMsg && currentPage === 'home' && (
            <Home onSearch={handleSearch} isLoading={isLoading} />
          )}

          {!isLoading && !errorMsg && currentPage === 'result' && (
            <Result data={resultData} onBack={handleBack} />
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
}
