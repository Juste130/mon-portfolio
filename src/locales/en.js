import { footer } from "framer-motion/client";

export const en = {
  nav: {
    home: 'Home',
    journey: 'Journey',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    available: 'Available for new projects',
    subtitle: "I build robust digital experiences.",
    fullstack: "Full-Stack Developer",
    fullstackDesc: "Frontend focused. I create ultra-responsive, fluid, and accessible user interfaces powered by robust Backend architectures (Next.js, Node.js, Laravel).",
    blockchain: "Blockchain Developer (EVM)",
    blockchainDesc: "Specialized in the EVM ecosystem (Polygon, Ethereum). I design secure Smart Contracts (Solidity) and innovative DApps.",
    viewProjects: "View my projects",
    contactMe: "Contact me"
  },
  journey: {
    title: "My Journey",
    subtitle: "My professional evolution and training, shaping my dual expertise today.",
    experiences: [
      {
        id: 1,
        year: 'May 2026',
        title: 'Web3 & Smart Contracts Specialization',
        description: 'Certifications on Updraft Cyfrin: Solidity Smart Contracts development, blockchain fundamentals, and Web3 wallet security.',
        role: 'Training & Incubation',
      },
      {
        id: 2,
        year: 'Nov 2025 - May 2026',
        title: 'Developer & DevSecOps (CyberIncub)',
        description: '6-month incubation (ASIN, ADPME, LuxDev). Training in Cybersecurity, DevSecOps, and Architecture. Built "Gnonvi" (Go, Electron, React) for PSSIE compliance management in Benin.',
        role: 'Fullstack Developer',
      },
      {
        id: 3,
        year: 'Nov 2025 - Present',
        title: 'Freelance Full-Stack Developer',
        description: 'Design and deployment of the "biggigui" marketplace as a freelancer.',
        role: 'Freelancer',
      },
      {
        id: 4,
        year: 'Oct 2025',
        title: 'NASA Space Apps Challenge',
        description: 'Built an intelligent search engine based on NASA articles. Team selected in the Top 3 to represent Benin internationally.',
        role: 'Fullstack Developer',
      },
      {
        id: 5,
        year: 'Oct 2025 - Present',
        title: 'Web3 Thesis Project (CryptoZombies)',
        description: 'Created a DApp for traditional contract management via NFTs. Smart contract developed and deployed on Testnet, finishing Frontend/Backend integration.',
        role: 'Blockchain Developer',
      },
      {
        id: 6,
        year: 'Apr 2025 - Aug 2025',
        title: 'La Forge (GLOBODAI)',
        description: '4-month hybrid internship. Collaborated with a team of developers on various application projects.',
        role: 'Fullstack Developer',
      },
      {
        id: 7,
        year: 'May 2024',
        title: 'Internship at Bourjon',
        description: 'Collaborative development of an e-learning platform during a 6-week internship.',
        role: 'Fullstack Developer',
      },
      {
        id: 8,
        year: '2022 - Present',
        title: 'Software Engineering Bachelor (IFRI)',
        description: 'Comprehensive academic program in software engineering. Currently awaiting thesis defense.',
        role: 'Academic',
      }
    ]
  },
  skills: {
    title: "Toolbox",
    subtitle: "The technological ecosystem I build with daily, including modern AI tools.",
    expertise: "Technical Expertise",
    environment: "Tools & Environment"
  },
  projects: {
    title: "Recent Projects",
    subtitle: "A selection of my most impactful achievements, from Fullstack design to Smart Contracts.",
    live: "Live Demo",
    source: "Source Code",
    solo: "Solo Project",
    collab: "Collaboration",
    training: "Training",
    projectsList: [
      {
        id: 1,
        title: 'Contractify',
        description: 'Smart contract management platform based on NFTs and Polygon Blockchain. Handles contract creation, signing, and clause enforcement.',
      },
      {
        id: 2,
        title: 'Fitness Latour',
        description: 'Non-responsive website for a fictional fitness gym to practice my skills.',
      },
      {
        id: 3,
        title: 'La Révélation API',
        description: 'Backend for a booking platform for the La Révélation hotel complex.',
      },
      {
        id: 4,
        title: 'Hackathon NASA 2025',
        description: 'Apollo project created for the NASA Hackathon 2025, an intelligent search engine based on NASA articles.',
      },
      {
        id: 5,
        title: 'Teido Pay',
        description: 'Innovative payment solution. Training project to strengthen my skills.',
      },
      {
        id: 6,
        title: 'Basket Benin Info',
        description: 'Information platform about basketball in Benin. Training project to strengthen my skills.',
      },
      {
        id: 7,
        title: 'Todo App Cyberincub',
        description: 'Task management application developed during my time at Cyberincub. Training project to practice CI/CD.',
      }
    ]
  },
  contact: {
    title: "Ready to collaborate?",
    subtitle: "I am always open to discussing new projects, technical challenges, or exciting opportunities in Fullstack or Blockchain.",
    email: "Send an email",
    github: "My GitHub"
  },
  footer: {
    text: "© {year} Juste HOUEZO — All rights reserved.",
  }
}
