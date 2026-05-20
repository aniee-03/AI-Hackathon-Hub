// Fixed: Added React import to resolve missing namespace error for React.ReactNode
import React from 'react';

export interface HackathonClub {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
  memberCount: number;
  eligibility: string;
}

export interface Competition {
  id: number;
  name: string;
  memberCount: number;
  requiredSkills: string[];
  eligibility: string;
  date: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  color: string;
  clubName?: string;
}

export interface Participation extends Competition {
  teamName: string;
  rank?: string;
}

export type View = 'home' | 'dashboard' | 'competitions' | 'participated' | 'events' | 'settings' | 'account';

export interface User {
  isLoggedIn: boolean;
  username?: string;
  email?: string;
  avatar?: string;
}