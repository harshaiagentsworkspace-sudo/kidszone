import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { WaveDivider } from "@/components/shared/WaveDivider";

export function Footer() {
  return (
    <footer className="bg-white pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full transform -translate-y-full">
        <WaveDivider color="#ffffff" className="rotate-180" />
      </div>
      
      <div className="container mx-auto max-w-[1280px] px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Kids Zone Logo"
                width={48}
                height={48}
                className="group-hover:scale-110 transition-transform object-contain"
              />
              <span className="font-quicksand font-bold text-2xl text-foreground">
                Kids <span className="text-secondary">Zone</span>
              </span>
            </Link>
            <p className="text-foreground/70 leading-relaxed">
              Providing a safe, stimulating, and premium environment for your child&apos;s early education. Building foundations with trustworthy joy.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/18uAat4xG8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/kidszonepatan?igsh=NzdnOW5pbnFuODZ1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-quicksand font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-foreground/70 hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="/activities" className="text-foreground/70 hover:text-primary transition-colors">Activities</Link></li>
              <li><Link href="/admissions" className="text-foreground/70 hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link href="/gallery" className="text-foreground/70 hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-quicksand font-bold text-xl mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="/programs#play-group" className="text-foreground/70 hover:text-primary transition-colors">Play Group (2-3 Yrs)</Link></li>
              <li><Link href="/programs#nursery" className="text-foreground/70 hover:text-primary transition-colors">Nursery (3-4 Yrs)</Link></li>
              <li><Link href="/programs#junior-kg" className="text-foreground/70 hover:text-primary transition-colors">Junior KG (4-5 Yrs)</Link></li>
              <li><Link href="/programs#senior-kg" className="text-foreground/70 hover:text-primary transition-colors">Senior KG (5-6 Yrs)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-quicksand font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Ward no.15 Civil Court Square Katangi road Patan, Jabalpur</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>8223951666, 8223951667</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>kidszonejbp@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Kids Zone. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
