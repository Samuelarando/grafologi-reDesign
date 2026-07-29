import React from 'react';

export const Metrics: React.FC = () => {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">A</div>
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-amber-600 flex items-center justify-center text-[10px] text-white font-bold">B</div>
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">C</div>
      </div>
      <div className="text-xs">
        <p className="font-bold text-white tracking-wide">1.2K+ Peserta</p>
        <p className="text-slate-400 text-[10px]">Tersertifikasi CHA™</p>
      </div>
    </div>
  );
};