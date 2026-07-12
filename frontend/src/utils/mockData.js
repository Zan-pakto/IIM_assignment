/**
 * Mock dossiers for local demo mode.
 * Styled in the spirit of Warren Buffett's value investing principles.
 */

export const mockDossiers = {
  apple: {
    company: "Apple Inc. (AAPL)",
    decision: {
      decision: "INVEST",
      confidence: 92,
      investmentHorizon: "10+ Years (Hold Forever)",
      expectedReturn: "14% - 16% CAGR",
      explanation: `Apple possesses an extraordinary economic moat centered on high consumer switching costs, an integrated ecosystem (iOS, macOS, watchOS), and an iconic premium brand.

Warren Buffett's primary rules are fully met here:
1. Business we understand: Extremely strong consumer brand and digital ecosystem lock-in.
2. Favorable long-term prospects: High-margin Services segment continues to grow and offset hardware saturation.
3. Competent, shareholder-aligned management: Tim Cook executes massive capital return programs through share buybacks and dividends.
4. Margin of safety: While the stock trades at a premium P/E (~30x), the high Return on Invested Capital (ROIC > 55%) and unmatched cash generation justify the valuation.`
    },
    details: {
      financials: {
        returnOnEquity: "154.3% (Exemplary capital efficiency)",
        operatingMargin: "30.2% (Elite pricing power)",
        debtToEquity: "1.45 (Extremely manageable given cash flow)",
        freeCashFlow: "$104.8 Billion (Massive cash generator)",
        capitalAllocation: "Grade A+ (Tim Cook's buyback strategy has reduced shares outstanding by ~38% since 2013)",
        summary: "An incredibly resilient balance sheet coupled with high-efficiency capital allocation makes Apple a textbook defensive growth compounder."
      },
      risks: {
        riskScore: 22,
        reasons: {
          regulatoryPressures: "Antitrust scrutiny in the EU and US regarding App Store fees and ecosystem lock-in.",
          hardwareSaturation: "Slowing smartphone replacement cycles could drag hardware growth.",
          geopoliticalExposure: "Heavy reliance on China for manufacturing and supply chains."
        },
        summary: "Risks are primarily regulatory and geopolitical, but the core ecosystem and Services moat remain highly insulated."
      },
      opportunities: {
        servicesExpansion: "Monetizing the massive active device base through premium subscriptions, advertising, and finance.",
        artificialIntelligence: "Apple Intelligence integration driving a massive hardware upgrade cycle.",
        spatialComputing: "Vision Pro ecosystem maturation and long-term entry into consumer AR.",
        summary: "Ecosystem expansion into AI and premium services represents high-margin runway for growth."
      }
    }
  },
  tesla: {
    company: "Tesla Inc. (TSLA)",
    decision: {
      decision: "PASS",
      confidence: 64,
      investmentHorizon: "Avoid / Watchlist",
      expectedReturn: "Highly Volatile / Speculative",
      explanation: `Tesla is a highly innovative technology leader, but under a strict value-investing filter, it presents insufficient Margin of Safety and excessive structural uncertainty.

Key conflicts with value investing tenets:
1. Moat Durability: Automotive manufacturing has low barriers to entry and intense global competition. While Tesla has charging network and software advantages, traditional OEMs and Chinese EV giants are eroding market share.
2. Valuation: Trading at a cyclically adjusted P/E exceeding 70x, the stock pricing requires near-flawless execution of Autonomous Driving (FSD) and Robotics, leaving zero room for execution errors.
3. Predictability: Auto manufacturing has high capital expenditures and cyclical demand. Free cash flow is volatile.`
    },
    details: {
      financials: {
        returnOnEquity: "16.8% (Good for auto, low for tech)",
        operatingMargin: "9.2% (Down from peaks due to price cuts)",
        debtToEquity: "0.06 (Strong, debt-free balance sheet)",
        freeCashFlow: "$3.2 Billion (Cyclical and capital-intensive)",
        capitalAllocation: "Grade B (Aggressive expansion, but capital is constantly reinvested in high-risk ventures)",
        summary: "Financially healthy with high cash reserves, but operating metrics are subject to heavy automotive cyclicality and price wars."
      },
      risks: {
        riskScore: 78,
        reasons: {
          intenseCompetition: "Chinese manufacturers (BYD, etc.) and legacy automotive brands offering cheaper options.",
          fsdExecutionRisk: "Valuation heavily depends on Full Self-Driving and Robotaxi regulation, which face technical delays.",
          keyPersonRisk: "Elon Musk's split attention across multiple massive corporations."
        },
        summary: "Extremely high risk profile due to aggressive valuation, regulatory bottlenecks, and intense price pressure."
      },
      opportunities: {
        energyStorage: "Tesla Megapacks growing rapidly, capitalizing on grid stabilization and renewable energy transition.",
        autonomousDriving: "Monetizing FSD licensing and Robotaxi network if autonomous technology solves regulatory hurdles.",
        humanoidRobotics: "Optimus robot development targeting commercial industrial labor.",
        summary: "High-upside moonshot opportunities, but they remain highly speculative for value-oriented portfolios."
      }
    }
  },
  nvidia: {
    company: "NVIDIA Corporation (NVDA)",
    decision: {
      decision: "INVEST",
      confidence: 84,
      investmentHorizon: "5-7 Years",
      expectedReturn: "15% - 18% CAGR",
      explanation: `Nvidia has established a virtual monopoly in AI hardware accelerators, backed by the formidable CUDA software ecosystem.

Buffett's analysis of the business:
1. Moat: Elite switching costs. Developers are trained on CUDA, creating massive software lock-in that makes hardware competitor chips difficult to adopt.
2. Earnings Growth: Historic demand for compute.
3. Margin of Safety: The main concern. The company trades at a forward P/E of ~35x, which is reasonable given triple-digit earnings growth, but any deceleration in hyperscaler AI spending would compress multiples. 
Verdict: A high-conviction buy on dips, recognizing the software moat is wider than competitors realize.`
    },
    details: {
      financials: {
        returnOnEquity: "115.6% (Incredible capital efficiency)",
        operatingMargin: "61.8% (Stunning, software-like margins)",
        debtToEquity: "0.18 (Underleveraged, massive cash position)",
        freeCashFlow: "$39.2 Billion (Rapid scaling)",
        capitalAllocation: "Grade A (Aggressive R&D coupled with opportunistic buybacks)",
        summary: "Stunning financial profile with software-like operating leverage and capital-light foundry outsourcing."
      },
      risks: {
        riskScore: 45,
        reasons: {
          customerConcentration: "Top 4 hyperscalers make up over 40% of data center revenue.",
          supplyChainBottlenecks: "Heavy reliance on TSMC for advanced packaging (CoWoS) and foundry services.",
          competition: "Hyperscalers building proprietary chips (TPUs, Inferentia) and AMD's GPU hardware iterations."
        },
        summary: "Moderate risks centered on supply chain concentration and future capex cooling from major tech clients."
      },
      opportunities: {
        enterpriseAiAdopt: "Traditional enterprises moving from training to inferencing, expanding the customer base.",
        sovereignAi: "Governments building national supercomputing nodes to secure local AI capabilities.",
        softwareMonetize: "NVIDIA AI Enterprise software licensing creating recurring SaaS revenue.",
        summary: "Massive secular tailwinds as AI infrastructure transitions from tech companies to global industries."
      }
    }
  }
};

/**
 * Dynamically generates a high-quality, Warren Buffett style analysis
 * for any user-provided company.
 * @param {string} companyName 
 */
export function generateDynamicDossier(companyName) {
  const normalizedName = companyName.trim();
  const cleanName = normalizedName.replace(/[^a-zA-Z0-9\s]/g, "");
  
  // Deterministic seed based on string to keep results consistent for a company
  let hash = 0;
  for (let i = 0; i < cleanName.length; i++) {
    hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const isInvest = Math.abs(hash) % 2 === 0;
  const confidence = 65 + (Math.abs(hash * 3) % 28); // 65 - 93
  const riskScore = 15 + (Math.abs(hash * 7) % 65); // 15 - 80
  
  const horizonOptions = ["3-5 Years", "5-10 Years", "10+ Years (Hold Forever)", "Avoid / Watchlist"];
  const horizon = isInvest ? horizonOptions[Math.abs(hash) % 3] : horizonOptions[3];
  
  const returnOptions = ["12% - 15% CAGR", "15% - 18% CAGR", "10% - 12% CAGR", "Underperforming / Negative"];
  const expectedReturn = isInvest ? returnOptions[Math.abs(hash * 2) % 3] : returnOptions[3];
  
  const roe = (15 + (Math.abs(hash) % 45)).toFixed(1) + "%";
  const opMargin = (8 + (Math.abs(hash * 4) % 28)).toFixed(1) + "%";
  const debtEq = (0.1 + (Math.abs(hash * 9) % 180) / 100).toFixed(2);
  const fcf = "$" + (1.2 + (Math.abs(hash * 11) % 45)).toFixed(1) + " Billion";
  
  const capitalGrade = ["Grade A+", "Grade A", "Grade B+", "Grade B"][Math.abs(hash) % 4];
  
  const decision = isInvest ? "INVEST" : "PASS";
  
  const explanation = isInvest 
    ? `${cleanName} demonstrates key attributes of a classic Warren Buffett investment: a durable competitive advantage (moat), stable and predictable free cash flow, and a strong balance sheet. 
    
Our automated model highlights:
1. Product Moat: High consumer loyalty or enterprise switching costs protect its pricing power.
2. Financial Health: Elevated Return on Equity (${roe}) and stable margins indicate high capital efficiency.
3. Management & Allocation: The company has demonstrated sensible capital allocation (${capitalGrade}), reinvesting in high-yield segments while returning capital to shareholders.
4. Margin of Safety: Current valuation metrics provide a solid entry point, minimizing downside risks.`
    : `While ${cleanName} is a recognized business, it fails to meet the strict conservative criteria required for a high-conviction value investment.

Key areas of concern:
1. Competitive Moat: The company operates in a highly fragmented or rapidly evolving space, leaving it vulnerable to technological disruption and margin erosion.
2. Financial Volatility: High debt-to-equity (${debtEq}) combined with capital-intensive requirements limit long-term cash flow predictability.
3. Valuation Risk: The current risk-reward ratio is unfavorable, and the stock lacks a sufficient Margin of Safety to protect investors against operational setbacks.`;

  return {
    company: `${cleanName} (${isInvest ? "NYSE" : "NASDAQ"}: ${cleanName.slice(0, 4).toUpperCase()})`,
    decision: {
      decision,
      confidence,
      investmentHorizon: horizon,
      expectedReturn,
      explanation
    },
    details: {
      financials: {
        returnOnEquity: `${roe} (${isInvest ? "Exceeds industry standard" : "Fails to meet premium threshold"})`,
        operatingMargin: `${opMargin} (Reflects ${isInvest ? "strong pricing power" : "pricing pressures"})`,
        debtToEquity: `${debtEq} (${parseFloat(debtEq) < 0.8 ? "Conservative leverage" : "Elevated leverage risk"})`,
        freeCashFlow: `${fcf} (Annualized)`,
        capitalAllocation: `${capitalGrade} (Evaluated on buybacks, dividends, and ROIC)`,
        summary: isInvest 
          ? "Highly robust financial engine with efficient capital allocation and clear pricing power."
          : "Financially complex model with volatile cash generation and high reinvestment demands."
      },
      risks: {
        riskScore,
        reasons: {
          moatErosion: isInvest 
            ? "Competitors seeking to duplicate their intellectual property or premium branding."
            : "Aggressive low-cost competitors driving price wars and customer churn.",
          macroPressures: "High interest rates or inflation softening aggregate demand.",
          technologicalShift: "Rapid advancements in AI and automation threatening legacy business models."
        },
        summary: isInvest 
          ? "Low-to-moderate risks that are well-contained by the company's strong capital position."
          : "High-risk indicators due to secular disruption vulnerability and thin margins."
      },
      opportunities: {
        operationalEfficiency: "Implementing automation and AI to reduce operating expenses and expand margin profiles.",
        geographicExpansion: "Unlocking emerging market segments to counter mature domestic penetration.",
        productInnovation: "Releasing next-generation product/service lines to capture additional wallet share.",
        summary: "Significant potential tailwinds that could accelerate long-term compounding if executed correctly."
      }
    }
  };
}
