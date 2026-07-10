import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';
import Loading from './components/Loading';
import Error from './components/Error';

/**
 * Main application coordinator managing views and network state.
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
      const response = await fetch('http://localhost:4000/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company: companyName }),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.message || resData.error || 'Failed to analyze company');
      }

      setResultData(resData.data);
      setCurrentPage('result');
    } catch (err) {
      console.error('Error fetching analysis:', err);
      setErrorMsg(err.message || 'An unexpected network error occurred.');
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
    <>
      <Navbar />
      <main>
        {isLoading && <Loading />}
        
        {!isLoading && errorMsg && (
          <Error message={errorMsg} onRetry={handleRetry} />
        )}

        {!isLoading && !errorMsg && currentPage === 'home' && (
          <Home onSearch={handleSearch} isLoading={isLoading} />
        )}

        {!isLoading && !errorMsg && currentPage === 'result' && (
          <Result data={resultData} onBack={handleBack} />
        )}
      </main>
    </>
  );
}
