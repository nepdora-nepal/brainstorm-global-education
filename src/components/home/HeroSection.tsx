"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import ImageWithFallback from "@/src/components/common/ImageWithFallback";
import images from "@/images.json";
import { motion, Variants } from "framer-motion";
import { ContactDialog } from "@/src/components/popup/contact";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
};

const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, currentColor 50px, currentColor 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, currentColor 50px, currentColor 51px)`
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium mb-6 bg-accent text-accent-foreground rounded-full">
              🇳🇵 Nepal&apos;s Trusted Education Partner
            </Badge>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Best Abroad Study {" "}
              <span className="text-primary">Consultancy</span>{" "}<br />
              In Nepal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Expert guidance for studying in USA, UK, Australia, Canada & New Zealand.
              From course selection to visa processing — we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <ContactDialog triggerText="Book Free Consultation" title="Book Free Consultation">
                <Button size="lg" className="transition-all text-base">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ContactDialog>
              <Button asChild variant="outline" size="lg" className="text-base ">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                10+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                5000+ Students Placed
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                100+ Partner Universities
              </span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative hidden lg:block justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <div className="w-full max-w-lg lg:max-w-none rounded-xl shadow-2xl overflow-hidden aspect-video relative group">
              <ImageWithFallback
                id="hero"
                src={images.hero}
                fallbackSrc={images.hero}
                alt="International students celebrating graduation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Subtle glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;