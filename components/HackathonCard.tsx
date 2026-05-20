
import React from 'react';
import { HackathonClub } from '../types';

interface HackathonCardProps {
  club: HackathonClub;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ club }) => {
  return (
    <div className="glass group relative p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
      {/* Background glow effect */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 ${club.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
      
      <div className={`p-3 rounded-xl ${club.color} bg-opacity-10 mb-4 inline-block`}>
        <div className={`w-6 h-6 ${club.color.replace('bg-', 'text-')}`}>
          {club.icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
        {club.id}. {club.title}
      </h3>
      
      <p className="text-slate-400 text-sm mb-6 line-clamp-2">
        {club.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {club.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-xs font-semibold text-blue-500 uppercase tracking-widest group-hover:gap-2 transition-all">
        Join Club
        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

export default HackathonCard;
