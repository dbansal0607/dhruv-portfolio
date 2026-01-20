// components/projects/projects.data.ts

export type ProjectVisualType =
  | "dashboard"
  | "table"
  | "ml-pipeline"
  | "realtime"
  | "notebook";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;

  visualType: ProjectVisualType;

  highlights: string[];

  tech: string[];

  metrics?: {
    label: string;
    value: string;
  }[];

  links: {
    live?: string;
    github?: string;
    api?: string;
  };

  accent: {
    from: string;
    to: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "truestate",
    title: "TruEstate",
    subtitle: "Sales Management System",
    description:
      "A production-grade full-stack sales transaction management system with advanced search, filtering, sorting, and pagination. Designed to handle large retail datasets efficiently with a clean, modern UI.",

    visualType: "table",

    highlights: [
      "Full-text search across customer name & phone number",
      "Multi-select filtering with AND / OR logic (7+ filters)",
      "Stable sorting with state preservation",
      "Efficient pagination with ellipsis & metadata",
      "REST API with query-driven architecture",
    ],

    tech: [
      "Node.js",
      "Express",
      "React",
      "Vite",
      "Axios",
      "REST API",
      "JavaScript",
    ],

    metrics: [
      { label: "Search Complexity", value: "O(n)" },
      { label: "Filters", value: "7+" },
      { label: "Page Size", value: "10 rows" },
    ],

    links: {
      live: "https://tru-estate-psi.vercel.app/",
      github: "https://github.com/dbansal0607/TruEstate",
    },

    accent: {
      from: "#6C7CFF",
      to: "#3B82F6",
    },
  },

  {
    id: "solar-pv",
    title: "Solar PV Digital Twin",
    subtitle: "ML Dashboard & Prediction API",
    description:
      "A real-time Solar PV power prediction system combining machine learning, FastAPI, and a live Streamlit dashboard. Built to simulate real-world solar plant monitoring and forecasting.",

    visualType: "dashboard",

    highlights: [
      "End-to-end ML training pipeline",
      "Live digital twin simulation",
      "FastAPI prediction server",
      "Batch CSV prediction support",
      "EDA & advanced visualizations",
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],

    metrics: [
      { label: "R² Score", value: "0.9982" },
      { label: "MAPE", value: "4.93%" },
      { label: "Max Error", value: "0.05 W" },
    ],

    links: {
      github: "https://github.com/dbansal0607/solar-pv-project",
    },

    accent: {
      from: "#22C55E",
      to: "#16A34A",
    },
  },

  {
    id: "heart-disease",
    title: "Heart Disease Prediction",
    subtitle: "Machine Learning Classification",
    description:
      "A complete ML pipeline for predicting heart disease risk using structured patient data. Includes EDA, feature engineering, multiple models, and detailed evaluation.",

    visualType: "notebook",

    highlights: [
      "Cleaned & preprocessed medical dataset",
      "Exploratory Data Analysis & correlations",
      "Multiple classification models",
      "Evaluation with ROC-AUC & confusion matrix",
      "Feature importance analysis",
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "Jupyter",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],

    links: {
      github: "https://github.com/dbansal0607/Heart-Disease-Prediction",
    },

    accent: {
      from: "#F97316",
      to: "#EA580C",
    },
  },

  {
    id: "wispr",
    title: "Wispr",
    subtitle: "Real-Time Voice-to-Text Desktop App",
    description:
      "A minimal, distraction-free desktop voice-to-text app with real-time transcription, push-to-talk controls, and intelligent silence detection. Built for writers and developers.",

    visualType: "realtime",

    highlights: [
      "Real-time speech-to-text (Deepgram)",
      "Push-to-talk & mic energy detection",
      "Automatic stop on silence",
      "Interim + final transcripts",
      "Cross-platform desktop app",
    ],

    tech: [
      "React",
      "TypeScript",
      "Tauri",
      "Web Audio API",
      "Deepgram",
      "Vite",
    ],

    links: {
      github: "https://github.com/dbansal0607/wispr-tauri",
    },

    accent: {
      from: "#A855F7",
      to: "#7C3AED",
    },
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  accent: {
    from: string;
  };
  links?: {
    live?: string;
    github?: string;
  };
  visualTitle?: string;
  visualSubtitle?: string;
}

