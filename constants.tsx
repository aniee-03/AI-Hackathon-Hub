import React from 'react';
import { HackathonClub } from './types';

export const HACKATHON_CLUBS: HackathonClub[] = [
  {
    id: 1,
    title: "Skill Based Hackathon Club",
    description: "Focus on mastering specific tools and languages through intensive build sessions.",
    tags: ["React", "Python", "Rust"],
    color: "bg-blue-500",
    memberCount: 12500,
    eligibility: "Intermediate to Advanced developers",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Problem Solving Hackathon Club",
    description: "Tackle real-world challenges using algorithmic and creative thinking.",
    tags: ["Algorithms", "Data Structures", "Logic"],
    color: "bg-green-500",
    memberCount: 8400,
    eligibility: "Open to all logic enthusiasts",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Competition Focused Hackathon Club",
    description: "High-stakes environments designed for competitive coders looking to win.",
    tags: ["Prizes", "Speed", "Excellence"],
    color: "bg-red-500",
    memberCount: 5200,
    eligibility: "Previous hackathon winners preferred",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Learning with Mentorship Hackathon Club",
    description: "Begin your journey with guidance from industry veterans and experts.",
    tags: ["Education", "Guidance", "Growth"],
    color: "bg-yellow-500",
    memberCount: 15000,
    eligibility: "Students and entry-level developers",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Tech Domain Hackathon Club",
    description: "Deep dives into specific sectors like AI, Blockchain, or Cybersecurity.",
    tags: ["AI", "Web3", "Cloud"],
    color: "bg-purple-500",
    memberCount: 9800,
    eligibility: "Domain-specific knowledge required",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Community & Social Impact Hackathon Club",
    description: "Code for a cause. Projects focused on helping society and local communities.",
    tags: ["Social Good", "Sustainability"],
    color: "bg-pink-500",
    memberCount: 7100,
    eligibility: "Passionate about humanitarian tech",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 7,
    title: "Online / Hybrid Hackathon Club",
    description: "Participate from anywhere in the world with flexible scheduling.",
    tags: ["Remote", "Global", "Flexible"],
    color: "bg-indigo-500",
    memberCount: 25000,
    eligibility: "Global - No geographical restrictions",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Startup & Innovation Hackathon Club",
    description: "Bridging the gap between a weekend project and a scalable business.",
    tags: ["Venture", "Product", "Pitch"],
    color: "bg-orange-500",
    memberCount: 4300,
    eligibility: "Entrepreneurial mindset",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 9,
    title: "Beginner Friendly Hackathon Club",
    description: "A safe and supportive space for those writing their first lines of code.",
    tags: ["Welcome", "No-Stress", "Entry"],
    color: "bg-teal-500",
    memberCount: 18000,
    eligibility: "Novice to Junior developers",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 10,
    title: "Annual Mega Hackathon Club",
    description: "The grand finale. A massive event featuring thousands of participants.",
    tags: ["Flagship", "Annual", "Epic"],
    color: "bg-rose-500",
    memberCount: 45000,
    eligibility: "Registration opens once a year; all welcome",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
];