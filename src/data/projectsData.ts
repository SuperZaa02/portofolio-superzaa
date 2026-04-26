export type ProjectType = "open-source" | "closed-source";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  type: ProjectType;
  liveLink?: string;
  githubLink?: string;
  downloadLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Azyqs Authentication System Template",
    description: "A modern web application template with robust authentication system featuring user registration, login, profile management, two-factor authentication (TOTP), and Google reCAPTCHA v2 integration. Enterprise-level security practices.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "JWT", "TOTP"],
    type: "open-source",
    liveLink: "https://auth-temp.azyqs.my.id/",
    githubLink: "https://github.com/SuperZaa02/azyqs-auth-template",
  },
  {
    id: "2",
    title: "Secure Console Messaging App",
    description: "Terminal-based secure messaging application with real end-to-end encryption. Built from scratch with advanced cryptography implementations using RSA and AES encryption algorithms.",
    techStack: ["Node.js", "TypeScript", "RSA Encryption", "AES Encryption", "Cryptography"],
    type: "open-source",
    downloadLink: "https://github.com/SuperZaa02/secure-console-messaging-app/releases/tag/1.0.0",
    githubLink: "https://github.com/SuperZaa02/secure-console-messaging-app",
  },
  {
    id: "3",
    title: "Computer-Based Testing System (CBT)",
    description: "Full-featured Computer-Based Testing platform for educational institutions and corporate training. Includes student assessment, result management, and real-time monitoring capabilities.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Server Actions", "Serverless"],
    type: "closed-source",
    liveLink: "https://cbt.azyqs.my.id",
  },
  {
    id: "4",
    title: "NestJS Bank API",
    description: "Enterprise-grade banking API built with NestJS framework. Implements complex financial transaction logic, account management, and secure payment processing with comprehensive error handling.",
    techStack: ["NestJS", "TypeScript", "RESTful API", "Database Integration", "Authentication"],
    type: "closed-source",
  },
  {
    id: "5",
    title: "SMAN 10 Kota Bekasi Official Website",
    description: "Official website for SMAN 10 Kota Bekasi high school. Features school information, news & announcements, event management, student portal, and comprehensive institutional showcase.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
    type: "closed-source",
    liveLink: "https://sman10bekasi.sch.id",
  },
  {
    id: "6",
    title: "OSIS SMAN 10 Bekasi Website V2",
    description: "Enhanced version of the Student Organization website with improved features including better member management, event tracking, announcement system, and modern UI/UX improvements.",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    type: "closed-source",
    liveLink: "https://osis.sman10bekasi.sch.id",
  },
  {
    id: "7",
    title: "SMAN 10 Kota Bekasi Web App (Development)",
    description: "Latest iteration of SMAN 10 Kota Bekasi web application with cutting-edge features, performance optimization, enhanced user experience, and modern development practices.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "tRPC"],
    type: "closed-source",
  },
];