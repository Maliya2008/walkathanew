import React from 'react';

interface SideSkyscraperProps {
  side: 'left' | 'right';
}

export const SideSkyscraperColumn: React.FC<SideSkyscraperProps> = ({ side }) => {
  return (
    <aside
      aria-label={`Side Advertisement ${side === 'left' ? 'Left' : 'Right'}`}
      className="hidden min-[1360px]:flex sticky top-20 shrink-0 w-[160px] flex-col gap-6 py-2 select-none z-20 pointer-events-auto transition-colors"
    >
      {/* 1st Skyscraper Ad */}
      <div className="flex flex-col items-center">
        <span className="text-[9px] tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
          දැන්වීම්
        </span>
        <div className="w-[160px] h-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-xs flex items-center justify-center">
          <iframe
            title={`${side} Skyscraper Ad 1`}
            srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"/><style>*{box-sizing:border-box;}body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style></head><body><script type="text/javascript">atOptions={'key':'05ee890ed059b98d213910f338ece6d0','format':'iframe','height':600,'width':160,'params':{}};</script><script type="text/javascript" src="https://www.highrevenueformat.com/05ee890ed059b98d213910f338ece6d0/invoke.js"></script></body></html>`}
            width="160"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
          />
        </div>
      </div>

      {/* 2nd Skyscraper Ad (Underneath the 1st Ad) */}
      <div className="flex flex-col items-center">
        <span className="text-[9px] tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1">
          දැන්වීම්
        </span>
        <div className="w-[160px] h-[600px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-xs flex items-center justify-center">
          <iframe
            title={`${side} Skyscraper Ad 2`}
            srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"/><style>*{box-sizing:border-box;}body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style></head><body><script type="text/javascript">atOptions={'key':'05ee890ed059b98d213910f338ece6d0','format':'iframe','height':600,'width':160,'params':{}};</script><script type="text/javascript" src="https://www.highrevenueformat.com/05ee890ed059b98d213910f338ece6d0/invoke.js"></script></body></html>`}
            width="160"
            height="600"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
          />
        </div>
      </div>
    </aside>
  );
};

// Backwards-compatible export
export const DesktopSideSkyscrapers: React.FC = () => {
  return null;
};
