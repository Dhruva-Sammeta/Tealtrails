import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart } from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream-100 text-charcoal-900 border-t-4 border-teal-600/80">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,_rgba(10,143,150,0.10),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(205,92,92,0.08),_transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-teal-500/40 bg-white shadow-lg float-soft transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.jpg" fill sizes="56px" alt="Teal Trails logo" className="object-contain p-1.5" />
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-charcoal-900 leading-none">Teal Trails</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-teal-700">Student-led cervical cancer awareness initiative</p>
              </div>
            </Link>
            <p className="max-w-xl text-sm sm:text-base leading-7 text-charcoal-800">
              Teal Trails is a student-led initiative focused on cervical cancer awareness, HPV education, and prevention. We are building a model that can expand responsibly through schools, clinics, and community partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#campaign-one" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-5 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-600 shadow-lg shadow-rose-500/20">
                <Heart size={18} /> See Campaign One
              </Link>
              <Link href="#mission" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-900/20 bg-white/70 px-5 py-3 font-bold text-charcoal-900 transition-all hover:-translate-y-0.5 hover:bg-white">
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest text-teal-700 mb-6">Explore</h3>
            <ul className="space-y-4 text-charcoal-800">
              <li><Link href="#mission" className="hover:text-teal-700 transition-colors">About Us</Link></li>
              <li><Link href="#campaign-one" className="hover:text-teal-700 transition-colors">Campaign One</Link></li>
              <li><Link href="#gallery" className="hover:text-teal-700 transition-colors">Field Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-teal-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest text-teal-700 mb-6">Connect</h3>
            <ul className="space-y-4 text-charcoal-800">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-700 shrink-0 mt-1" size={18} />
                <span>Hyderabad, India<br />Growing with schools and community partners</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-700 shrink-0" size={18} />
                <a href="mailto:vaibhavi_babu@oakridge.in" className="hover:text-teal-700 transition-colors">vaibhavi_babu@oakridge.in</a>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="https://www.instagram.com/teal.trails/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all group shadow-sm hover:shadow-md">
                <InstagramLogoIcon className="w-5 h-5 text-charcoal-900 group-hover:text-white transition-colors" />
              </a>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 opacity-70">
                <TwitterLogoIcon className="w-5 h-5 text-charcoal-900" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 opacity-70">
                <LinkedInLogoIcon className="w-5 h-5 text-charcoal-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-900/15 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-charcoal-700">
          <p> {new Date().getFullYear()} Teal Trails. All rights reserved.</p>
          <p>Building cervical cancer awareness, one growing partnership at a time.</p>
        </div>
        <div className="mt-20 pt-8 pb-2 text-center border-t border-transparent">
          <a
            href="https://www.linkedin.com/in/dhruva-sammeta-19198a291/"
            className="text-[0.6rem] uppercase tracking-[0.22em] text-charcoal-500/70 hover:text-teal-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site done by Dhruva Sammeta
          </a>
        </div>
      </div>
    </footer>
  );
}
