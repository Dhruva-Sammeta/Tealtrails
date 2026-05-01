"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, MapPin, Mail, MessageSquare, Play, X } from "lucide-react";
import { InstagramLogoIcon as Instagram } from "@radix-ui/react-icons";
import { motion, AnimatePresence, animate } from "framer-motion";
import { AuroraBackground } from "@/components/ui/animated-background";

function AnimatedCounter({ value, hasAnimatedCounts }: { value: number; hasAnimatedCounts: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimatedCounts && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 0.9,
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, hasAnimatedCounts]);

  return <span ref={nodeRef}>0</span>;
}

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

  const campaignStats = [
    { value: 100, label: "patients served", suffix: "+" },
    { value: 20, label: "kilometers reached", suffix: "+" }
  ];

  const [hasAnimatedCounts, setHasAnimatedCounts] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:vaibhavi_babu@oakridge.in?subject=${subject}&body=${body}`;
  };

  const galleryImages = [
    { src: "/content/gallery/09C39AE3-F047-4F1A-A5A0-B92644FD15A1.JPG", alt: "Teal Trails fieldwork photo 1" },
    { src: "/content/gallery/12498F8F-E502-4913-AA21-4093FEB032CD_4_5005_c.jpeg", alt: "Teal Trails fieldwork photo 2" },
    { src: "/content/gallery/1C15EE3F-0398-4E5B-A82E-846BE63DA3A5_4_5005_c.jpeg", alt: "Teal Trails fieldwork photo 3" },
    { src: "/content/gallery/3FEF755F-9BAD-4643-9601-20AA26FFECC6.JPG", alt: "Teal Trails fieldwork photo 4" },
    { src: "/content/gallery/4611A6A4-BBBE-43B2-AEDD-31A36B1D63FB.JPG", alt: "Teal Trails fieldwork photo 5" },
    { src: "/content/gallery/7CF91FBD-B7E0-4681-A0F9-26ADE9572A70_4_5005_c.jpeg", alt: "Teal Trails fieldwork photo 6" },
    { src: "/content/gallery/7D1782D7-EBF9-4B92-A7E3-A50055BE2E04.JPG", alt: "Teal Trails fieldwork photo 7" },
    { src: "/content/gallery/8B849F23-896B-4960-8433-E4DE0505A2D1_4_5005_c.jpeg", alt: "Teal Trails fieldwork photo 8" },
    { src: "/content/gallery/9859090A-7F4B-4B6A-AF69-80290CE5E1F0.JPG", alt: "Teal Trails fieldwork photo 9" },
    { src: "/content/gallery/FCD770A9-5990-4CDA-A05D-132D55F5EF72.JPG", alt: "Teal Trails fieldwork photo 10" },
    { src: "/content/gallery/9EF91955-2163-4EB8-88E3-1724878F0C6F.png", alt: "Teal Trails fieldwork photo 11" },
    { src: "/content/gallery/CBAF61CC-3642-4894-BD42-94ED09F9D627.JPG", alt: "Teal Trails fieldwork photo 12" }
  ];

  const founders = [
    {
      name: "Vaibhavi Babu",
      role: "IBDP student at Oakridge International School",
      image: "/content/headshot.png",
      desc: "Founder and youth advocate focused on making cervical cancer education clear, respectful, and easy to act on."
    }
  ];

  const timeline = [
    { year: "2024", title: "Inception", desc: "Teal Trails began to close the gap in cervical cancer awareness among young people." },
    { year: "2025", title: "First Campaign", desc: "Launched our first school campaign focused on cervical cancer, HPV, and early screening awareness." },
    { year: "2026", title: "Building Forward", desc: "Expanding the work with more schools, clearer prevention messages, and stronger community reach." }
  ];

  const purposeCards = [
    {
      eyebrow: "Why it matters",
      title: "Breaking the traditional silence.",
      desc: "When women's health is shrouded in cultural taboo, screening gets delayed. We dismantle the stigma, replacing shame with clear, empowering conversations."
    },
    {
      eyebrow: "How we grow",
      title: "School conversations make prevention feel real.",
      desc: "Teal Trails is intentionally early-stage and built to scale through school sessions, clinics, and local partnerships."
    },
    {
      eyebrow: "What we protect",
      title: "Early detection, access, and trust.",
      desc: "Every workshop and camp is built to leave people with one clear next step."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col overflow-hidden bg-cream-100">
      
      {/* 1. HERO SECTION WITH AURORA BACKGROUND */}
      <AuroraBackground imageSrc="/content/background.png" className="min-h-[92vh] flex flex-col items-center justify-center border-b border-cream-900 border-opacity-40 pb-20 sm:pb-28 md:pb-32">
        <motion.div 
          initial="hidden" animate="show" variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-12 sm:pt-16 -mt-4 sm:-mt-6"
        >
          <motion.div variants={fadeUp} className="inline-block px-5 py-2 rounded-full bg-teal-100/80 backdrop-blur-sm text-teal-800 font-semibold text-sm mb-4 border border-teal-200/50 shadow-[0_10px_25px_rgba(31,41,55,0.08)]">
            A student-led cervical cancer awareness initiative
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal-900 leading-[1.03] tracking-tight max-w-4xl mx-auto [text-shadow:_0_6px_22px_rgba(255,255,255,0.65)]">
            Healing through <span className="text-teal-600 italic">awareness</span>, <br className="hidden md:block"/> 
            empowering through <span className="text-rose-500 underline decoration-4 underline-offset-4 decoration-rose-300">action</span>.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-charcoal-800 max-w-2xl mx-auto leading-relaxed font-medium mt-4 sm:mt-6 [text-shadow:_0_4px_12px_rgba(255,255,255,0.55)]">
            Challenging traditional taboos to bring cervical cancer awareness, HPV education, and prevention support to the people who need it most.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[0.7rem] sm:text-sm md:text-base uppercase tracking-[0.22em] text-black-200/90 font-semibold max-w-3xl leading-6 sm:leading-7 [text-shadow:_0_3px_10px_rgba(255,255,255,0.55)]">
            Dismantling cultural stigmas and breaking the silence around cervical health in India through education and community outreach.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 sm:pt-8 w-full sm:w-auto">
            <Link href="#campaign-one" className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_18px_40px_rgba(205,92,92,0.24)] transition-all hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base">
              <HeartHandshake className="w-5 h-5" />
              See Campaign One
            </Link>
            <a href="https://www.instagram.com/teal.trails/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur border-2 border-teal-600/20 hover:border-pink-500 text-teal-800 hover:text-pink-600 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_14px_30px_rgba(31,41,55,0.08)] transition-all hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Follow Our Journey
            </a>
          </motion.div>
        </motion.div>
      </AuroraBackground>

      {/* 2. WHY IT MATTERS */}
      <section className="w-full pt-32 sm:pt-36 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-14">
            <div className="max-w-3xl order-1">
              <motion.span id="mission" variants={fadeUp} className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">About Us</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">A mission to make prevention accessible.</motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-charcoal-800 text-lg leading-relaxed">
                Teal Trails is a student-led initiative born out of a stark reality: in India, traditional stigmas and cultural silence around women's health cost lives. Cervical cancer is highly preventable, yet thousands are lost because facts are hidden behind taboos. We are here to break those barriers, making conversations about the cervix visible, respectful, and culturally accessible.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="order-2 shrink-0 self-center md:self-auto">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-[32px] overflow-hidden bg-cream-100 shadow-md border border-cream-900 flex items-center justify-center p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                  <Image src="/logo.jpg" alt="Teal Trails Logo" fill sizes="(max-width: 768px) 160px, 192px" className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purposeCards.map((card, i) => (
              <motion.div
                variants={imageLift}
                whileHover={{ y: -8 }}
                key={i}
                className="rounded-2xl border border-cream-900 bg-cream-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 cut-paper"
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
              Overcoming traditional barriers to care.
            </h2>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              We are a youth-driven initiative committed to tearing down the deeply rooted cultural taboos surrounding the cervix and women's health in India. For too long, modesty and misinformation have acted as barriers to life-saving care.
            </p>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              By fostering open dialogue and normalizing conversations about HPV and screening, we are confronting these stigmas head-on—lighting the trail toward earlier action, bodily autonomy, and better care.
            </p>
            <div className="pt-4">
              <Link href="#campaign-one" className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-cream-100 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                See Campaign One <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="relative max-w-md mx-auto w-full">
            <div className="absolute -inset-6 rounded-[32px] shadow-[0_0_80px_20px_rgba(10,143,150,0.15)] pointer-events-none"></div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-cream-900/60 shadow-[0_20px_60px_rgba(31,41,55,0.18)]">
              <Image
                src="/content/poster.png"
                alt="Teal Trails campaign poster"
                fill
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream-100/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/70 backdrop-blur-md p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-teal-700 font-bold">Featured Poster</p>
                <p className="mt-2 text-charcoal-900 font-serif text-xl">Awareness begins with a visible message.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. CAMPAIGN ONE */}
      <section id="campaign-one" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} onViewportEnter={() => setHasAnimatedCounts(true)} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          <motion.div variants={fadeUp} className="w-full lg:w-5/12 space-y-8">
            <div className="flex items-center gap-4 opacity-80">
              <div className="h-px w-12 bg-charcoal-800"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-charcoal-800">Campaign One</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
              A focused outreach campaign built around cervical cancer awareness.
            </h2>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              Campaign One actively confronts the stigma of women's reproductive health by bringing candid, culturally sensitive cervical cancer education directly into schools.
            </p>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              It is designed to un-shame the conversation, helping students and communities move past traditional hesitation and toward preventative action without the intimidation of medical jargon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {campaignStats.map((stat, index) => (
                <div key={stat.label} className="rounded-2xl bg-cream-100 border border-cream-900 p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl font-serif text-teal-800">
                    <AnimatedCounter value={stat.value} hasAnimatedCounts={hasAnimatedCounts} />{stat.suffix}
                  </div>
                  <p className="mt-2 text-sm text-charcoal-800 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 self-stretch">
            <div className="bg-cream-100 rounded-[28px] border border-cream-900 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cut-paper h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif text-charcoal-900">What this campaign covers</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Why cervical cancer awareness matters early",
                  "How HPV, screening, and prevention fit together",
                  "Where people can go for support and next steps"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-cream-900/60">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-500 shrink-0"></div>
                    <p className="text-charcoal-800 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream-100 rounded-[28px] border border-cream-900 p-8 shadow-lg hover:shadow-xl transition-all duration-300 cut-paper h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Our Impact in Motion</h3>
              <div 
                className="relative rounded-xl overflow-hidden border border-cream-900/60 shadow-md bg-charcoal-900 w-full flex-grow flex items-center justify-center group aspect-video min-h-[200px]"
              >
                <video 
                  ref={videoRef}
                  src="/content/Campaign_one.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  preload="none"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  playsInline
                />
                {!isVideoPlaying && (
                  <div 
                    className="absolute inset-0 bg-charcoal-900 flex items-center justify-center z-10 cursor-pointer transition-colors group-hover:bg-charcoal-800"
                    onClick={() => {
                      setIsVideoPlaying(true);
                      if (videoRef.current) {
                        videoRef.current.play().catch(e => console.error(e));
                      }
                    }}
                  >
                    <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section className="w-full pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-cream-100 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Our Journey</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-charcoal-900">How Far We've Come</motion.h2>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-teal-600/20">
            {timeline.map((item, i) => (
              <motion.div variants={fadeUp} key={i} className={`relative z-10 flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 flex justify-start pl-12 md:pl-0 md:justify-center">
                  <div className="bg-teal-800 text-teal-100 px-6 py-3 rounded-full font-bold text-xl shadow-lg border border-teal-600 font-serif w-max">
                    {item.year}
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-cream-900 relative cut-paper">
                    <div className={`absolute w-4 h-4 bg-rose-500 rounded-full top-1/2 -translate-y-1/2 hidden md:block ${i % 2 === 0 ? '-left-4' : '-right-4'}`}></div>
                    <div className="absolute w-4 h-4 bg-rose-500 rounded-full top-1/2 -translate-y-1/2 -left-[40px] md:hidden"></div>
                    <h3 className="text-2xl font-serif text-teal-800 mb-3">{item.title}</h3>
                    <p className="text-charcoal-800 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. GALLERY */}
      <section id="gallery" className="w-full pt-16 sm:pt-20 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 bg-cream-200">
         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
              <motion.div variants={fadeUp} className="max-w-2xl mx-auto md:mx-0">
                <span className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Field Work Gallery</span>
                <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">Hope In Action</h2>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, i) => (
                <motion.div
                  key={image.src}
                  variants={imageLift}
                  whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.6 : -0.6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(image.src)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 bg-cream-300 cursor-pointer"
                >
                   <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>

            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(null)}
                  className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-900/95 backdrop-blur-sm p-4 md:p-10 cursor-zoom-out"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-5xl w-full h-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute -top-12 right-0 md:-top-10 md:-right-10 text-white/70 hover:text-white transition-colors p-2"
                    >
                      <X size={32} />
                    </button>
                    <Image 
                      src={selectedImage} 
                      alt="Gallery zoom" 
                      fill
                      sizes="100vw"
                      className="object-contain rounded-lg shadow-2xl"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
         </motion.div>
      </section>

      {/* 7. FOUNDERS SECTION */}
      <section id="founder" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-teal-800 text-cream-100 relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <motion.span variants={fadeUp} className="text-teal-300 font-bold tracking-widest uppercase text-sm block mb-3">Founder</motion.span>
             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif">Meet The Founder</motion.h2>
             <motion.p variants={fadeUp} className="mt-4 text-teal-100 text-lg">A student-led vision to make cervical cancer education feel accessible, human, and easy to trust.</motion.p>
          </div>

          <div className="grid grid-cols-1 place-items-center">
            {founders.map((founder, i) => (
              <motion.div variants={fadeUp} key={i} className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-white/15 blur-2xl rounded-[32px] transform-gpu pointer-events-none"></div>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-[28px] border border-white/30 bg-white/10 backdrop-blur-lg p-8 text-center shadow-[0_25px_60px_rgba(3,36,39,0.45)]"
                >
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/60 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                    <Image src={founder.image} alt={founder.name} fill sizes="160px" className="object-cover" />
                  </div>
                  <h3 className="mt-6 text-3xl font-serif text-white">{founder.name}</h3>
                  <p className="mt-2 text-teal-200 font-medium text-sm uppercase tracking-wider">{founder.role}</p>
                  <p className="mt-4 text-teal-100/80 leading-relaxed text-sm">{founder.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. CONTACT US SECTION */}
      <section id="contact" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-white border-t border-cream-900">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-teal-600 font-bold tracking-widest uppercase text-sm block mb-3">Get Involved</span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">Let's start a conversation.</h2>
              <p className="text-charcoal-800 text-lg leading-relaxed">
                Whether you want to partner for a cervical cancer awareness camp, support school outreach, or help a growing student-led initiative build stronger programs, we'd love to hear from you.
              </p>
            </div>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 text-charcoal-800">
                <a href="https://www.instagram.com/teal.trails/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity group w-full">
                  <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-500 transition-all shadow-sm group-hover:shadow-md">
                    <Instagram className="text-teal-600 group-hover:text-white transition-colors" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="font-bold group-hover:text-pink-600 transition-colors">Follow our Journey</h4>
                    <p className="text-charcoal-800">@teal.trails</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4 text-charcoal-800">
                <a href="mailto:vaibhavi_babu@oakridge.in" className="flex items-center gap-4 hover:opacity-80 transition-opacity group w-full">
                  <div className="w-12 h-12 bg-cream-200 rounded-full flex items-center justify-center shrink-0 group-hover:bg-teal-600 transition-colors shadow-sm group-hover:shadow-md">
                    <Mail className="text-teal-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold group-hover:text-teal-700 transition-colors">Email Us</h4>
                    <p className="text-charcoal-800">vaibhavi_babu@oakridge.in</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <motion.div variants={fadeUp} className="bg-cream-100 p-8 md:p-10 rounded-2xl border border-cream-900 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cut-paper">
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-800">First Name</label>
                  <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white transition-shadow" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-charcoal-800">Last Name</label>
                  <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white transition-shadow" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal-800">Email Address</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white transition-shadow" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-charcoal-800">Message</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-cream-900 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white transition-shadow" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5">
                <MessageSquare size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
