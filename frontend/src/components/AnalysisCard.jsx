import React from 'react';

/**
 * AnalysisCard component to display category analysis (e.g., Financials, Risks, Opportunities).
 * @param {object} props
 * @param {string} props.title - Title of the analysis card.
 * @param {object} props.data - Analysis content key-value map.
 */
export default function AnalysisCard({ title, data }) {
  if (!data) return null;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {Object.entries(data).map(([key, value]) => {
          // If value is an object (like reasons in riskAnalysis), format sub-items
          if (typeof value === 'object' && value !== null) {
            return (
              <li key={key}>
                <strong>{key}:</strong>
                <ul>
                  {Object.entries(value).map(([subKey, subVal]) => (
                    <li key={subKey}>
                      <strong>{subKey}:</strong> {String(subVal)}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={key}>
              <strong>{key}:</strong> {String(value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
