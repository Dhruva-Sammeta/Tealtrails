"use client";
import React from 'react';

export const AuroraBackground = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-cream-100 ${className}`}>
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base aurora layer */}
        <div className="absolute inset-0 opacity-90">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-100/75 via-cream-200/55 to-rose-100/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_520px_at_50%_18%,rgba(10,143,150,0.18)_0%,transparent_55%)]"></div>
        </div>
        
        {/* Animated aurora waves */}
        <div className="absolute inset-0">
          {/* Wave 1 */}
          <div 
            className="absolute inset-0 opacity-80 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse 800px 600px at 50% 20%, rgba(10, 143, 150, 0.22) 0%, transparent 52%)',
              animation: 'aurora1 7s ease-in-out infinite alternate'
            }}
          ></div>
          
          {/* Wave 2 */}
          <div 
            className="absolute inset-0 opacity-70 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse 600px 400px at 80% 30%, rgba(205, 92, 92, 0.20) 0%, transparent 52%)',
              animation: 'aurora2 5s ease-in-out infinite alternate-reverse'
            }}
          ></div>
          
          {/* Wave 3 */}
          <div 
            className="absolute inset-0 opacity-65 blur-2xl"
            style={{
              background: 'radial-gradient(ellipse 700px 500px at 20% 60%, rgba(51, 194, 203, 0.26) 0%, transparent 52%)',
              animation: 'aurora3 8s ease-in-out infinite alternate'
            }}
          ></div>
          
          {/* Wave 4 */}
          <div 
            className="absolute inset-0 opacity-50 blur-xl"
            style={{
              background: 'radial-gradient(ellipse 900px 300px at 60% 80%, rgba(251, 240, 223, 0.72) 0%, transparent 52%)',
              animation: 'aurora4 6s ease-in-out infinite alternate-reverse'
            }}
          ></div>
        </div>
        
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100/72 via-transparent to-cream-100/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes aurora1 {
          0% { transform: translateX(-10vw) translateY(-5vh) rotate(0deg) scale(1); }
          50% { transform: translateX(5vw) translateY(3vh) rotate(180deg) scale(1.1); }
          100% { transform: translateX(10vw) translateY(-3vh) rotate(360deg) scale(0.9); }
        }
        
        @keyframes aurora2 {
          0% { transform: translateX(8vw) translateY(4vh) rotate(45deg) scale(0.8); }
          50% { transform: translateX(-3vw) translateY(-2vh) rotate(225deg) scale(1.2); }
          100% { transform: translateX(-8vw) translateY(6vh) rotate(405deg) scale(0.9); }
        }
        
        @keyframes aurora3 {
          0% { transform: translateX(-5vw) translateY(2vh) rotate(90deg) scale(1.1); }
          50% { transform: translateX(7vw) translateY(-4vh) rotate(270deg) scale(0.8); }
          100% { transform: translateX(-2vw) translateY(5vh) rotate(450deg) scale(1.0); }
        }
        
        @keyframes aurora4 {
          0% { transform: translateX(3vw) translateY(-2vh) rotate(135deg) scale(0.9); }
          50% { transform: translateX(-6vw) translateY(1vh) rotate(315deg) scale(1.1); }
          100% { transform: translateX(4vw) translateY(-6vh) rotate(495deg) scale(0.8); }
        }
      `}</style>
    </div>
  );
};
