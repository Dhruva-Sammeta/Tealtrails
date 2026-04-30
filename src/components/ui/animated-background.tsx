"use client";
import React from "react";

type AuroraBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
};

export const AuroraBackground = ({
  children,
  className = "",
  imageSrc = "/content/background.png",
}: AuroraBackgroundProps) => {
  return (
    <div className={`relative w-full overflow-hidden bg-cream-100 ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-background-fade"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/70 via-cream-100/40 to-cream-100/85 opacity-0 animate-background-fade" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_55%)] mix-blend-screen opacity-0 animate-background-fade" />
      </div>

      <div className="relative z-10 w-full h-full">{children}</div>

      <style>{`
        @keyframes backgroundFade {
          0% { opacity: 0; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-background-fade {
          animation: backgroundFade 0.9s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};
