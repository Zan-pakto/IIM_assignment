import { StateGraph, START, END } from '@langchain/langgraph';

// 1. Define the graph state channels (schema)
// In @langchain/langgraph, a channel value of null defaults to the "last-write-wins" (overwrite) reducer.
// Providing a reducer function (even a simple overwrite function) turns the channel into a BinaryOperatorAggregate,
// which automatically enables support for multiple outgoing edges (parallel paths).
const channels = {
  company: null,
  searchResults: null,
  extractedData: null,
  financialAnalysis: { reducer: (left, right) => right },
  riskAnalysis: { reducer: (left, right) => right },
  opportunityAnalysis: { reducer: (left, right) => right },
  decision: null,
  output: null
};

// 2. Define Node functions (placeholder logic for now, no prompt/AI logic)
const searchCompanyNode = async (state) => {
  console.log(`[Node: Search Company] Searching for information on: ${state.company}`);
  return {
    searchResults: `Mock raw search results for ${state.company}`
  };
};

const extractDataNode = async (state) => {
  console.log(`[Node: Extract Data] Extracting relevant facts and figures from search results.`);
  return {
    extractedData: `Mock extracted company details for ${state.company}`
  };
};

const analyzeFinancialsNode = async (state) => {
  console.log(`[Node: Analyze Financials] Analyzing balance sheets, margins, and financial performance.`);
  return {
    financialAnalysis: `Mock financial analysis report for ${state.company}`
  };
};

const analyzeRisksNode = async (state) => {
  console.log(`[Node: Analyze Risks] Evaluating market, regulatory, and financial risk profiles.`);
  return {
    riskAnalysis: `Mock risk assessment report for ${state.company}`
  };
};

const analyzeOpportunitiesNode = async (state) => {
  console.log(`[Node: Analyze Opportunities] Identifying growth catalysts and market positioning.`);
  return {
    opportunityAnalysis: `Mock opportunities report for ${state.company}`
  };
};

const finalDecisionNode = async (state) => {
  console.log(`[Node: Final Decision] Weighing financials, risks, and opportunities for recommendation.`);
  return {
    decision: {
      recommendation: "INVEST",
      rationale: `Strong financials and growth catalysts outweigh identified risks for ${state.company}.`
    }
  };
};

const formatOutputNode = async (state) => {
  console.log(`[Node: Format Output] Structuring final analysis results.`);
  return {
    output: {
      company: state.company,
      decision: state.decision,
      details: {
        financials: state.financialAnalysis,
        risks: state.riskAnalysis,
        opportunities: state.opportunityAnalysis
      }
    }
  };
};

// 3. Create the StateGraph
const workflow = new StateGraph({ channels })
  // Add Nodes
  .addNode('searchCompany', searchCompanyNode)
  .addNode('extractData', extractDataNode)
  .addNode('analyzeFinancials', analyzeFinancialsNode)
  .addNode('analyzeRisks', analyzeRisksNode)
  .addNode('analyzeOpportunities', analyzeOpportunitiesNode)
  .addNode('finalDecision', finalDecisionNode)
  .addNode('formatOutput', formatOutputNode)

  // Configure Edges
  .addEdge(START, 'searchCompany')
  .addEdge('searchCompany', 'extractData')
  
  // Parallel Execution: Extract Data triggers all three analysis nodes concurrently
  .addEdge('extractData', 'analyzeFinancials')
  .addEdge('extractData', 'analyzeRisks')
  .addEdge('extractData', 'analyzeOpportunities')
  
  // Join: Wait for all three analysis nodes to complete, then trigger Final Decision
  .addEdge(['analyzeFinancials', 'analyzeRisks', 'analyzeOpportunities'], 'finalDecision')
  
  // Final Decision -> Format Output -> END
  .addEdge('finalDecision', 'formatOutput')
  .addEdge('formatOutput', END);

// 4. Compile the graph
export const graph = workflow.compile();
