"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextAbout from '@/components/sections/about/TextAbout';

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
        { name: "Releases", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="I Bang Records"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{ variant: "radial-gradient" }}
      title="I Bang Records"
      description="A Record Label that works with all Genres of Music. Specializes in Hip Hop, Rap and R & B. We are a Family that visions of Entertaining the World. We are making artist known and uplifting their careers in new ways."
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CxL59q8tfUcPSZDT56Hr5rHLLc/uploaded-1777323889174-0kwrky4p.jpg", alt: "I Bang Records Logo" },
      ]}
      buttons={[{ text: "Discover Artists", href: "#features" }]
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Defining Modern Urban Culture"
      tag="Our Mission"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        { title: "Rap Legends", description: "Raw, unfiltered lyrical powerhouses.", phoneOne: { imageSrc: "https://img.freepik.com/free-photo/cool-urban-rapper-portrait_23-2149417590.jpg" }, phoneTwo: { imageSrc: "https://img.freepik.com/free-photo/artist-posing-graffiti-wall_23-2149489847.jpg" } },
        { title: "R&B Soul", description: "Deep, melodic vibes for the modern era.", phoneOne: { imageSrc: "https://img.freepik.com/free-photo/portrait-young-urban-musician_23-2151916009.jpg" }, phoneTwo: { imageSrc: "https://img.freepik.com/free-photo/urban-music-producer-studio_23-2149005458.jpg?_wi=1" } },
      ]}
      showStepNumbers={false}
      title="Our Artists"
      description="We house the most influential Rap and R&B voices in the scene."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "r1", name: "City Lights", price: "Stream", imageSrc: "https://img.freepik.com/free-photo/urban-music-cover-art_23-2148496904.jpg" },
        { id: "r2", name: "Concrete Soul", price: "Stream", imageSrc: "https://img.freepik.com/free-photo/urban-vinyl-release_23-2149075974.jpg" },
      ]}
      title="Artist Catalog"
      description="Explore the latest drops from our roster."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{ variant: "gradient-bars" }}
      tag="Contact Us"
      title="Join the Movement"
      description="Get in touch for booking, inquiries, or demo submissions."
      imageSrc="https://img.freepik.com/free-photo/urban-music-producer-studio_23-2149005458.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      logoText="I Bang Records"
      columns={[
        { title: "Navigation", items: [{ label: "About", href: "#about" }, { label: "Artists", href: "#features" }] },
        { title: "Contact", items: [{ label: "Support", href: "#contact" }] },
      ]}
      imageSrc="https://img.freepik.com/free-photo/urban-vinyl-release_23-2149075974.jpg?_wi=2"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}