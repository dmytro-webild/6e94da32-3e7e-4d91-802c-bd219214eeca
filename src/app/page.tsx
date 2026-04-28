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
      description="A Record Label that works with all Genres of Music. Specializes in Hip Hop, Rap and R & B. We are a Family that has visions of Entertaining the World. We are making artist known and uplifting their careers in new ways."
      imagePosition="right"
      imageClassName="border-none"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777372881050-wjqwaf9z.jpg"
      imageAlt="I Bang Records Team"
      buttons={[{ text: "Our Artists", href: "#features" }]}
      mediaAnimation="none"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Entertain the World while Creating not only Artist but Family in the Music Industry. "
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
        { title: "King Art Southside Shade", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364749414-m8xbano6.jpg" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365027886-q4uam6x8.jpg" } },
        { title: "Royal Business Mikey 3ang", description: "", phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777364639834-5z0ydlkf.jpg?_wi=2" }, phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777365007074-pw1w6q1b.jpg" } },
      ]}
      title="Our Artists"
      description="We house the most influential Rap and R&B voices in the scene. We welcome all Genres. Country - Rap/Hip-Hop - Gospel - Rock - Latin - Latin Trap - Trap - R & B - K-Pop"
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
      text="Need assistance? Reach out to our support team for any inquiries."
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777372881050-wjqwaf9z.jpg"
      logoText="I Bang Records"
      columns={[
        { title: "Socials", items: [
            { label: "Facebook", href: "https://facebook.com" },
            { label: "Twitter", href: "https://twitter.com" },
            { label: "Instagram", href: "https://instagram.com" },
            { label: "TikTok", href: "https://tiktok.com" }
        ] },
        { title: "Support", items: [{ label: "Contact Support", href: "#support" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}