"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { Globe, Headphones, Music, Waves, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Artists", id: "features" },
        { name: "Releases", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "sparkles-gradient" }}
      title="Amplifying Sound. Defining Culture."
      description="I Bang Records is your home for the next wave of underground artists and cutting-edge sound design."
      avatars={[
        { src: "https://img.freepik.com/free-photo/urban-artist-recording-music_23-2149417585.jpg", alt: "urban artist portrait" },
        { src: "https://img.freepik.com/free-photo/cool-urban-rapper-portrait_23-2149417590.jpg", alt: "urban artist recording" },
        { src: "https://img.freepik.com/free-photo/artist-posing-graffiti-wall_23-2149489847.jpg", alt: "urban street style artist" },
        { src: "https://img.freepik.com/free-photo/portrait-young-urban-musician_23-2151916009.jpg", alt: "urban musician portrait" },
        { src: "https://img.freepik.com/free-photo/urban-music-producer-studio_23-2149005458.jpg", alt: "urban producer studio" },
      ]}
      buttons={[{ text: "Listen Now", href: "#products" }]
      marqueeItems={[
        { type: "text-icon", text: "Techno Elite", icon: Music },
        { type: "text-icon", text: "Underground Vibes", icon: Zap },
        { type: "text-icon", text: "Global Reach", icon: Globe },
        { type: "text-icon", text: "Premium Sound", icon: Headphones },
        { type: "text-icon", text: "Next Wave", icon: Waves },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Welcome to I Bang Records"
      tag="About Us"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Techno Elite", description: "Global headlining acts.", phoneOne: { imageSrc: "https://img.freepik.com/free-photo/urban-techno-artist-performing_23-2149417589.jpg" }, phoneTwo: { imageSrc: "https://img.freepik.com/free-photo/urban-musician-studio-lights_23-2148121883.jpg" } },
        { title: "Experimental Sound", description: "Pushing the boundaries.", phoneOne: { imageSrc: "https://img.freepik.com/free-photo/urban-sound-experiment_23-2148328069.jpg" }, phoneTwo: { imageSrc: "https://img.freepik.com/free-photo/urban-artist-headphones_23-2149417585.jpg" } },
        { title: "Rising Stars", description: "Fresh talent on the rise.", phoneOne: { imageSrc: "https://img.freepik.com/free-photo/urban-street-musician-style_23-2149489847.jpg" }, phoneTwo: { imageSrc: "https://img.freepik.com/free-photo/urban-musician-portrait_23-2151916009.jpg" } },
      ]}
      showStepNumbers={false}
      title="Our Roster"
      description="Showcasing the most talented and diverse artists in the electronic music scene today."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "r1", name: "Midnight Pulse", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-vinyl-release_23-2149075974.jpg" },
        { id: "r2", name: "Digital Dawn", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-music-cover-art_23-2148496904.jpg" },
        { id: "r3", name: "Bass Frequency", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-electronic-art_23-2150039319.jpg" },
        { id: "r4", name: "System Shock", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-sound-wave-art_23-2148328066.jpg" },
        { id: "r5", name: "Neon Dreams", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-night-vibes-art_23-2149520237.jpg" },
        { id: "r6", name: "Sonic Storm", price: "$15", imageSrc: "https://img.freepik.com/free-photo/urban-abstract-art_23-2148328069.jpg" },
      ]}
      title="Latest Releases"
      description="Explore our recent catalog of high-impact electronic masterpieces."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "1.2M", title: "Streams", description: "Across all platforms", imageSrc: "https://img.freepik.com/free-photo/urban-artist-listening-music_23-2149705724.jpg" },
        { id: "m2", value: "50+", title: "Releases", description: "Diverse music catalog", imageSrc: "https://img.freepik.com/free-photo/urban-studio-equipment_23-2147781430.jpg" },
        { id: "m3", value: "20", title: "Artists", description: "Global roster members", imageSrc: "https://img.freepik.com/free-photo/urban-artist-with-neon_23-2149005458.jpg" },
      ]}
      title="Label Impact"
      description="Numbers that define our growth and reach across the globe."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Sarah J.", date: "Oct 2023", title: "Promoter", quote: "I Bang Records delivers consistently incredible sound.", tag: "Verified", avatarSrc: "https://img.freepik.com/free-photo/urban-promoter-portrait_23-2149489847.jpg" },
        { id: "2", name: "Mark D.", date: "Sep 2023", title: "Radio Host", quote: "The roster is unmatched.", tag: "Verified", avatarSrc: "https://img.freepik.com/free-photo/urban-radio-host-portrait_23-2149417590.jpg" },
        { id: "3", name: "Emily P.", date: "Aug 2023", title: "DJ", quote: "Pioneers of the industry.", tag: "Verified", avatarSrc: "https://img.freepik.com/free-photo/urban-dj-portrait_23-2149417589.jpg" },
        { id: "4", name: "Tom K.", date: "Jul 2023", title: "Producer", quote: "Production level is insane.", tag: "Verified", avatarSrc: "https://img.freepik.com/free-photo/urban-producer-portrait_23-2149417585.jpg" },
        { id: "5", name: "Zoe B.", date: "Jun 2023", title: "Curator", quote: "Absolutely essential label.", tag: "Verified", avatarSrc: "https://img.freepik.com/free-photo/urban-curator-portrait_23-2151916009.jpg" },
      ]}
      title="Words from the Industry"
      description="What our collaborators and partners say about the Bang movement."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How to submit demos?", content: "Email us at demo@ibangrecords.com" },
        { id: "f2", title: "Licensing opportunities?", content: "Reach out to licensing@ibangrecords.com" },
        { id: "f3", title: "Physical merch?", content: "Visit our official webstore." },
      ]}
      title="Label FAQs"
      description="Common inquiries about releases, artist submissions, and licensing."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      tag="Contact"
      title="Join the Mailing List"
      description="Stay updated on the latest releases and event news."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "About", href: "#about" }, { label: "Artists", href: "#features" }] },
        { items: [{ label: "Releases", href: "#products" }, { label: "Contact", href: "#contact" }] },
      ]}
      logoText="I Bang Records"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
