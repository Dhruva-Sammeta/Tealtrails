import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart } from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream-100 text-charcoal-900 border-t-4 border-teal-600/80">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,_rgba(10,143,150,0.10),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(205,92,92,0.08),_transparent_30%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-teal-500/40 bg-white shadow-lg float-soft transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.jpg" fill sizes="56px" alt="Teal Trails logo" className="object-contain p-1.5" />
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-charcoal-900 leading-none">Teal Trails</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-teal-700">Student-led women&apos;s health NGO</p>
              </div>
            </Link>
            <p className="max-w-xl text-sm sm:text-base leading-7 text-charcoal-800">
              Teal Trails is a student-led, to-be-grown NGO focused on women&apos;s health awareness, access, and dignity. We are building a model that can expand responsibly through schools, clinics, and community partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-5 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-600 shadow-lg shadow-rose-500/20">
                <Heart size={18} /> Support Growth
              </Link>
              <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-900/20 bg-white/70 px-5 py-3 font-bold text-charcoal-900 transition-all hover:-translate-y-0.5 hover:bg-white">
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest text-teal-700 mb-6">Explore</h3>
            <ul className="space-y-4 text-charcoal-800">
              <li><Link href="/about" className="hover:text-teal-700 transition-colors">About Us</Link></li>
              <li><Link href="/campaigns" className="hover:text-teal-700 transition-colors">Campaigns</Link></li>
              <li><Link href="/gallery" className="hover:text-teal-700 transition-colors">Field Gallery</Link></li>
              <li><Link href="/volunteer" className="hover:text-teal-700 transition-colors">Volunteer</Link></li>
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
                <span>hello@tealtrails.org</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 hover:bg-teal-100 hover:-translate-y-0.5 transition-all">
                <InstagramLogoIcon className="w-5 h-5 text-charcoal-900" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 hover:bg-teal-100 hover:-translate-y-0.5 transition-all">
                <TwitterLogoIcon className="w-5 h-5 text-charcoal-900" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-cream-900/10 hover:bg-teal-100 hover:-translate-y-0.5 transition-all">
                <LinkedInLogoIcon className="w-5 h-5 text-charcoal-900" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream-900/15 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-charcoal-700">
          <p>&copy; {new Date().getFullYear()} Teal Trails. All rights reserved.</p>
          <p>Building women&apos;s health confidence, one growing partnership at a time.</p>
        </div>
      </div>
    </footer>
  );
}
