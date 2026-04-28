"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Artists", id: "features" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="I Bang Records"
      description="A Record Label that works with all Genres of Music. Specializes in Hip Hop, Rap and R & B. We are a Family that has visions of Entertaining the World. We are making artist known and uplifting their careers in new ways."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777323889174-0kwrky4p.jpg"
      imagePosition="right"
      buttons={[{ text: "Discover Artists", href: "#features" }]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Define Music for To"
      tag="Our Mission"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      showStepNumbers={false}
      features={[
        { title: "King Art                                          Southside Shade ", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364749414-m8xbano6.jpg" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365027886-q4uam6x8.jpg" } },
        { title: "Mikey 3ang                                                                                                Southside Shade ", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364639834-5z0ydlkf.jpg" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365007074-pw1w6q1b.jpg" } },
      ]}
      title="Our Artists"
      description="We house the most influential Rap and R&B voices in the scene. We welcome all Genres. Country - Rap/Hip-Hop - Gospel - Rock - Latin - Latin Trap - Trap - R & B - K-Pop"
    />
  </div>

  <div id="faq" data-section="faq">
    <FaqSplitMedia
      title="Frequently Asked Questions"
      description="Got questions about our process, booking, or label services? We've got answers."
      faqs={[
        { id: "1", title: "How can I submit my demo?", content: "You can submit your demos through our contact page or by sending a private Soundcloud link via our official email." },
        { id: "2", title: "What genres do you specialize in?", content: "While we love all music, our core focus is on Hip Hop, Rap, and R&B."},
        { id: "3", title: "How do you support new artists?", content: "We provide comprehensive artist development, from production guidance to marketing and distribution strategy." }
      ]}
      faqsAnimation="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Contact Us"
      title="Join the Movement"
      description="Get in touch for booking, inquiries, or demo submissions. "
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365377115-6w0jl634.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="I Bang Records"
      columns={[
        { title: "Navigation", items: [{ label: "About", href: "#about" }, { label: "Artists", href: "#features" }, { label: "FAQ", href: "#faq" }] },
        { title: "Contact", items: [{ label: "Support", href: "#contact" }] },
      ]}
      imageSrc="https://img.freepik.com/free-photo/urban-vinyl-release_23-2149075974.jpg?_wi=2"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}