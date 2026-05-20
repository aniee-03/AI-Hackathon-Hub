import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CodeBackground from './components/CodeBackground';
import HackathonCard from './components/HackathonCard';
import { HACKATHON_CLUBS } from './constants';
import { View, User, Competition, Participation, HackathonClub } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>('home');
  const [user, setUser] = useState<User>({ isLoggedIn: false });
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  
  // Local state for profile settings
  const [profile, setProfile] = useState({
    email: 'innovator@hackathonhub.io',
    phone: '+1 (555) 000-1234',
    userId: 'UID-8829-XJ2',
    bio: 'Full-stack enthusiast and habitual hackathon winner. Passionate about building decentralized systems and AI-driven user experiences.',
    skills: 'React, TypeScript, Tailwind CSS, Python',
    resumeName: '',
    hackathonInterests: 'AI/ML, Fintech, Web3, ClimateTech',
    interestedSkills: 'Rust, Golang, GraphQL, Kubernetes',
    preferredClubId: 1,
    location: 'San Francisco, CA',
    github: 'github.com/innovator99',
    linkedin: 'linkedin.com/in/hackerhub-pro'
  });

  // Privacy and Security settings state
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showActivity: true,
    shareWithSponsors: false,
    searchable: true,
    twoFactorEnabled: false,
    emailNotifications: true,
    dataSharing: true,
    teamInvites: 'members', 
    mentorDiscoverable: true,
    anonymousAnalytics: true
  });

  // Mock Data for Competitions
  const competitions: Competition[] = [
    {
      id: 1,
      name: "Global AI Innovators 2025",
      memberCount: 3450,
      requiredSkills: ["Python", "TensorFlow", "FastAPI"],
      eligibility: "Open to Students & Fresh Grads",
      date: "Oct 12-14, 2025",
      status: "Upcoming",
      color: "border-blue-500",
      clubName: "Tech Domain Hackathon Club"
    },
    {
      id: 2,
      name: "Cyber Defense Hack",
      memberCount: 890,
      requiredSkills: ["C++", "Networking", "Cryptography"],
      eligibility: "Professional Developers only",
      date: "Nov 05, 2025",
      status: "Upcoming",
      color: "border-red-500",
      clubName: "Skill Based Hackathon Club"
    },
    {
      id: 3,
      name: "Web3 World Summit",
      memberCount: 2100,
      requiredSkills: ["Solidity", "React", "Ether.js"],
      eligibility: "Open to all backgrounds",
      date: "Dec 20-22, 2025",
      status: "Upcoming",
      color: "border-purple-500",
      clubName: "Startup & Innovation Hackathon Club"
    }
  ];

  // Mock Data for Global Archive Events
  const globalEvents: Competition[] = [
    {
      id: 201,
      name: "Open Source Summit Hack 2024",
      memberCount: 15200,
      requiredSkills: ["Git", "C", "Rust"],
      eligibility: "Global - All experience levels",
      date: "August 2024",
      status: "Completed",
      color: "border-indigo-500",
      clubName: "Annual Mega Hackathon Club"
    },
    {
      id: 202,
      name: "Green Tech Innovation Drive",
      memberCount: 6800,
      requiredSkills: ["IoT", "Data Visualization", "Python"],
      eligibility: "Environmental Tech Enthusiasts",
      date: "September 2024",
      status: "Completed",
      color: "border-emerald-500",
      clubName: "Community & Social Impact Hackathon Club"
    },
    {
      id: 203,
      name: "DeFi Architects Challenge",
      memberCount: 4100,
      requiredSkills: ["Solidity", "Fintech API", "Economics"],
      eligibility: "Blockchain Developers",
      date: "July 2024",
      status: "Completed",
      color: "border-amber-500",
      clubName: "Tech Domain Hackathon Club"
    }
  ];

  const participations: Participation[] = [
    {
      id: 101,
      name: "Summer Code Sprint 2024",
      memberCount: 1200,
      requiredSkills: ["React", "Node.js"],
      eligibility: "Students and Freelancers",
      date: "June 2024",
      status: "Completed",
      teamName: "CodeCrafters",
      rank: "Top 10",
      color: "border-green-500",
      clubName: "Beginner Friendly Hackathon Club"
    },
    {
      id: 102,
      name: "HealthTech Hackathon",
      memberCount: 450,
      requiredSkills: ["Python", "Cloud Computing"],
      eligibility: "All participants with medical or tech background",
      date: "Jan 2025",
      status: "Completed",
      teamName: "MedSync",
      rank: "Winner",
      color: "border-teal-500",
      clubName: "Community & Social Impact Hackathon Club"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ isLoggedIn: true, username: 'Innovator_99', email: 'innovator@hackathonhub.io' });
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser({ isLoggedIn: false });
    setView('home');
  };

  const selectedClub = HACKATHON_CLUBS.find(c => c.id === profile.preferredClubId) || HACKATHON_CLUBS[0];

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
            <header className="mb-12 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600 opacity-10 blur-[100px] pointer-events-none rounded-full"></div>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4 uppercase">
                HACKATHONS <span className="text-blue-500">CLUB</span>
              </h1>
              <p className="text-slate-400 mb-10 max-w-2xl text-lg">Browse our elite selection of specialized hackathon tracks and find your next challenge.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
              {HACKATHON_CLUBS.map(club => (
                <HackathonCard key={club.id} club={club} />
              ))}
            </div>

            <section className="mt-20">
               <div className="flex items-center gap-4 mb-10">
                  <div className="h-px flex-1 bg-slate-800"></div>
                  <h2 className="text-2xl font-black uppercase tracking-widest text-slate-300">Hackathon Events</h2>
                  <div className="h-px flex-1 bg-slate-800"></div>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {competitions.map((comp) => (
                  <div key={comp.id} className={`glass p-8 rounded-3xl border-l-8 ${comp.color} shadow-2xl relative overflow-hidden group`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{comp.name}</h3>
                        <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">{comp.clubName}</p>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 whitespace-nowrap self-start md:self-center">
                        {comp.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 uppercase font-black">Members Participating</p>
                            <p className="text-xl font-black text-slate-200">{comp.memberCount.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase font-black mb-3 tracking-widest">Skill Stack Requirements</p>
                          <div className="flex flex-wrap gap-2">
                            {comp.requiredSkills.map(s => (
                              <span key={s} className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full mt-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98]">
                      REGISTER NOW
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'competitions':
        return (
          <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
            <header className="mb-10">
              <h1 className="text-4xl font-black mb-2 tracking-tight uppercase text-white">UPCOMING <span className="text-blue-500">EVENTS</span></h1>
              <p className="text-slate-400">Discover elite coding challenges across all our specialized clubs.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {competitions.map((comp) => (
                <div key={comp.id} className={`glass p-8 rounded-3xl border-l-8 ${comp.color} shadow-2xl hover:bg-white/[0.03] transition-all`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1">{comp.name}</h3>
                      <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">{comp.clubName}</p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full border border-blue-500/20 whitespace-nowrap self-start md:self-center">
                      {comp.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase font-black">Members Participating</p>
                          <p className="text-xl font-black text-slate-200">{comp.memberCount.toLocaleString()}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black mb-2 tracking-widest">Eligibility Protocol</p>
                        <p className="text-sm text-slate-300 font-medium leading-relaxed">{comp.eligibility}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black mb-3 tracking-widest">Skill Stack Requirements</p>
                        <div className="flex flex-wrap gap-2">
                          {comp.requiredSkills.map(s => (
                            <span key={s} className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                         <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Hackathon Window</p>
                         <p className="text-sm font-bold text-slate-400">{comp.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'participated':
        return (
          <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
            <header className="mb-10">
              <h1 className="text-4xl font-black mb-2 tracking-tight uppercase text-white">PARTICIPATION <span className="text-emerald-500">HISTORY</span></h1>
              <p className="text-slate-400">Review your past performance and club contributions.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {participations.map((part) => (
                <div key={part.id} className={`glass p-8 rounded-3xl border-l-8 ${part.color} shadow-2xl`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-white">{part.name}</h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Club: {part.clubName}</p>
                    </div>
                    <div className="text-right">
                       <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-white px-3 py-1.5 rounded-xl shadow-lg shadow-emerald-500/20">
                        {part.rank}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       </div>
                       <div>
                          <p className="text-[10px] text-slate-500 uppercase font-black">Engagement</p>
                          <p className="text-lg font-bold text-slate-200">{part.memberCount.toLocaleString()} Participants</p>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
            <header className="mb-10">
              <h1 className="text-4xl font-black mb-2 tracking-tight uppercase text-white">GLOBAL <span className="text-indigo-500">EVENTS ARCHIVE</span></h1>
              <p className="text-slate-400">Explore the world's most significant past hackathons and their impact on the tech community.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {globalEvents.map((event) => (
                <div key={event.id} className={`glass p-8 rounded-3xl border-t-4 ${event.color} shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                   <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-slate-800 text-slate-400 px-3 py-1 rounded-full">{event.date}</span>
                   </div>
                   <h3 className="text-xl font-black text-white mb-2">{event.name}</h3>
                   <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-6">{event.clubName}</p>
                   
                   <div className="space-y-4 pt-6 border-t border-white/5">
                      <div className="flex justify-between items-center">
                         <span className="text-xs text-slate-500 font-bold uppercase">Attendees</span>
                         <span className="text-sm font-black text-slate-200">{event.memberCount.toLocaleString()}</span>
                      </div>
                   </div>
                   <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:bg-white/10 transition-all">
                      VIEW FULL RECAP
                   </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto py-12 px-6">
            <header className="mb-10">
              <h1 className="text-4xl font-black mb-2 tracking-tight uppercase text-white">PREFERENCES <span className="text-blue-500">& SETTINGS</span></h1>
              <p className="text-slate-400">Configure your professional technical focus and club targets.</p>
            </header>

            <div className="space-y-8">
              <section className="glass p-8 rounded-3xl border border-slate-800/50 shadow-xl">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-blue-400">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                  </div>
                  HACKATHON FOCUS
                </h3>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Preferred Track</label>
                      <select 
                        value={profile.preferredClubId}
                        onChange={(e) => setProfile({...profile, preferredClubId: parseInt(e.target.value)})}
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-sm font-bold text-slate-200 outline-none"
                      >
                        {HACKATHON_CLUBS.map(club => (
                          <option key={club.id} value={club.id}>{club.id}. {club.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                       <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Club Insights</p>
                       <div className="space-y-4">
                          <div className="flex justify-between items-center">
                             <span className="text-sm font-medium text-slate-400">Active Hackers</span>
                             <span className="text-sm font-black text-blue-400">{selectedClub.memberCount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-start gap-4">
                             <span className="text-sm font-medium text-slate-400 shrink-0">Eligibility</span>
                             <span className="text-sm font-black text-slate-200 text-right">{selectedClub.eligibility}</span>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Detailed Bio & Goals</label>
                    <textarea 
                      rows={3}
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      placeholder="Tell the community about your hacking journey..."
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-sm resize-none placeholder:text-slate-700 font-medium font-mono text-white"
                    />
                  </div>
                </div>
              </section>

              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => setView('dashboard')}
                  className="px-12 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                >
                  SAVE PREFERENCES
                </button>
              </div>
            </div>
          </div>
        );
      case 'account':
        if (!user.isLoggedIn) {
          return (
            <div className="flex items-center justify-center min-h-[80vh]">
              <div className="glass p-10 rounded-2xl w-full max-w-md border border-slate-800/50 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full"></div>
                <div className="flex justify-center gap-4 mb-8 relative z-10">
                  <button 
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-2 font-bold transition-all rounded-lg ${authMode === 'login' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 bg-white/5'}`}
                  >
                    LOGIN
                  </button>
                  <button 
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-2 font-bold transition-all rounded-lg ${authMode === 'register' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 bg-white/5'}`}
                  >
                    REGISTER
                  </button>
                </div>

                <h1 className="text-3xl font-bold mb-2 text-center relative z-10 uppercase tracking-tighter text-white">
                  {authMode === 'login' ? 'Access Portal' : 'New Identity'}
                </h1>

                <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Username/Email</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-500 mb-1">Password</label>
                    <input 
                      type="password" 
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all uppercase tracking-widest text-sm"
                  >
                    {authMode === 'login' ? 'INITIALIZE' : 'GENERATE'}
                  </button>
                </form>
              </div>
            </div>
          );
        }
        return (
          <div className="max-w-6xl mx-auto py-12 px-6 lg:px-12">
            {/* Real Profile Layout */}
            <div className="relative mb-12">
               {/* Cover Area */}
               <div className="h-48 md:h-64 rounded-3xl overflow-hidden glass border border-slate-800/50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               </div>
               
               {/* Header Content */}
               <div className="px-8 -mt-16 md:-mt-24 relative z-10 flex flex-col md:flex-row items-end gap-6">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-slate-900 border-4 border-slate-950 flex items-center justify-center text-6xl md:text-8xl font-black text-white shadow-2xl relative group overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-80"></div>
                     <span className="relative z-10">{user.username?.[0]}</span>
                     <button className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                     </button>
                  </div>
                  <div className="flex-1 pb-2">
                     <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-1">{user.username}</h2>
                     <div className="flex flex-wrap items-center gap-4 text-slate-400 font-medium text-sm">
                        <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {profile.location}</span>
                        <span className="flex items-center gap-1 text-blue-400 font-bold uppercase tracking-widest text-[10px] bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">Elite Rank #42</span>
                     </div>
                  </div>
                  <div className="pb-4 flex gap-3">
                     <button onClick={() => setView('settings')} className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">Edit Profile</button>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Left Column: Info */}
               <div className="space-y-8">
                  <section className="glass p-8 rounded-3xl border border-slate-800/50">
                     <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">About Me</h3>
                     <p className="text-slate-300 font-medium leading-relaxed">{profile.bio}</p>
                     
                     <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                        <a href="#" className="flex items-center justify-between group">
                           <span className="text-sm text-slate-400 font-medium group-hover:text-white transition-colors">GitHub</span>
                           <span className="text-xs text-blue-400 font-bold">{profile.github}</span>
                        </a>
                        <a href="#" className="flex items-center justify-between group">
                           <span className="text-sm text-slate-400 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                           <span className="text-xs text-blue-400 font-bold">{profile.linkedin}</span>
                        </a>
                     </div>
                  </section>

                  <section className="glass p-8 rounded-3xl border border-slate-800/50">
                     <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Top Proficiency</h3>
                     <div className="flex flex-wrap gap-2">
                        {profile.skills.split(',').map(s => (
                           <span key={s} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300">{s.trim()}</span>
                        ))}
                     </div>
                  </section>
               </div>

               {/* Center/Right: Stats & Activity */}
               <div className="lg:col-span-2 space-y-8">
                  {/* Stats Bar */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {[
                        { label: 'Events Joined', value: '14', color: 'text-blue-400' },
                        { label: 'Wins/Awards', value: '3', color: 'text-emerald-400' },
                        { label: 'Projects Built', value: '28', color: 'text-purple-400' },
                        { label: 'Reputation', value: '2.4k', color: 'text-amber-400' },
                     ].map(stat => (
                        <div key={stat.label} className="glass p-6 rounded-3xl border border-slate-800/50 text-center">
                           <p className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                     ))}
                  </div>

                  {/* Privacy & Security (Moved here to fill real profile) */}
                  <section className="glass p-8 rounded-3xl border border-slate-800/50 shadow-xl">
                    <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-emerald-400">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      IDENTITY & PRIVACY PROTOCOLS
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                          <div>
                             <span className="text-sm font-bold text-slate-200 uppercase">Network Searchability</span>
                             <p className="text-[10px] text-slate-500 font-medium mt-1">Found by recruiters & teammates.</p>
                          </div>
                          <button 
                            onClick={() => setPrivacySettings({...privacySettings, searchable: !privacySettings.searchable})}
                            className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${privacySettings.searchable ? 'bg-emerald-500' : 'bg-slate-700'}`}
                          >
                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${privacySettings.searchable ? 'translate-x-6' : 'translate-x-1'}`} />
                          </button>
                       </div>

                       <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                          <div>
                             <span className="text-sm font-bold text-slate-200 uppercase">Proactive Mentorship</span>
                             <p className="text-[10px] text-slate-500 font-medium mt-1">Accept support from verified experts.</p>
                          </div>
                          <button 
                            onClick={() => setPrivacySettings({...privacySettings, mentorDiscoverable: !privacySettings.mentorDiscoverable})}
                            className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${privacySettings.mentorDiscoverable ? 'bg-emerald-500' : 'bg-slate-700'}`}
                          >
                            <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${privacySettings.mentorDiscoverable ? 'translate-x-6' : 'translate-x-1'}`} />
                          </button>
                       </div>

                       <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                          <div>
                             <span className="text-sm font-bold text-slate-200 uppercase">Two-Factor Shield</span>
                             <p className="text-[10px] text-slate-500 font-medium mt-1">High-security authentication.</p>
                          </div>
                          <button 
                            onClick={() => setPrivacySettings({...privacySettings, twoFactorEnabled: !privacySettings.twoFactorEnabled})}
                            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${privacySettings.twoFactorEnabled ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}
                          >
                             {privacySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                          </button>
                       </div>
                    </div>
                  </section>

                  {/* Dangerous Operations */}
                  <div className="pt-4">
                     <button onClick={handleLogout} className="w-full py-4 rounded-3xl bg-red-600/10 border border-red-900/20 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-lg hover:shadow-red-500/20">Terminate Portal Session</button>
                  </div>
               </div>
            </div>
          </div>
        );
      default: // home
        return (
          <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Elite Developer Hub
              </span>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-tight uppercase">
                HACKATHON <span className="text-blue-500">HUB</span>
              </h1>
              
              <p className="text-xl md:text-3xl font-medium text-slate-300 leading-relaxed mb-12">
                The premier destination to <span className="text-white font-bold">manifest your vision</span> and <span className="text-white font-bold">dominate</span> the <span className="text-blue-400 underline decoration-2 underline-offset-4">global tech circuit</span>.
              </p>

              <button 
                onClick={() => setView('dashboard')}
                className="group relative px-10 py-5 rounded-2xl bg-white text-black font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors uppercase tracking-widest">
                  Explore Clubs
                  <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold text-white">10k+</p>
                  <p className="text-[10px] uppercase tracking-wider font-black text-slate-400">HACKERS</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold text-white">10</p>
                  <p className="text-[10px] uppercase tracking-wider font-black text-slate-400">CLUBS</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold text-white">1M+</p>
                  <p className="text-[10px] uppercase tracking-wider font-black text-slate-400">PRIZES</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-[10px] uppercase tracking-wider font-black text-slate-400">COUNTRIES</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      <CodeBackground />
      
      <Sidebar 
        currentView={currentView} 
        setView={setView} 
        user={user}
        onLogout={handleLogout}
      />

      <main className="flex-1 overflow-y-auto z-10">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;