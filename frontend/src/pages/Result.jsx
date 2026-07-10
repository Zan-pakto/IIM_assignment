import React from 'react';
import DecisionBadge from '../components/DecisionBadge';
import RiskMeter from '../components/RiskMeter';
import AnalysisCard from '../components/AnalysisCard';

/**
 * Result page view of the app to render the complete dossier.
 * @param {object} props
 * @param {object} props.data - The final structured dossier report returned from the API.
 * @param {function} props.onBack - Callback to return to search/home.
 */
export default function Result({ data, onBack }) {
  if (!data) return null;

  const { company, decision, details } = data;

  return (
    <div>
      <div>
        <button onClick={onBack}>&larr; Back to Search</button>
        <h2>Research Dossier: {company}</h2>
      </div>

      {/* Decision and Conviction overview */}
      <div>
        <DecisionBadge 
          decision={decision?.decision} 
          confidence={decision?.confidence} 
        />
        {details?.risks?.riskScore !== undefined && (
          <RiskMeter score={details.risks.riskScore} />
        )}
      </div>

      {/* Rationale and Details */}
      <div>
        <div>
          <h3>Investment Rationale</h3>
          <p>{decision?.explanation}</p>
          <div>
            <span><strong>Investment Horizon:</strong> {decision?.investmentHorizon}</span>
            <span><strong>Expected Return:</strong> {decision?.expectedReturn}</span>
          </div>
        </div>
      </div>

      {/* Segment Cards */}
      <div>
        {details?.financials && (
          <AnalysisCard title="Financial Analysis" data={details.financials} />
        )}
        {details?.risks?.reasons && (
          <AnalysisCard title="Risk Analysis" data={details.risks.reasons} />
        )}
        {details?.opportunities && (
          <AnalysisCard title="Opportunity Analysis" data={details.opportunities} />
        )}
      </div>
    </div>
  );
}
