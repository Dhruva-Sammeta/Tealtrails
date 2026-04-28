export default function MythVsFact() {
  const cards = [
    { myth: "Women don't need as much protein as men.", fact: "Women need adequate protein for muscle strength, bone health, and hormonal balance, just like men." },
    { myth: "Drinking cranberry juice cures UTIs.", fact: "Cranberry juice may help prevent recurrent UTIs, but it doesn't cure active infections. Medical treatment is needed." },
    { myth: "You only need to visit a gynecologist if you're pregnant or have a problem.", fact: "Regular reproductive health check-ups (even when you feel fine) can detect issues early, support fertility, and keep your overall health in check." },
    { myth: "The HPV vaccine is only for people who are already at risk.", fact: "The HPV vaccine is most effective before exposure, which is why it's recommended for girls in their teens and early 20s. It helps protect against cervical cancer and other HPV-related diseases." },
    { myth: "Irregular periods are always normal.", fact: "Occasional stress can shift cycles, but frequent irregularities may signal PCOS, thyroid, or other conditions. Don't ignore it." },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-charcoal-900 mb-4 tracking-wide relative inline-block">
          MYTH <span className="text-rose-500 font-bold px-4">VS</span> FACT
        </h1>
        <p className="text-charcoal-800 text-lg uppercase tracking-widest mt-2 font-medium">Women's Health Edition</p>
      </div>

      <div className="space-y-12">
        {cards.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Collage shadow effect */}
            <div className="absolute inset-0 bg-teal-800 rounded-xl translate-x-2 translate-y-3 opacity-10"></div>
            
            <div className="relative bg-rose-600 rounded-xl p-8 shadow-xl text-white transform transition-transform group-hover:-translate-y-1 border-2 border-white/20" style={{ borderImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMGgxMHYxMEgwem0wIDBoMTB2MTBIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=') 10 stretch", borderStyle: "solid", borderWidth: "8px" }}>
               {/* Tape detail */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-cream-500/80 -rotate-2 mix-blend-overlay"></div>
              
              <div className="mb-8">
                <span className="text-cream-200 uppercase tracking-widest text-sm font-bold border-b border-cream-200/30 pb-1">Myth</span>
                <p className="font-serif text-2xl md:text-3xl mt-4 leading-relaxed font-medium">"{item.myth}"</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-teal-200 uppercase tracking-widest text-sm font-bold">Fact</span>
                <p className="text-cream-100 text-lg md:text-xl mt-3 leading-relaxed">{item.fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
