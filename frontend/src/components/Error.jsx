import React from 'react';

/**
 * Error component to display failure messages.
 * @param {object} props
 * @param {string} props.message - The error message text.
 * @param {function} props.onRetry - Callback to retry search.
 */
export default function Error({ message, onRetry }) {
  return (
    <div>
      <h4>Analysis Failed</h4>
      <p>{message || 'An unexpected error occurred during the analysis.'}</p>
      {onRetry && (
        <button onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
