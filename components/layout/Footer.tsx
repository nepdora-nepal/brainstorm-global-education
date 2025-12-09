import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

// Custom TikTok Icon from your SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21,7H20a4,4,0,0,1-4-4H12V14.5a2.5,2.5,0,1,1-4-2V8.18a6.5,6.5,0,1,0,8,6.32V9.92A8,8,0,0,0,20,11h1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/white-logo.svg"
                alt="Logo"
                height={200}
                width={200}
              />
            </Link>
            <p className="text-sm opacity-80 mb-6">
              Your trusted partner for studying abroad. Turning dreams into reality since 2015.
            </p>

            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/brainstormglobaleducation/"
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.instagram.com/brainstorm_abroad_education/"
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.tiktok.com/@brainstorm_education"
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Study Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/countries/usa" className="opacity-80 hover:opacity-100">Study in USA</Link></li>
              <li><Link href="/countries/uk" className="opacity-80 hover:opacity-100">Study in UK</Link></li>
              <li><Link href="/countries/australia" className="opacity-80 hover:opacity-100">Study in Australia</Link></li>
              <li><Link href="/countries/canada" className="opacity-80 hover:opacity-100">Study in Canada</Link></li>
              <li><Link href="/countries/new-zealand" className="opacity-80 hover:opacity-100">Study in New Zealand</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link href="/ielts-pte" className="opacity-80 hover:opacity-100">IELTS & PTE Classes</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100">Contact Us</Link></li>
              <li><Link href="/services" className="opacity-80 hover:opacity-100">Our Services</Link></li>
              <li><Link href="/testimonials" className="opacity-80 hover:opacity-100">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <Link href="https://maps.app.goo.gl/3xNeymuEsP6JFRQS6" target="_blank">
                <button className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Putalisadak, Kathmandu, Nepal</span>
                  </li>
                </button>
              </Link>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <Link href="tel:+9771234567890" className="opacity-80 hover:opacity-100">
                  +977 1234567890
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <Link href="mailto:info@brainstormglobal.edu.np" className="opacity-80 hover:opacity-100">
                  info@brainstormglobal.edu.np
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-80">© 2024 Brainstorm Global Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="opacity-80 hover:opacity-100">Privacy Policy</Link>
            <Link href="/terms" className="opacity-80 hover:opacity-100">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
