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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Artists",
          id: "features",
        },
        {
          name: "Releases",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "sparkles-gradient",
      }}
      title="Amplifying Sound. Defining Culture."
      description="I Bang Records is your home for the next wave of underground artists and cutting-edge sound design."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-elegant-clothes-with-guitar-his-hands-playing-posing-dark-background_613910-18283.jpg",
          alt: "professional musician artist portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-stylish-sound-producer-confidently-looking-camera-working-modern-recording-studio_574295-4258.jpg",
          alt: "Young stylish sound producer confidently looking in camera working in modern recording studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/musician-posing-with-his-instrument_150588-99.jpg",
          alt: "musician posing with his instrument",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-t-shirt-holds-guitar-his-hands-playing-isolated-dark-background_613910-18302.jpg",
          alt: "Handsome young musician with stylish hair in a t-shirt, holds a guitar in his hands and playing. Isolated on a dark background.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/stylish-young-musician-with-stylish-hair-elegant-clothes-with-guitar-his-hands-playing-posing-dark-background_613910-5041.jpg",
          alt: "Stylish young musician with stylish hair in elegant clothes with a guitar in his hands playing and posing on a dark background.",
        },
      ]}
      buttons={[
        {
          text: "Listen Now",
          href: "#products",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Techno Elite",
          icon: Music,
        },
        {
          type: "text-icon",
          text: "Underground Vibes",
          icon: Zap,
        },
        {
          type: "text-icon",
          text: "Global Reach",
          icon: Globe,
        },
        {
          type: "text-icon",
          text: "Premium Sound",
          icon: Headphones,
        },
        {
          type: "text-icon",
          text: "Next Wave",
          icon: Waves,
        },
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
        {
          title: "Techno Elite",
          description: "Global headlining acts.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/art-neon-fashion-men-s-portrait-handsome-guy-model-posing-outdoors-listening-music-headphones-red-green-filters-half-face_158538-4507.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-tattooed-young-man-holding-dry-plant-leaves-hand-standing-against-gray-background_23-2148121883.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/electric-guitar-with-neon-light_23-2151376107.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          title: "Experimental Sound",
          description: "Pushing the boundaries.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-elegant-clothes-posing-with-guitar-his-hands-dark-background_613910-5029.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-face-make-up-woman-with-green-eyes_23-2148282165.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-elegant-clothes-with-guitar-his-hands-playing-posing-dark-background_613910-18283.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          title: "Rising Stars",
          description: "Fresh talent on the rise.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-transparent-sheet_23-2149417585.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-man-traditional-celtic-clothes-playing-mandolin-grey-vignette-background_613910-13774.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-menu-paper-plate-with-leaves_23-2148496904.jpg",
          imageAlt: "professional musician artist portrait",
        },
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
        {
          id: "r1",
          name: "Midnight Pulse",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-menu-paper-plate-with-leaves_23-2148496904.jpg",
        },
        {
          id: "r2",
          name: "Digital Dawn",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/optimism-wallpaper-with-smiley-face_23-2150039319.jpg",
        },
        {
          id: "r3",
          name: "Bass Frequency",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-vinyl-record-arrangement_23-2149075974.jpg",
        },
        {
          id: "r4",
          name: "System Shock",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-wonder-wheel-movement-lights-with-light-bulb_23-2148328069.jpg",
        },
        {
          id: "r5",
          name: "Neon Dreams",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-single-s-day-banner_23-2149520237.jpg",
        },
        {
          id: "r6",
          name: "Sonic Storm",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-neon-lights-wonder-wheel_23-2148328066.jpg",
        },
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
        {
          id: "m1",
          value: "1.2M",
          title: "Streams",
          description: "Across all platforms",
          imageSrc: "http://img.b2bpic.net/free-photo/translucent-blurred-portrait-woman_23-2149705724.jpg",
        },
        {
          id: "m2",
          value: "50+",
          title: "Releases",
          description: "Diverse music catalog",
          imageSrc: "http://img.b2bpic.net/free-photo/discs-near-compact-cassette_23-2147781430.jpg",
        },
        {
          id: "m3",
          value: "20",
          title: "Artists",
          description: "Global roster members",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-neon-light_23-2149005458.jpg",
        },
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
        {
          id: "1",
          name: "Sarah J.",
          date: "Oct 2023",
          title: "Promoter",
          quote: "I Bang Records delivers consistently incredible sound.",
          avatarSrc: "http://img.b2bpic.net/free-photo/teenager-light-movie-projector_23-2149489847.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/electric-guitar-with-neon-light_23-2151376107.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          id: "2",
          name: "Mark D.",
          date: "Sep 2023",
          title: "Radio Host",
          quote: "The roster is unmatched.",
          avatarSrc: "http://img.b2bpic.net/free-photo/man-posing-studio-high-angle_23-2149417590.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-young-musician-with-stylish-hair-elegant-clothes-with-guitar-his-hands-playing-posing-dark-background_613910-18283.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          id: "3",
          name: "Emily P.",
          date: "Aug 2023",
          title: "DJ",
          quote: "Pioneers of the industry.",
          avatarSrc: "http://img.b2bpic.net/free-photo/lifestyle-scary-clown_52683-120593.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-menu-paper-plate-with-leaves_23-2148496904.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          id: "4",
          name: "Tom K.",
          date: "Jul 2023",
          title: "Producer",
          quote: "Production level is insane.",
          avatarSrc: "http://img.b2bpic.net/free-photo/high-angle-man-posing-studio_23-2149417589.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/art-neon-fashion-men-s-portrait-handsome-guy-model-posing-outdoors-listening-music-headphones-red-green-filters-half-face_158538-4507.jpg",
          imageAlt: "professional musician artist portrait",
        },
        {
          id: "5",
          name: "Zoe B.",
          date: "Jun 2023",
          title: "Curator",
          quote: "Absolutely essential label.",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-man-posing-spotlight_23-2151916009.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tattooed-young-man-holding-dry-plant-leaves-hand-standing-against-gray-background_23-2148121883.jpg",
          imageAlt: "professional musician artist portrait",
        },
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
        {
          id: "f1",
          title: "How to submit demos?",
          content: "Email us at demo@ibangrecords.com",
        },
        {
          id: "f2",
          title: "Licensing opportunities?",
          content: "Reach out to licensing@ibangrecords.com",
        },
        {
          id: "f3",
          title: "Physical merch?",
          content: "Visit our official webstore.",
        },
      ]}
      title="Label FAQs"
      description="Common inquiries about releases, artist submissions, and licensing."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Join the Mailing List"
      description="Stay updated on the latest releases and event news."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Artists",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Releases",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="I Bang Records"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
