import React from 'react';

/**
 * RiskMeter component to visualize the risk profile score.
 * @param {object} props
 * @param {number} props.score - Risk score (0-100).
 */
export default function RiskMeter({ score }) {
  return (
    <div>
      <h4>Risk Profile Score</h4>
      <div>
        <strong>{score}/100</strong>
      </div>
      <div>
        <span>Risk Assessment: </span>
        <span>
          {score < 30 ? 'Low Risk' : score < 70 ? 'Moderate Risk' : 'High Risk'}
        </span>
      </div>
    </div>
  );
}
