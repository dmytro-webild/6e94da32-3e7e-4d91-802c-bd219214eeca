"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';

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
        { name: "Support", id: "support" },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{ variant: "radial-gradient" }}
      title="I Bang Records"
      description="A Record Label that works with all Genres of Music. Specializes in Hip Hop, Rap and R & B. We are a Family that has visions of Entertaining the World. We are making artist known and uplifting their careers in new ways. Welcome to the family where music meets destiny."
      imagePosition="right"
      imageClassName="border-none"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777372881050-wjqwaf9z.jpg?_wi=1"
      imageAlt="I Bang Records Team"
      mediaAnimation="none"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="To Entertain the World while we expand our Artists Music Career but creating a Family to last in the Music Industry. "
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
        { title: "King Art                                       Go Baby", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364749414-m8xbano6.jpg?_wi=1" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777415801291-8l9b7k6k.jpg" } },
        { title: "Royal Bizniz Mikey 3ang", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364639834-5z0ydlkf.jpg?_wi=2" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365007074-pw1w6q1b.jpg?_wi=1" } },
      ]}
      title="Our Artists"
      description="We house the most influential Rap and R&B voices in the scene. We welcome all Genres. Country - Rap/Hip-Hop - Gospel - Rock - Latin - Latin Trap - Trap - R & B - K-Pop"
    />
  </div>

  <div id="feature-card-three" data-section="feature-card-three">
    <FeatureCardThree
      title="Music Production"
      description="We handle full-scale music production and career management for our artists."
      animationType="slide-up"
      gridVariant="three-columns-all-equal-width"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Recording", description: "Professional studio recording sessions", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364749414-m8xbano6.jpg?_wi=2" },
        { title: "Mixing", description: "High-quality audio engineering and mixing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365027886-q4uam6x8.jpg?_wi=2" },
        { title: "Mastering", description: "Finalizing tracks for industry standards", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365007074-pw1w6q1b.jpg?_wi=2" }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
    <FaqBase
      title="Frequently Asked Questions"
      description="Got questions about our process or joining the family? We're here to help."
      faqsAnimation="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "How do I submit my demo?", content: "You can reach out via our contact section or you can reach out to us on any of our social media platforms. " },
        { id: "2", title: "What genres do you represent?", content: "We represent all genres, including Hip Hop, R&B, Rock, Country, K-Pop, and more." },
        { id: "3", title: "Can I book an artist?", content: "Yes, please send your booking inquiry through the contact form or our support email." }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Contact Us"
      title="Join the Family"
      description="Get in touch for booking, inquiries, or demo submissions. "
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365377115-6w0jl634.jpg?_wi=1"
      mediaAnimation="none"
    />
  </div>

  <div id="support" data-section="support">
    <ContactText
      text="Need assistance? Reach out to our team for any inquiries."
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      buttons={[
        {
          text: "Send Message",          onClick: () => {
            window.location.href = "mailto:marcelawilliams@ibangrecords.com?cc=mikey3ang@ibangrecords.com,eddiebang@ibangrecords.com";
          }
        }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
    <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777372881050-wjqwaf9z.jpg?_wi=2"
      logoText="I Bang Records"
      className="bg-black"
      columns={[
        { title: "Socials", items: [
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589022357123" },
            { label: "Instagram", href: "https://www.instagram.com/ibangrecords" }
        ] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}