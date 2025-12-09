// Import logos from assets
import quicksightLogo from '../assets/quicksight.svg';
import kafkaLogo from '../assets/kafka.svg';
import powerBiLogo from '../assets/powerbi.png';
import zapierLogo from '../assets/zapier.png';
import tableauLogo from '../assets/tableau.png';
import measurablLogo from '../assets/measurable.webp';
import adfLogo from "../assets/azure-data-factory.jpeg";
import snowflakeLogo from "../assets/snowflake.png"

export const availableServices = [
  {
    id: "amazon-quicksight",
    name: "Amazon QuickSight",
    description:
      "Amazon BI service to create dashboards and interactive visualisations.",
    icon: quicksightLogo, 
    iconBg: "",
  },
  {
    id: "kafka",
    name: "Kafka",
    description:
      "Real-time data streaming, event-driven architectures and messaging systems.",
    icon: kafkaLogo,
    iconBg: "",
  },
  {
    id: "power-bi",
    name: "Power BI",
    description:
      "Microsoft BI service to create dashboards and data visualisations.",
    icon: powerBiLogo,
    iconBg: "",
  },
  {
    id: "zapier",
    name: "Zapier",
    description:
      "Automation tool that connects various apps and services to automate workflows.",
    icon: zapierLogo,
    iconBg: "",
  },
  {
    id: "tableau",
    name: "Tableau",
    description:
      "BI service that helps seeing and transforming data into actionable insights.",
    icon: tableauLogo,
    iconBg: "",
  },
  {
    id: "measurabl",
    name: "Measurabl",
    description:
      "Enable the push and pull of data to and from Measurabl via an API.",
    icon: measurablLogo,
    iconBg: "",
  },
];


export const existingConnections = [
  // ---------- PAGE 1 (1–15) ----------
  {
    id: 1,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Energy",
    source: "Carbon",
    sourceType: "carbon",
    entity: "ABC Group LTD – Energy",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 2,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Logistics",
    source: "Carbon",
    sourceType: "carbon",
    entity: "ABC Group LTD – Logistics",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 3,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Operations",
    source: "Carbon",
    sourceType: "carbon",
    entity: "ABC Group LTD – Operations",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 4,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Electricity ToU",
    source: "Utility",
    sourceType: "utility",
    entity: "135 Albert St – Electricity",
    interval: "ToU",
    url: "https://example.com/copy"
  },
  {
    id: 5,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Water",
    source: "Utility",
    sourceType: "utility",
    entity: "135 Albert St – Water",
    interval: "Monthly",
    url: "https://example.com/copy"
  },
  {
    id: 6,
    integration: "Kafka",
    icon: kafkaLogo,
    name: "Corporate Finance",
    source: "Carbon",
    sourceType: "carbon",
    entity: "ABC Group LTD – Finance",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 7,
    integration: "Zapier",
    icon: zapierLogo,
    name: "General Operations",
    source: "Carbon",
    sourceType: "carbon",
    entity: "ABC Group LTD – Ops",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 8,
    integration: "Zapier",
    icon: zapierLogo,
    name: "Gas",
    source: "Utility",
    sourceType: "utility",
    entity: "135 Albert St – Gas",
    interval: "Yearly",
    url: "https://example.com/copy"
  },
  {
    id: 9,
    integration: "Measurabl",
    icon: measurablLogo, 
    name: "Environmental",
    source: "Carbon",
    sourceType: "carbon",
    entity: "Global Portfolio",
    interval: "Monthly",
    url: "https://example.com/copy"
  },
  {
    id: 10,
    integration: "Snowflake",
    icon: snowflakeLogo,
    name: "Scope 3 – Supply Chain",
    source: "Carbon",
    sourceType: "carbon",
    entity: "Supply Chain HQ",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 11,
    integration: "Azure Data Factory",
    icon: adfLogo,
    name: "Daily ETL Feed",
    source: "Utility",
    sourceType: "utility",
    entity: "Energy Aggregator",
    interval: "Daily",
    url: "https://example.com/copy"
  },
  {
    id: 12,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Transport Fuel",
    source: "Carbon",
    sourceType: "carbon",
    entity: "Fleet Management",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 13,
    integration: "Amazon QuickSight",
    icon: quicksightLogo, 
    name: "Manufacturing",
    source: "Carbon",
    sourceType: "carbon",
    entity: "Factory Plant – Main",
    interval: "-",
    url: "https://example.com/copy"
  },
  {
    id: 14,
    integration: "Kafka",
    icon: kafkaLogo,
    name: "Real-Time Sensors",
    source: "Utility",
    sourceType: "utility",
    entity: "IoT Gateways",
    interval: "Real-Time",
    url: "https://example.com/copy"
  },
  {
    id: 15,
    integration: "Zapier",
    icon: zapierLogo,
    name: "General Uploads",
    source: "Carbon",
    sourceType: "carbon",
    entity: "HQ Office",
    interval: "Weekly",
    url: "https://example.com/copy"
  },

  // ---------- PAGE 2 (16–30) ----------
  ...Array.from({ length: 15 }, (_, i) => ({
    id: 16 + i,
    integration: ["Amazon QuickSight", "Kafka", "Zapier", "Snowflake"][i % 4],
    icon: [
      quicksightLogo,
      kafkaLogo,
      zapierLogo,
      snowflakeLogo
    ][i % 4],
    name: [
      "Energy",
      "Fleet",
      "Procurement",
      "Water",
      "Gas",
      "Facilities",
      "Transport",
      "Buildings",
      "Machinery",
      "Carbon Sync",
      "Utility Feed",
      "Operational Logs",
      "Sensors",
      "Manufacturing",
      "Compliance"
    ][i],
    source: i % 2 === 0 ? "Carbon" : "Utility",
    sourceType: i % 2 === 0 ? "carbon" : "utility",
    entity: `Entity Group ${i + 1}`,
    interval: ["-", "Monthly", "Daily", "Yearly"][i % 4],
    url: "https://example.com/copy"
  })),

  // ---------- PAGE 3 (31–45) ----------
  ...Array.from({ length: 15 }, (_, i) => ({
    id: 31 + i,
    integration: ["Measurabl", "Zapier", "Kafka"][i % 3],
    icon: [
      measurablLogo,
      zapierLogo,
      kafkaLogo
    ][i % 3],
    name: `Integration ${i + 1}`,
    source: i % 2 === 0 ? "Carbon" : "Utility",
    sourceType: i % 2 === 0 ? "carbon" : "utility",
    entity: `Group Node Level ${i + 1}`,
    interval: ["-", "Monthly", "Daily"][i % 3],
    url: "https://example.com/copy"
  }))
];

