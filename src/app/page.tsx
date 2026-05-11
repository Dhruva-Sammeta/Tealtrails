"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, MapPin, Mail, MessageSquare, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
          
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-charcoal-900 leading-[1.1] tracking-tight max-w-3xl drop-shadow-[0_6px_22px_rgba(255,255,255,0.65)] lg:text-left">
              Most Indian women learn about cervical cancer after a diagnosis. <span className="text-rose-500 italic">We change that.</span>
            </h1>
            
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-[0_20px_40px_rgba(31,41,55,0.12)] p-2 hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-rose-500/10 rounded-[2rem] pointer-events-none"></div>
              <Image src="/logo.jpg" alt="Teal Trails Logo" fill sizes="(min-width: 640px) 176px, 144px" className="object-contain p-4" />
            </div>
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-charcoal-800 max-w-3xl mx-auto leading-relaxed font-medium mt-6 sm:mt-8 drop-shadow-[0_4px_12px_rgba(255,255,255,0.55)]">
            Teal Trails is a student-led initiative born from real conversations - with girls in orphanages, women in rural mandals, and college students in Hyderabad who had never once heard the word "cervix." India loses over 77,000 women to cervical cancer every year - not because medicine failed them, but because silence did. We break that silence in classrooms, communities, and at doorsteps.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 sm:pt-8 w-full sm:w-auto">
            <Link href="#camp-pragati" className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_18px_40px_rgba(205,92,92,0.24)] transition-all hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base">
              <HeartHandshake className="w-5 h-5" />
              See Camp Pragati
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div
              variants={imageLift}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-cream-900 bg-cream-100 p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 cut-paper"
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-teal-700 font-bold mb-4">Why It Matters</h3>
              <p className="text-charcoal-800 leading-relaxed text-lg">We met girls who had no language for their own reproductive health. Not because they weren't curious, but because every adult around them had been taught the same silence. This isn't only a rural problem. Across privileged households and urban schools alike, stigma delays screening and turns a preventable disease into a death sentence. We replace that shame with conversations that save lives.</p>
            </motion.div>

            <motion.div
              variants={imageLift}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-cream-900 bg-cream-100 p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 cut-paper"
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-teal-700 font-bold mb-4">How We Grow</h3>
              <p className="text-charcoal-800 leading-relaxed text-lg">We run awareness sessions in schools, colleges, and clinics - reaching 100+ adolescents before HPV exposure peaks and before the healthcare system loses them to avoidance. Our sessions cover HPV transmission, the cervical cancer link, vaccine safety, and what a Pap smear involves. We partner with local NGOs and Asha workers to make the impact last beyond a single visit.</p>
            </motion.div>
          </div>

          <motion.div
            variants={imageLift}
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-teal-600/30 bg-teal-800 text-cream-100 p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <HeartHandshake className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <h3 className="text-sm uppercase tracking-[0.3em] text-teal-300 font-bold mb-4">What We Protect</h3>
              <p className="text-teal-50 leading-relaxed text-xl md:text-2xl font-serif max-w-4xl">
                Teal Trails is pioneering mobile clinics in youth-led public health - bringing certified medical professionals and care directly to doorsteps. Funded through CSR partnerships and run primarily in villages, each mobile unit provides not only cervical cancer awareness, but also anaemia care, antenatal care (ANC) for pregnant women, diabetes care, hypertension treatment, premature menopause treatment and other patient-specific consultations for whatever concerns come at our door. We eliminate the need for waiting rooms and just provide comprehensive care where the system hasn't reached yet.
              </p>
            </div>
          </motion.div>
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
              Teal Trails doesn't target one kind of woman- it reaches all of them. From high school girls and postgraduate researchers to women farm labourers working in fields and mothers in villages who've never seen a doctor. Teal Trails understands that a degree is not a guarantee of awareness - we've sat in rooms full of educated women who had never once heard of HPV. Cervical cancer doesn't discriminate by education or income, and neither does our work.
            </p>
            <p className="text-charcoal-800 text-lg leading-relaxed">
              Every session is shaped around who's in the room. Their language, their concerns, their reality. A postgraduate seminar looks different from a session under a tent in a village. What doesn't change is the core message: this cancer is preventable, this information is yours, and you deserve access to both.
            </p>
            <div className="pt-4">
              <Link href="#camp-pragati" className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 text-cream-100 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                See Campaign Pragati <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="relative max-w-md mx-auto w-full">
            <div className="absolute -inset-6 bg-teal-600/20 blur-2xl rounded-[32px]"></div>
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
                <p className="mt-2 text-charcoal-900 font-serif text-xl">Putting women's health into local languages and onto local walls</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. CAMP PRAGATI */}
      <section id="camp-pragati" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
          <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-4 opacity-80">
              <div className="h-px w-12 bg-charcoal-800"></div>
              <span className="uppercase tracking-widest text-sm font-bold text-charcoal-800">Camp Pragati</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 leading-tight">
              Camp Pragati - Progress, taken to the doorstep.
            </h2>
            <div className="space-y-6 text-charcoal-800 text-lg leading-relaxed">
              <p>
                Pragati means progress in Hindi - and that's exactly what this camp was built to deliver. In Early 2025, Teal Trails drove a CSR-funded mobile health unit into Thunki Kalsa, a village in rural Hyderabad, where chronic illnesses go undiagnosed, reproductive health remains unspoken, and reliable medical care is far out of reach for most families.
              </p>
              <p>
                Our team addressed hypertension, diabetes, anaemia, premature menopause, and antenatal care alongside cervical cancer awareness - every woman who received a consultation also walked away with cervical cancer awareness materials and Teal Trails pamphlets. High school students - girls and boys - attended a doctor-led seminar on general health practices and preventive measures, many hearing about cervical cancer for the very first time.
              </p>
              <p>
                Pragati was a reminder that progress isn't always built in hospitals and policy rooms. It's built in the spaces the system forgot to reach, and the willingness to learn and grow.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div variants={imageLift} className="bg-cream-100 rounded-[28px] border border-cream-900 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 cut-paper">
              <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Camp Pragati Impact</h3>
              <ul className="space-y-6 text-charcoal-800">
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>110 patients served</strong> across 2 villages in a 7-hour window</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>82% women</strong> - each receiving cervical cancer awareness materials and Teal Trails pamphlets alongside their medical consultation</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>50 high school students</strong> - girls and boys - attended a doctor-led medical seminar covering general health practices, cervical cancer awareness, and crucial preventive measures</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>20 km covered</strong> to reach communities with no proximate healthcare access</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>77% returning patients</strong> - indicating trust built from Teal Trails presence</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span><strong>Hypertension, diabetes, anemia, and premature menopause</strong> emerged as the dominant conditions - chronic illnesses that go largely undiagnosed in rural women</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-rose-500 shrink-0"></div>
                  <span>Patients ranged from <strong>12 to 60+ years</strong>, cutting across generations in the same sitting</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div variants={imageLift} className="bg-cream-100 rounded-[28px] border border-cream-900 p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 cut-paper">
              <h3 className="text-2xl font-serif text-charcoal-900 mb-6">Our Impact in Motion</h3>
              <div className="relative rounded-xl overflow-hidden border border-cream-900/60 shadow-md bg-charcoal-900 w-full flex items-center justify-center group aspect-video">
                <video 
                  ref={videoRef}
                  src="/content/Campaign_one.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  preload="metadata"
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. TIMELINE SECTION */}
      <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream-100 relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Our Journey</motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-charcoal-900">How Far We've Come</motion.h2>
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
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-cream-900 relative cut-paper">
                    <div className="absolute w-4 h-4 bg-rose-500 rounded-full -left-2 top-1/2 -translate-y-1/2 hidden md:block"></div>
                    <h3 className="text-2xl font-serif text-teal-800 mb-3">{item.title}</h3>
                    <p className="text-charcoal-800 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* PRESS & MEDIA STAND-IN */}
          <motion.div variants={fadeUp} className="mt-20 max-w-2xl mx-auto bg-white/50 border border-teal-600/20 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgba(10,143,150,0.06)] relative overflow-hidden backdrop-blur-sm cut-paper">
             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-rose-500"></div>
             <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">Press & Media</div>
             <h3 className="text-2xl font-serif text-charcoal-900 mb-3">Expanding Our Impact</h3>
             <p className="text-charcoal-800 leading-relaxed max-w-lg mx-auto">
               We're currently compiling our latest press releases and media features. Check back soon for updates as Teal Trails continues to grow.
             </p>
          </motion.div>

        </motion.div>
      </section>

      {/* 6. GALLERY */}
      <section id="gallery" className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-cream-200">
         <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <span className="text-rose-500 font-bold tracking-widest uppercase text-sm block mb-3">Field Work</span>
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
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                    <img 
                      src={selectedImage} 
                      alt="Gallery zoom" 
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
                <div className="absolute -inset-6 rounded-[32px] bg-white/10 blur-2xl"></div>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-[28px] border border-white/30 bg-white/10 backdrop-blur-2xl p-8 text-center shadow-[0_25px_60px_rgba(3,36,39,0.45)]"
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

          <motion.div variants={fadeUp} className="bg-cream-100 p-8 md:p-10 rounded-2xl border border-cream-900 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cut-paper">
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
