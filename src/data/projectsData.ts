export type ProjectType = "open-source" | "closed-source";

export interface Project {
  id: string;

  title: string;

  shortDescription: string;

  description: string;

  type: ProjectType;

  role?: string;

  techStack: string[];

  features?: string[];

  architecture?: string[];

  screenshots?: string[];

  liveLink?: string;
  githubLink?: string;
  downloadLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Azyqs Authentication System",
    shortDescription:
      "Reusable authentication template with modern security features.",
    description:
      "Designed and developed a reusable authentication template using Next.js and TypeScript. Implements secure user registration, login, profile management, JWT-based authentication, TOTP two-factor authentication, Google reCAPTCHA integration, and WebAuthn support. Built with maintainability and extensibility in mind.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "JWT", "TOTP"],
    type: "open-source",
    role: "Full Stack Developer",
    githubLink: "https://github.com/SuperZaa02/azyqs-auth",
    features: [
      "JWT Authentication",
      "TOTP 2FA",
      "WebAuthn",
      "Profile Management",
      "reCAPTCHA Integration",
    ],
    architecture: ["Prisma ORM", "PostgreSQL", "Server Actions", "Next.js"],
  },
  // {
  //   id: "2",
  //   title: "Secure Console Messaging App",
  //   description:
  //     "Built a secure terminal-based messaging application with end-to-end encryption. Designed the communication protocol and implemented RSA for key exchange and AES for message encryption, ensuring confidential message delivery between users.",
  //   techStack: ["Node.js", "TypeScript", "RSA Encryption", "AES Encryption", "Cryptography"],
  //   type: "open-source",
  //   downloadLink: "https://github.com/SuperZaa02/secure-console-messaging-app/releases/tag/1.0.0",
  //   githubLink: "https://github.com/SuperZaa02/secure-console-messaging-app",
  // },
  {
    id: "3",
    title: "Computer-Based Testing System (CBT)",
    shortDescription:
      "Full-featured CBT platform for educational institutions.",
    description:
      "Developed a complete Computer-Based Testing platform responsible for system architecture, exam management, student assessment workflows, submission tracking, automated scoring, and real-time monitoring. The project focuses on reliability, auditability, and performance for high-concurrency exam sessions.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Server Actions", "Serverless"],
    type: "closed-source",
    liveLink: "https://cbt.azyqs.my.id",
    role: "Full Stack Developer",
    architecture: ["Serverless", "Prisma", "PostgreSQL"],
  },
  // {
  //   id: "4",
  //   title: "NestJS Bank API",
  //   description:
  //     "Engineered a banking backend API using NestJS. Implemented account management, transaction processing, authentication mechanisms, validation pipelines, and secure financial operations with structured error handling and scalable architecture.",
  //   techStack: ["NestJS", "TypeScript", "RESTful API", "Database Integration", "Authentication"],
  //   type: "closed-source",
  // },
  {
    id: "5",
    title: "SMAN 10 Kota Bekasi Official Website",
    shortDescription: "Official school website with CMS-focused backend features.",
    description:
      "Led backend development for the school's official website, building content management features, news publication workflows, and performance optimizations for public access. Focused on maintainable APIs and easy content updates for non-technical staff.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
    type: "closed-source",
    liveLink: "https://sman10bekasi.sch.id",
    role: "Backend Developer",
  },
  // {
  //   id: "6",
  //   title: "OSIS SMAN 10 Bekasi Website V2",
  //   description:
  //     "Redesigned and rebuilt the student organization website with a focus on user experience and maintainability. Implemented event management, announcement systems, member information management, and responsive user interfaces.",
  //   techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  //   type: "closed-source",
  //   liveLink: "https://osis.sman10bekasi.sch.id",
  // },
  // {
  //   id: "7",
  //   title: "SMAN 10 Kota Bekasi Web App (Development)",
  //   description:
  //     "Currently developing the next-generation school web application. Responsible for system design, performance optimization, modern frontend architecture, API integration, and implementing scalable solutions using Next.js and tRPC.",
  //   techStack: ["Next.js", "TypeScript", "Tailwind CSS", "tRPC"],
  //   type: "closed-source",
  // },
];