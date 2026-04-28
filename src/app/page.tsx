"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/animated-background";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const imageLift = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
  ];

  const founders = [
    { name: "Placeholder Name", role: "Founder & President", emoji: "👩🏽‍💼", desc: "Passionate about healthcare equity and youth leadership." },
    { name: "Placeholder Name", role: "Head of Outreach", emoji: "👩🏼‍💼", desc: "Driving on-the-ground impact and school programs." },
    { name: "Placeholder Name", role: "Medical Coordinator", emoji: "👩🏻‍💼", desc: "Ensuring all campaigns remain factually rigorous." }
  ];

  const timeline = [
    { year: "2024", title: "Inception", desc: "Teal Trails was founded with a mission to bridge the gap in women's health awareness among youth." },
    { year: "2025", title: "First Campaign", desc: "Launched our first school-level educational drive on menstrual health and breaking stigmas." },
    { year: "2026", title: "Mobile Camps", desc: "Rolled out mobile clinics to reach rural areas lacking direct medical access and HPV vaccine info." }
  ];

  const purposeCards = [
    {
      eyebrow: "Why it matters",
      title: "Women&apos;s health cannot depend on silence.",
      desc: "When information is hidden by stigma or jargon, care gets delayed. We turn urgent topics into clear, respectful conversations."
    },
    {
      eyebrow: "How we grow",
      title: "We are a to-be-grown NGO with a clear path.",
      desc: "Teal Trails is intentionally early-stage, designed to scale through partnerships with schools, clinics, and local volunteers."
    },
    {
      eyebrow: "What we protect",
      title: "Dignity, access, and trust.",
      desc: "Every workshop and camp is built to make healthcare feel usable, local, and human."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-cream-100">
      
      {/* 1. HERO SECTION WITH AURORA BACKGROUND */}
      <AuroraBackground className="min-h-[92vh] flex flex-col items-center justify-center border-b border-cream-900 border-opacity-40 pb-20 sm:pb-28 md:pb-32">
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-12 sm:pt-16 -mt-4 sm:-mt-6"
        >
          <motion.div variants={fadeUp} className="inline-block px-5 py-2 rounded-full bg-teal-100/80 backdrop-blur-sm text-teal-800 font-semibold text-sm mb-4 border border-teal-200/50 shadow-[0_10px_25px_rgba(31,41,55,0.08)]">
            A student-led, to-be-grown NGO
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal-900 leading-[1.03] tracking-tight max-w-4xl mx-auto drop-shadow-[0_10px_30px_rgba(31,41,55,0.08)]">
            Healing through <span className="text-teal-600 italic">awareness</span>, <br className="hidden md:block"/> 
            empowering through <span className="text-rose-500 underline decoration-4 underline-offset-4 decoration-rose-300">action</span>.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-charcoal-800 max-w-2xl mx-auto leading-relaxed font-medium mt-4 sm:mt-6 drop-shadow-[0_4px_14px_rgba(31,41,55,0.05)]">
            Teal Trails is dedicated to enhancing access, awareness, and understanding of healthcare in India, with a strong emphasis on women&apos;s health and stigmatized diseases like cervical cancer.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[0.7rem] sm:text-sm md:text-base uppercase tracking-[0.22em] text-teal-700/90 font-semibold max-w-3xl leading-6 sm:leading-7">
            Still growing by design, so every workshop, partnership, and community visit can be built with care.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 sm:pt-8 w-full sm:w-auto">
            <Link href="/support" className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_18px_40px_rgba(205,92,92,0.24)] transition-all hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base">
              <HeartHandshake className="w-5 h-5" />
              Support Our Mission
            </Link>
            <Link href="#mission" className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur border-2 border-teal-600/20 hover:border-teal-600 text-teal-800 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_14px_30px_rgba(31,41,55,0.08)] transition-all hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </AuroraBackground>

      {/* 2. WHY IT MATTERS */}
      <section className="w-full pt-32 sm:pt-36 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <motion.span variants={fadeUp} className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Why It Matters</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">Small today, built to grow responsibly.</motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-charcoal-800 text-lg leading-relaxed">
              Teal Trails exists because women&apos;s health becomes easier to ignore when it is not explained clearly, respectfully, and early. We are here to make that conversation visible, practical, and scalable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purposeCards.map((card, i) => (
              <motion.div
                variants={imageLift}
                whileHover={{ y: -8 }}
                key={i}
                className="rounded-2xl border border-cream-900 bg-cream-100 p-8 shadow-sm cut-paper transition-transform duration-300"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-teal-700 font-bold">{card.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-serif text-charcoal-900 leading-tight">{card.title}</h3>
                <p className="mt-4 text-charcoal-800 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. ABOUT US / MISSION STATEMENT */}
      <section id="mission" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream-200 relative">
        <motion.div 
           initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
           className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="flex items-center gap-4 opacity-80">
              <div className="h-px w-12 bg-charcoal-800"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-charcoal-800">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
              Healthcare shouldn&apos;t be a challenge to pursue—it should be a resource that reaches you.
            </h2>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              We are a youth-driven initiative deeply committed to breaking the silence surrounding women&apos;s health in India. Millions of women face barriers due to stigma, lack of education, or limited access to medical resources. 
            </p>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              By fostering an open dialogue and providing actionable healthcare resources—like community camps, school education drives, and affordable vaccine awareness—we are lighting the trail toward equitable healthcare for all.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-cream-100 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative aspect-square max-w-md mx-auto w-full group">
            <div className="absolute inset-0 bg-teal-600 rounded-2xl rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-6"></div>
            <div className="absolute inset-0 bg-rose-500 rounded-2xl -rotate-3 scale-105 opacity-10 transition-transform duration-500 group-hover:-rotate-6"></div>
            
            <div className="relative h-full w-full bg-cream-500 rounded-2xl border-2 border-cream-900 p-8 flex flex-col justify-center items-center text-center shadow-xl overflow-hidden cut-paper group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-40 h-40 bg-teal-100 rounded-full flex items-center justify-center mb-6 border border-teal-200 z-10 shrink-0">
               <div className="text-teal-800 font-serif font-bold text-xl leading-none">Teal<br/>Trails</div>
              </div>
              <h3 className="font-serif text-3xl mb-4 text-charcoal-900 z-10">Change Starts With Awareness</h3>
              <p className="text-charcoal-800 z-10">A community dedicated to healing, empowering, and advocating.</p>
              
               <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')"}}></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. TIMELINE SECTION (Replaces Impact/Myths) */}
      <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream-100 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Our Journey</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-charcoal-900">How Far We&apos;ve Come</motion.h2>
          </div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div variants={fadeUp} key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-teal-800 text-teal-100 px-6 py-3 rounded-full font-bold text-xl shadow-lg border border-teal-600 font-serif w-max">
                    {item.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-cream-900 relative cut-paper">
                    <div className="absolute w-4 h-4 bg-rose-500 rounded-full -left-2 top-1/2 -translate-y-1/2 hidden md:block"></div>
                    <h3 className="text-2xl font-serif text-teal-800 mb-3">{item.title}</h3>
                    <p className="text-charcoal-800 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. FOUNDERS SECTION */}
      <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-teal-800 text-cream-100 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <motion.span variants={fadeUp} className="text-teal-300 font-bold tracking-widest uppercase text-sm block mb-3">The Team</motion.span>
             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif">Meet The Founders</motion.h2>
             <motion.p variants={fadeUp} className="mt-4 text-teal-100 text-lg">Passionate students united by a singular mission to eradicate stigma and bridge healthcare gaps.</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, i) => (
              <motion.div variants={fadeUp} key={i} className="bg-teal-900/50 backdrop-blur border border-teal-700 rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 text-center group">
                <motion.div whileHover={{ y: -6, scale: 1.04 }} className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-teal-600 bg-white shadow-xl flex items-center justify-center text-6xl shadow-inner transition-transform duration-300">
                  {founder.emoji}
                </motion.div>
                <h3 className="text-2xl font-serif text-white mb-1">{founder.name}</h3>
                <p className="text-rose-400 font-medium mb-4 text-sm uppercase tracking-wider">{founder.role}</p>
                <p className="text-teal-100/80 leading-relaxed text-sm">{founder.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. ON-THE-GROUND GALLERY */}
      <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream-200">
         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <span className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Field Work</span>
                <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">Hope In Action</h2>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  variants={imageLift}
                  whileHover={{ y: -8, rotate: i % 2 === 0 ? 0.75 : -0.75 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative rounded-xl overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-[16/9]' : 'aspect-square'} shadow-sm bg-cream-300`}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={src} alt="Fieldwork" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
         </motion.div>
      </section>

      {/* 7. CONTACT US SECTION */}
      <section id="contact" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-white border-t border-cream-900">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-teal-600 font-bold tracking-widest uppercase text-sm block mb-3">Get Involved</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">Let&apos;s start a conversation.</h2>
              <p className="text-charcoal-800 text-lg leading-relaxed">
                Whether you want to partner for a camp, volunteer on the ground, or help a growing student-led NGO build stronger programs, we&apos;d love to hear from you.
              </p>
            </div>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 text-charcoal-800">
                <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Our Headquarters</h4>
                  <p className="text-charcoal-800">Placeholder Address, Hyderabad, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-charcoal-800">
                <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-charcoal-800">hello@tealtrails.org</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={fadeUp} className="bg-cream-100 p-8 md:p-10 rounded-2xl border border-cream-900 shadow-sm cut-paper">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-800">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-800">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal-800">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal-800">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2">
                <MessageSquare size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
