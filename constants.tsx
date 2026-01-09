
import { Project, Article } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mornet',
    title: 'Mornet',
    description: 'A cutting-edge full-stack AI group collaboration platform.',
    longDescription: 'Mornet is designed to streamline how developers interact with AI agents in a shared environment. It leverages advanced vector databases and real-time synchronization to provide a seamless collaborative experience.',
    techStack: ['Next.js', 'PostgreSQL', 'LangChain', 'OpenAI'],
    aiUsage: 'Used LangChain for agent orchestration and Pinecone for semantic memory.',
    link: 'https://mornet-project.vercel.app/',
    image: 'https://screenrec.com/share/mk0JYS1uW5',
    category: 'Full-stack'
  },
  {
    id: 'edubridge',
    title: 'EduBridge Urdu',
    description: 'Converting complex English YouTube lectures into simple Urdu using AI.',
    longDescription: 'EduBridge Urdu breaks language barriers in education. It automatically transcribes, translates, and simplifies high-level academic content into easily digestible Urdu summaries.',
    techStack: ['Python', 'Gemini API', 'Next.js', 'YouTube API'],
    aiUsage: 'Utilized Gemini 1.5 Pro for nuanced translation and educational simplification.',
    link: 'https://dev.to/muskanfatim/turn-any-youtube-lecture-into-simple-urdu-edubridge-urdu-107j',
    image: 'https://picsum.photos/seed/edu/800/600',
    category: 'Education'
  },
  {
    id: 'medicat',
    title: 'Medicat AI Explainer',
    description: 'Gemini 3 Hackathon project simplifying medical science for patients.',
    longDescription: 'Developed during the Gemini 3 Hackathon, Medicat acts as a bridge between complex medical terminology and patient understanding, ensuring healthcare is accessible to all.',
    techStack: ['Gemini 3 Flash', 'React', 'Tailwind CSS'],
    aiUsage: 'Leveraged Gemini 3 high-speed reasoning for real-time medical term simplification.',
    link: 'https://www.kaggle.com/competitions/gemini-3/writeups/medicat-ai-explainer-science-made-simple',
    image: 'https://screenrec.com/share/3KNgER0V9O',
    category: 'AI'
  },
  {
    id: 'ai-class',
    title: 'Claude CLI & Chatbot',
    description: 'Custom AI workspace featuring a CLI and interactive Next.js chatbot.',
    longDescription: 'A comprehensive AI toolkit that includes a Python-based CLI for developer productivity and a polished web interface for creative brainstorming.',
    techStack: ['Python', 'Claude API', 'Next.js', 'Tailwind'],
    aiUsage: 'Integrated Claude 3.5 Sonnet for superior coding assistance and reasoning.',
    link: 'https://youtu.be/nNz6FX7HZqo',
    image: 'https://screenrec.com/share/sKDhqwe491',
    category: 'Tooling',
    videoUrl: 'https://www.youtube.com/embed/nNz6FX7HZqo'
  },
  {
    id: 'shopping-agent',
    title: 'Shopping Agent Chatbot',
    description: 'Autonomous shopping assistant that understands intent and preferences.',
    longDescription: 'A demonstration of agentic workflows where the AI can search products, compare prices, and provide personalized recommendations in a short-form interface.',
    techStack: ['React', 'Agentic Workflows', 'Tailwind'],
    aiUsage: 'Implemented tool-calling features to fetch real-time product data.',
    link: 'https://youtube.com/shorts/RKm4rSrKS_A',
    image: 'https://picsum.photos/seed/shop/800/600',
    category: 'AI',
    videoUrl: 'https://www.youtube.com/embed/RKm4rSrKS_A'
  }
];

export const ARTICLES: Article[] = [
  {
    title: 'Building EduBridge: An AI Journey',
    platform: 'Dev.to',
    link: 'https://dev.to/muskanfatim/turn-any-youtube-lecture-into-simple-urdu-edubridge-urdu-107j',
    date: 'Oct 2024',
    excerpt: 'How I leveraged LLMs to bridge the gap in educational resources for Urdu speakers.'
  },
  {
    title: 'Medicat AI: Winning Gemini 3 Hackathon',
    platform: 'Kaggle',
    link: 'https://www.kaggle.com/competitions/gemini-3/writeups/medicat-ai-explainer-science-made-simple',
    date: 'Dec 2024',
    excerpt: 'Detailed write-up on using multimodal models for patient education.'
  }
];
