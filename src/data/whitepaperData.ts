import { WhitepaperSlide, RoadmapPhase, TokenAllocation } from '../types';

export const TOKEN_DETAILS = {
  name: "Gada Token",
  symbol: "GDT",
  blockchain: "BNB Smart Chain",
  standard: "BEP-20",
  totalSupply: "50,000,000,000",
  formattedSupply: "50 Billion GDT",
  contractAddress: "0x090458b49D6deAA9F7334a5e628aa26D82A3A082",
  websiteUrl: "https://gadatoken.com",
  explorerUrl: "https://bscscan.com/token/0x090458b49D6deAA9F7334a5e628aa26D82A3A082",
  version: "Version 1.0",
  ecosystem: {
    social: "gada.chat",
    socialUrl: "https://gada.chat",
    messenger: "gadavoice.com",
    messengerUrl: "https://gadavoice.com",
    company: "GADA CHAT LTD"
  }
};

export const WHITEPAPER_SLIDES: WhitepaperSlide[] = [
  {
    id: 1,
    title: "GADA TOKEN WHITEPAPER",
    category: "Executive Title",
    subtitle: "The utility token powering the Gada ecosystem of chat, social, streaming and commerce.",
    summary: "Official Whitepaper documentation introducing GDT, its underlying architecture, real-world utility, and ecosystem expansion across modern digital platforms.",
    bullets: [
      { heading: "Token Symbol", description: "GDT issued as an efficient, low-fee BEP-20 asset on BNB Smart Chain." },
      { heading: "Ecosystem Scope", description: "Seamlessly integrates social networking, encrypted messaging, live creator streaming, and peer-to-peer commerce." },
      { heading: "Governance & Standard", description: "Strict compliance standards with public contract verification and auditable economics." }
    ],
    callout: "GDT | BNB Smart Chain | Version 1.0 | gadatoken.com"
  },
  {
    id: 2,
    title: "ABSTRACT",
    category: "Architecture Overview",
    subtitle: "One unified token across the entire Gada ecosystem",
    summary: "Gada Token (GDT) is issued on BNB Smart Chain with a fixed supply of 50 billion tokens. It connects messaging, social interaction, streaming, and marketplace trade through a transparent, efficient value layer.",
    bullets: [
      { heading: "Fixed Total Supply", description: "50,000,000,000 GDT mathematically capped to preserve token integrity without inflationary minting." },
      { heading: "High-Throughput Network", description: "Leverages BNB Smart Chain for sub-second settlement times and sub-cent transaction costs." },
      { heading: "TradFi Interoperability", description: "Designed from inception with planned bank partnerships and future premier exchange listings." }
    ],
    callout: "50,000,000,000 Total Supply | BEP-20 Standard | BNB Smart Chain"
  },
  {
    id: 3,
    title: "VISION AND PROBLEM",
    category: "Market Solution",
    subtitle: "Why Gada Token exists and what challenges it resolves",
    summary: "Our mission is to power a trusted digital ecosystem where individuals can communicate, create, trade, and transact using one efficient, decentralized, and transparent token.",
    bullets: [
      { heading: "Fragmented Platforms", description: "Conventional messaging, social networks, streaming, and trade run on disjointed, siloed payment systems." },
      { heading: "Costly & Slow Payments", description: "Legacy cross-border remittances impose exorbitant fees, opaque currency spreads, and days of clearing delays." },
      { heading: "Limited Creator Rewards", description: "Traditional platforms monopolize creator monetization, extracting steep commissions on audience support." },
      { heading: "Crypto Isolated from Banking", description: "Most digital assets remain disconnected from everyday banking infrastructure, hindering mainstream adoption." }
    ],
    callout: "Unifying social networking, e-commerce, and global banking settlement into a frictionless value rail."
  },
  {
    id: 4,
    title: "THE GADA ECOSYSTEM",
    category: "Platform Products",
    subtitle: "Where GDT operates with real transactional utility",
    summary: "GDT functions as the universal medium of exchange across two flagship platforms owned and developed within the Gada network.",
    bullets: [
      { heading: "gada.chat (Social Platform)", description: "Owned by GADA CHAT LTD. Features verified user profiles, niche communities, and creator channels where GDT powers micro-tipping, reward mechanisms, and peer-to-peer transfers." },
      { heading: "gadavoice.com (Messenger & Marketplace)", description: "Next-generation secure communication platform combining 1-on-1 and group messaging with an embedded marketplace for goods and services, creator live-streaming, and community tools." },
      { heading: "Extensible Architecture", description: "The ecosystem is built to continually onboard external merchants, third-party mini-apps, and enterprise integrations." }
    ],
    callout: "Two interconnected platforms: Social community (gada.chat) and Commerce messenger (gadavoice.com)."
  },
  {
    id: 5,
    title: "TOKEN OVERVIEW",
    category: "Technical Parameters",
    subtitle: "Gada Token at a glance",
    summary: "Core technical parameters and verified on-chain identifiers of the GDT smart contract deployed on the BNB Smart Chain.",
    bullets: [
      { heading: "Token Name", description: "Gada Token" },
      { heading: "Symbol", description: "GDT" },
      { heading: "Blockchain Network", description: "BNB Smart Chain (BSC)" },
      { heading: "Token Standard", description: "BEP-20" },
      { heading: "Total Supply", description: "50,000,000,000 (Fifty Billion GDT - Non-Mintable)" },
      { heading: "Smart Contract Address", description: "0x090458b49D6deAA9F7334a5e628aa26D82A3A082" }
    ],
    callout: "Contract verified on BscScan: 0x090458b49D6deAA9F7334a5e628aa26D82A3A082"
  },
  {
    id: 6,
    title: "TOKEN UTILITY",
    category: "Real-World Mechanics",
    subtitle: "Five fundamental utility pillars of GDT",
    summary: "GDT provides tangible operational utility across consumer and institutional transactions rather than speculative hype.",
    bullets: [
      { heading: "1. Ecosystem Payments", description: "Purchasing products, digital services, and subscriptions on gadavoice.com marketplace and partner storefronts." },
      { heading: "2. Creator & Streamer Support", description: "Audience-to-creator direct tipping with instant confirmation and zero intermediary platform deductions." },
      { heading: "3. Community Rewards", description: "Automated incentives distributed to active community moderators, verified content contributors, and brand ambassadors." },
      { heading: "4. Fast Borderless Value Transfer", description: "Sub-cent, instant cross-border remittances between users within and beyond the native platforms." },
      { heading: "5. Financial Integrations", description: "Serving as the bridge asset for upcoming banking settlement networks and regulated merchant checkout gateways." }
    ],
    callout: "All utilities roll out in deliberate phases aligned with verified product feature releases."
  },
  {
    id: 7,
    title: "TOKENOMICS",
    category: "Economic Model",
    subtitle: "Allocation and stewardship of 50 Billion GDT",
    summary: "Balanced resource allocation engineered to safeguard long-term development, deep market liquidity, strategic banking integration, and community incentives.",
    bullets: [
      { heading: "1. Ecosystem & Platform Development (20%)", description: "10,000,000,000 GDT (10 Billion) dedicated to continuous engineering of gada.chat, gadavoice.com, and future products." },
      { heading: "2. Liquidity & Exchange Listings (20%)", description: "10,000,000,000 GDT (10 Billion) provisioned for market liquidity and tier-1 exchange capital requirements." },
      { heading: "3. Banking & Strategic Partnerships (10%)", description: "5,000,000,000 GDT (5 Billion) allocated to TradFi integrations, licensed fiat gateways, and partner channels." },
      { heading: "4. Community & Rewards (5%)", description: "2,500,000,000 GDT (2.5 Billion) for user incentives, creator micro-rewards, and engagement campaigns." },
      { heading: "5. Team & Advisors (15%)", description: "7,500,000,000 GDT (7.5 Billion) bound by multi-year linear vesting cliffs to ensure long-term alignment." },
      { heading: "6. Strategic Reserve (30%)", description: "15,000,000,000 GDT (15 Billion) reserved for operational continuity, protocol security, and future network expansion." }
    ],
    callout: "Total Supply: 50 Billion GDT | 100% Fixed Allocation Structure Verified"
  },
  {
    id: 8,
    title: "BANKING AND FINANCIAL PARTNERSHIPS",
    category: "TradFi Bridging",
    subtitle: "Connecting decentralized ledgers to regulated banking systems",
    summary: "GDT is engineered to interface directly with local and international banking institutions to create practical on- and off-ramps.",
    bullets: [
      { heading: "Regulated On/Off Ramps", description: "Frictionless conversion between national sovereign currencies and GDT through licensed payment partners." },
      { heading: "Merchant Settlement", description: "Enabling merchants on gadavoice.com to accept GDT while having settlements automatically routed to their local bank accounts in fiat." },
      { heading: "Cross-Border Transfers", description: "Substantially slashing fees and latency associated with traditional SWIFT wire transfers." },
      { heading: "Institutional Compliance", description: "Partnering strictly with regulated financial entities upholding AML/KYC standards." }
    ],
    callout: "Formal banking partnerships will be announced via official releases upon conclusion of legal agreements."
  },
  {
    id: 9,
    title: "TECHNOLOGY AND SECURITY",
    category: "Blockchain Infrastructure",
    subtitle: "Built on high-performance BNB Smart Chain infrastructure",
    summary: "Engineered on proven blockchain rails ensuring institutional-grade reliability, uptime, and broad tooling compatibility.",
    bullets: [
      { heading: "BNB Smart Chain (BEP-20)", description: "Delivers 3-second block finality, exceptional security guarantees, and full EVM compatibility with MetaMask, Trust Wallet, and hardware keys." },
      { heading: "Public Contract Verification", description: "The smart contract code is open and verifiable directly on BscScan for independent audit." },
      { heading: "Independent Security Audits", description: "Comprehensive third-party code review and penetration audits scheduled prior to platform volume scaling." },
      { heading: "Anti-Phishing & Wallet Safety", description: "Official communications occur strictly via gadatoken.com. Gada team members will never ask for private keys or seed phrases." }
    ],
    callout: "Verified BscScan Contract: 0x090458b49D6deAA9F7334a5e628aa26D82A3A082"
  },
  {
    id: 10,
    title: "ROADMAP",
    category: "Milestones",
    subtitle: "Five deliberate phases of sustainable global growth",
    summary: "A milestone-driven roadmap focused on product-market fit, real utility volume, institutional partnerships, and exchange availability.",
    bullets: [
      { heading: "Phase 1: Foundation (Current)", description: "Contract deployment on BNB Smart Chain, BscScan verification, gadatoken.com launch, and Whitepaper release." },
      { heading: "Phase 2: Ecosystem Integration", description: "GDT integration into gadavoice.com messenger, gada.chat social network deployment, and creator reward programs." },
      { heading: "Phase 3: Financial Partnerships", description: "Local and international banking discussions, regulated fiat on/off-ramp APIs, and merchant payment pilot." },
      { heading: "Phase 4: Market Expansion", description: "Decentralized exchange (DEX) liquidity provisioning, Centralized Exchange (CEX) compliance applications, and premier listings." },
      { heading: "Phase 5: Global Scaling", description: "Cross-border trade integration, enterprise commerce toolkits, regional partner expansions, and community governance." }
    ],
    callout: "Execution focused on tangible product delivery before public market expansion."
  },
  {
    id: 11,
    title: "EXCHANGE LISTING STRATEGY",
    category: "Market Expansion",
    subtitle: "Aiming for tier-1 centralized and decentralized exchanges",
    summary: "A rigorous, compliance-first approach to exchange listings ensuring genuine liquidity and authentic transaction demand.",
    bullets: [
      { heading: "1. Build Real User Adoption", description: "Establishing verifiable active user volume and daily transactional velocity across gada.chat and gadavoice.com." },
      { heading: "2. Uncompromising Transparency", description: "Maintaining fully verified contract records, auditable reserves, and updated public technical documentation." },
      { heading: "3. Provision Deep Liquidity", description: "Guaranteeing adequate liquidity pools and a healthy, diversified token holder distribution." },
      { heading: "4. Institutional Compliance", description: "Satisfying stringent legal, regulatory, and technical security audits required by leading global trading venues." }
    ],
    callout: "Listings are contingent upon individual exchange approval criteria and will be announced once finalized."
  },
  {
    id: 12,
    title: "RISK FACTORS AND DISCLAIMER",
    category: "Legal & Compliance",
    subtitle: "Important risk disclosure and regulatory notice",
    summary: "Transparent evaluation of digital asset considerations and statutory utility classification.",
    bullets: [
      { heading: "Information Only", description: "This whitepaper is published for informational purposes only. It does not constitute investment, financial, legal, or tax advice." },
      { heading: "Utility Classification", description: "GDT is a utility token engineered for network functionality. It carries no equity ownership, dividend entitlement, or guarantee of profit." },
      { heading: "Market & Technical Risks", description: "Participants should be cognizant of crypto market volatility, regulatory evolutions, smart contract mechanics, and technological risks." },
      { heading: "Forward-Looking Statements", description: "Roadmaps and partnership projections reflect strategic intentions and are subject to commercial and regulatory developments." }
    ],
    callout: "Participants must conduct their own independent technical and legal due diligence."
  },
  {
    id: 13,
    title: "JOIN THE GADA ECOSYSTEM",
    category: "Contact & Community",
    subtitle: "Official communication channels and verified endpoints",
    summary: "Stay connected through authenticated Gada channels for official announcements, product releases, and development updates.",
    bullets: [
      { heading: "Official Token Portal", description: "gadatoken.com" },
      { heading: "Social Network", description: "gada.chat" },
      { heading: "Messenger & Marketplace", description: "gadavoice.com" },
      { heading: "Official Support & Inquiries", description: "contact@gadatoken.com" }
    ],
    callout: "Always verify URLs and contract addresses against gadatoken.com."
  }
];

export const ROADMAP_DATA: RoadmapPhase[] = [
  {
    phase: 1,
    name: "Foundation & Infrastructure",
    timeline: "Phase 1 - Active",
    status: "in-progress",
    items: [
      "Smart contract deployment on BNB Smart Chain (BEP-20)",
      "Public contract source code verification on BscScan",
      "Official website deployment at gadatoken.com on Cloudflare",
      "Release and indexing of Whitepaper Version 1.0",
      "Initial community communication channels establishment"
    ]
  },
  {
    phase: 2,
    name: "Ecosystem Platform Integration",
    timeline: "Phase 2",
    status: "upcoming",
    items: [
      "Native GDT wallet integration inside gadavoice.com messenger",
      "Micro-tipping and creator rewards engine on gada.chat",
      "Pilot marketplace escrow payment settlement for physical & digital goods",
      "Community ambassador and creator onboarding campaigns",
      "Third-party independent smart contract security audit"
    ]
  },
  {
    phase: 3,
    name: "Financial & Banking Partnerships",
    timeline: "Phase 3",
    status: "upcoming",
    items: [
      "Formal partnership negotiations with regional banking institutions",
      "Regulated fiat on/off-ramp gateway API integration",
      "Merchant checkout SDK for automated GDT-to-fiat settlement",
      "Cross-border remittance corridors setup with partner institutions",
      "Regulatory compliance reporting and licensing alignment"
    ]
  },
  {
    phase: 4,
    name: "Market Liquidity & CEX Expansion",
    timeline: "Phase 4",
    status: "upcoming",
    items: [
      "Decentralized exchange (DEX) liquidity pool launch with locked reserves",
      "CoinMarketCap and CoinGecko verified indexing",
      "Tier-1 and Tier-2 Centralized Exchange (CEX) listing applications",
      "Institutional market maker integration for tight bid-ask spreads",
      "Initial global CEX trading pairs activation"
    ]
  },
  {
    phase: 5,
    name: "Global Scaling & Enterprise Adoption",
    timeline: "Phase 5",
    status: "upcoming",
    items: [
      "Enterprise e-commerce plugins for external storefronts",
      "Regional merchant adoption drives across key growth markets",
      "Next-generation cross-chain interoperability bridges",
      "Decentralized community proposal and voting mechanism",
      "Continuous ecosystem treasury allocation for platform growth"
    ]
  }
];

export const TOKENOMICS_ALLOCATION: TokenAllocation[] = [
  {
    id: 1,
    category: "Ecosystem & Platform Development",
    share: "20%",
    amount: "10,000,000,000 GDT",
    purpose: "Dedicated funding for continuous engineering of gada.chat, gadavoice.com, and future decentralized applications.",
    percentageEstimate: 20
  },
  {
    id: 2,
    category: "Liquidity & Exchange Listings",
    share: "20%",
    amount: "10,000,000,000 GDT",
    purpose: "Reserved for decentralized liquidity pool provisioning and meeting tier-1 centralized exchange capital requirements.",
    percentageEstimate: 20
  },
  {
    id: 3,
    category: "Banking & Strategic Partnerships",
    share: "10%",
    amount: "5,000,000,000 GDT",
    purpose: "TradFi bridge initiatives, licensed fiat gateway integration, and financial institution escrow reserves.",
    percentageEstimate: 10
  },
  {
    id: 4,
    category: "Community Rewards & Incentives",
    share: "5%",
    amount: "2,500,000,000 GDT",
    purpose: "Direct rewards for content creators, streaming audiences, community moderators, and platform adoption.",
    percentageEstimate: 5
  },
  {
    id: 5,
    category: "Team & Advisors",
    share: "15%",
    amount: "7,500,000,000 GDT",
    purpose: "Core contributors and institutional advisors, governed by strict linear vesting cliffs over 24-36 months.",
    percentageEstimate: 15
  },
  {
    id: 6,
    category: "Strategic Reserve",
    share: "30%",
    amount: "15,000,000,000 GDT",
    purpose: "Emergency contingency reserve, long-term protocol security upgrades, and institutional risk management.",
    percentageEstimate: 30
  }
];
