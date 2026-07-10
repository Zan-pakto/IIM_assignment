import React from 'react';

/**
 * DecisionBadge component to display the final action recommendation.
 * @param {object} props
 * @param {string} props.decision - The recommendation (e.g. INVEST or PASS).
 * @param {number} props.confidence - Conviction/confidence score (0-100).
 */
export default function DecisionBadge({ decision, confidence }) {
  const isInvest = decision?.toUpperCase() === 'INVEST';

  return (
    <div>
      <div>
        <span>Recommendation: </span>
        <strong>{decision || 'PENDING'}</strong>
      </div>
      <div>
        <span>Confidence: </span>
        <strong>{confidence}%</strong>
      </div>
    </div>
  );
}
