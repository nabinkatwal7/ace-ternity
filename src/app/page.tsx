"use client";

import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBulb,
  IconChevronRight,
  IconHeart,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconMessage,
  IconPhone,
  IconPlus,
  IconRocket,
  IconShield,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { useMotionValue } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Data
import {
  blogPosts,
  faqs,
  features,
  navItems,
  services,
  stats,
  team,
  testimonials,
  timeline,
} from "@/data";

// ===== BACKGROUND & EFFECTS =====
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Boxes as BackgroundBoxes } from "@/components/ui/background-boxes";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundLines } from "@/components/ui/background-lines";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { ImagesBadge } from "@/components/ui/images-badge";
import { Meteors } from "@/components/ui/meteors";
import { NoiseBackground } from "@/components/ui/noise-background";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";
import { Scales } from "@/components/ui/scales";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { SparklesCore } from "@/components/ui/sparkles";
import { Vortex } from "@/components/ui/vortex";
import { WavyBackground } from "@/components/ui/wavy-background";

// ===== TEXT COMPONENTS =====
import { CanvasText } from "@/components/ui/canvas-text";
import ColourfulText from "@/components/ui/colourful-text";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FlipWords } from "@/components/ui/flip-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { SquigglyText } from "@/components/ui/squiggly-text";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

// ===== NAVIGATION =====
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Notch } from "@/components/ui/notch";
import { Navbar as ResizableNavbar } from "@/components/ui/resizable-navbar";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { Tabs } from "@/components/ui/tabs";

// ===== CARDS =====
import { CardContainer as ThreeDCard } from "@/components/ui/3d-card";
import { HoverEffect as CardHoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardStack } from "@/components/ui/card-stack";
import { CometCard } from "@/components/ui/comet-card";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { DraggableCardContainer as DraggableCard } from "@/components/ui/draggable-card";
import { EvervaultCard } from "@/components/ui/evervault-card";
import ExpandableCardDemo from "@/components/ui/expandable-card";
import { FocusCards } from "@/components/ui/focus-cards";
import { GlareCard } from "@/components/ui/glare-card";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Tooltip as TooltipCard } from "@/components/ui/tooltip-card";
import { WobbleCard } from "@/components/ui/wobble-card";
const ExpandableCard = ExpandableCardDemo;

// ===== SCROLL & PARALLAX =====
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";

// ===== OVERLAYS & POPOVERS =====
import {
  Modal as AnimatedModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Lens } from "@/components/ui/lens";
import { LinkPreview } from "@/components/ui/link-preview";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

// ===== INPUTS & FORMS =====
import { FileUpload } from "@/components/ui/file-upload";
import { GooeyInput } from "@/components/ui/gooey-input";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

// ===== BUTTONS =====
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MovingBorder } from "@/components/ui/moving-border";
import { Button as StatefulButton } from "@/components/ui/stateful-button";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";

// ===== LOADERS =====
import {
  LoaderFive,
  LoaderFour,
  LoaderOne,
  LoaderThree,
  LoaderTwo,
} from "@/components/ui/loader";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

// ===== DATA & VISUALIZATION =====
import { Compare } from "@/components/ui/compare";
import { Timeline } from "@/components/ui/timeline";
import WorldMap from "@/components/ui/world-map";

// ===== LAYOUT & GRID =====
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardDemo1 as CardsSections } from "@/components/ui/cards-sections";
import { FeaturesSectionDemo1 as FeatureSections } from "@/components/ui/feature-sections";
import HeroSectionFree from "@/components/ui/hero-sections-free";
import { LayoutGrid } from "@/components/ui/layout-grid";

// ===== CAROUSELS =====
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Card as AppleCard,
  Carousel as AppleCardsCarousel,
} from "@/components/ui/apple-cards-carousel";
import Carousel from "@/components/ui/carousel";
import { ImagesSlider } from "@/components/ui/images-slider";

// ===== SPOTLIGHT =====
import { Spotlight } from "@/components/ui/spotlight-new";

// ===== 3D =====
import ThreeDGlobe from "@/components/ui/3d-globe";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { PinContainer as ThreeDPin } from "@/components/ui/3d-pin";

// ===== MISC =====
import { AsciiArt } from "@/components/ui/ascii-art";
import { CodeBlock } from "@/components/ui/code-block";
import { Keyboard } from "@/components/ui/keyboard";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { MaskContainer as SVGMaskEffect } from "@/components/ui/svg-mask-effect";
import { Terminal } from "@/components/ui/terminal";

const flipWords = ["Empower", "Fund", "Connect", "Amplify", "Support"];

const placeholderFormFields = [
  { placeholder: "Enter your email", name: "email", type: "email" },
  { placeholder: "Enter your name", name: "name", type: "text" },
  { placeholder: "Your business type", name: "business", type: "text" },
];

const tabsData = [
  {
    title: "Funding",
    value: "funding",
    content:
      "Access $45M+ in grants and funding specifically for underrepresented founders. Our AI matches you with opportunities you qualify for.",
  },
  {
    title: "Mentorship",
    value: "mentorship",
    content:
      "5,000+ experienced mentors from similar backgrounds ready to guide you. Free one-on-one sessions tailored to your needs.",
  },
  {
    title: "Marketplace",
    value: "marketplace",
    content:
      "Sell to Fortune 500 companies and conscious consumers. Our platform connects you with buyers actively seeking diverse suppliers.",
  },
];

const codeExample = `const { grants } = await fetchGrants({
  industry: "tech",
  founderType: "underrepresented",
  location: "US"
});
// Returns $45M+ in matched funding`;

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [email, setEmail] = useState("");
  const pathLengths = Array.from({ length: 5 }, () => useMotionValue(1));

  const handlePlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePlaceholderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks ${email || "friend"}! We'll be in touch.`);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* ===== STICKY BANNER ===== */}
      <StickyBanner>
        <p className="text-sm">
          🎉 Join 100,000+ underrepresented business owners.{" "}
          <Link
            href="#cta"
            className="underline underline-offset-2 font-semibold"
          >
            Get started free →
          </Link>
        </p>
      </StickyBanner>

      {/* ===== FLOATING NAV ===== */}
      <FloatingNav navItems={navItems} />

      {/* ===== RESIZABLE NAVBAR ===== */}
      <ResizableNavbar className="hidden lg:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="text-sm text-neutral-300 hover:text-white px-4 py-2"
          >
            {item.name}
          </a>
        ))}
      </ResizableNavbar>

      {/* ===== NOTCH ===== */}
      <Notch
        items={navItems.map((n) => ({
          id: n.name.toLowerCase(),
          label: n.name,
          options: [{ id: n.name.toLowerCase(), label: n.name }],
          showValue: false,
        }))}
      />

      {/* ===== SIDEBAR TOGGLE ===== */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-[100] p-2 bg-neutral-900 rounded-lg border border-neutral-800 lg:hidden"
      >
        {sidebarOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
      </button>

      {/* ===== SIDEBAR ===== */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <SidebarLink
                  key={item.name}
                  link={{
                    label: item.name,
                    href: item.link,
                    icon: <IconChevronRight className="h-5 w-5 shrink-0" />,
                  }}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* ================================================================ */}
      {/* SECTION 1: HERO WITH MULTIPLE TEXT COMPONENTS + SPOTLIGHT */}
      {/* ================================================================ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background: BackgroundBeams */}
        <BackgroundBeams className="opacity-30" />

        {/* Background: Grid & Dot via SVG pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Sparkles */}
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Spotlight */}
        <Spotlight />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            {/* EncryptedText */}
            <EncryptedText
              text="INCLUSIVE ENTERPRISE"
              className="text-sm md:text-base font-mono tracking-[0.3em] text-indigo-400"
              encryptedClassName="text-neutral-600"
              revealedClassName="text-indigo-400"
            />
          </div>

          {/* SquigglyText wrapping the main heading */}
          <SquigglyText className="mb-4" as="div">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <ColourfulText text="Empowering" />{" "}
              <span className="text-white">Underrepresented</span>{" "}
              <TextGenerateEffect words="Businesses" className="inline" />
            </h1>
          </SquigglyText>

          {/* FlipWords */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-8">
            We{" "}
            <FlipWords
              words={flipWords}
              className="text-indigo-400 font-semibold"
            />{" "}
            underrepresented entrepreneurs worldwide.
          </p>

          {/* TypewriterEffect */}
          <div className="mb-8">
            <TypewriterEffect
              words={[
                { text: "Join" },
                { text: "100,000+" },
                { text: "founders" },
                { text: "breaking" },
                { text: "barriers." },
                { text: "Free.", className: "text-indigo-400" },
              ]}
              className="text-lg md:text-xl"
              cursorClassName="bg-indigo-400"
            />
          </div>

          {/* LayoutTextFlip */}
          <div className="mb-8">
            <LayoutTextFlip
              text="Built for"
              words={[
                "Women Founders",
                "BIPOC Owners",
                "Disabled Entrepreneurs",
                "LGBTQ+ Founders",
                "Veteran-Owned",
              ]}
            />
          </div>

          {/* ContainerTextFlip */}
          <div className="mb-12">
            <ContainerTextFlip
              words={[
                "Grant Matching",
                "Mentorship",
                "Market Access",
                "Legal Support",
                "Community",
              ]}
              interval={3000}
              className="text-lg"
            />
          </div>

          {/* CanvasText */}
          <div className="mb-12">
            <CanvasText
              text="Your Success Starts Here"
              className="text-3xl md:text-5xl font-bold"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Link
                href="#cta"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-all"
              >
                Get Started Free <IconArrowRight size={20} />
              </Link>
            </MagneticButton>

            <HoverBorderGradient
              className="px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </HoverBorderGradient>

            <MovingBorder
              borderRadius="9999px"
              className="p-[1px]"
              containerClassName="inline-block"
            >
              <Link
                href="#timeline"
                className="bg-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
              >
                Our Journey <IconChevronRight size={20} />
              </Link>
            </MovingBorder>
          </div>

          {/* StatefulButton */}
          <div className="mt-6">
            <StatefulButton>Try Demo</StatefulButton>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 2: PARALLAX HERO IMAGES */}
      {/* ================================================================ */}
      <section className="py-20">
        <ParallaxHeroImages
          images={[
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
          ]}
        />
      </section>

      {/* ================================================================ */}
      {/* SECTION 3: AURORA BACKGROUND + HERO HIGHLIGHT */}
      {/* ================================================================ */}
      <section id="about" className="relative">
        <AuroraBackground className="h-auto py-32">
          <HeroHighlight containerClassName="bg-transparent h-auto py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <Highlight className="text-3xl md:text-5xl font-bold mb-8">
                Why Inclusive Enterprise?
              </Highlight>
              <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
                <TextGenerateEffect words="Underrepresented business owners face systemic barriers — from limited access to capital and mentorship to exclusion from professional networks. We exist to change that. Our platform combines AI-powered grant matching, free mentorship, legal support, and a community marketplace to level the playing field." />
              </p>
            </div>
          </HeroHighlight>
        </AuroraBackground>
      </section>

      {/* ================================================================ */}
      {/* SECTION 4: WAVY BACKGROUND + STATS */}
      {/* ================================================================ */}
      <section className="relative py-32">
        <WavyBackground className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-white">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <GlareCard
                key={stat.title}
                className="flex flex-col items-center justify-center p-8"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-xl font-semibold text-white text-center">
                  {stat.title}
                </p>
                <p className="text-sm text-neutral-400 text-center mt-1">
                  {stat.subtitle}
                </p>
              </GlareCard>
            ))}
          </div>
        </WavyBackground>
      </section>

      {/* ================================================================ */}
      {/* SECTION 5: VORTEX + FEATURES BENTO GRID */}
      {/* ================================================================ */}
      <section id="features" className="relative py-32">
        <Vortex backgroundColor="black" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <CanvasText
                text="Everything You Need to Thrive"
                className="text-3xl md:text-5xl font-bold"
              />
            </h2>
            <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              From funding to legal support, we provide the tools
              underrepresented businesses need to succeed.
            </p>

            <BentoGrid className="max-w-6xl mx-auto">
              {features.map((feature, i) => (
                <BentoGridItem
                  key={i}
                  title={feature.title}
                  description={feature.description}
                  header={
                    <div className="flex items-center justify-center h-20 text-4xl">
                      {feature.icon}
                    </div>
                  }
                  icon={<IconHeart className="h-4 w-4 text-indigo-400" />}
                  className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </Vortex>
      </section>

      {/* ================================================================ */}
      {/* SECTION 6: BACKGROUND LINES + CARD HOVER EFFECT */}
      {/* ================================================================ */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundLines className="opacity-20">
          <div className="absolute inset-0" />
        </BackgroundLines>
        <BackgroundBoxes className="absolute inset-0 opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Comprehensive support designed for underrepresented founders.
          </p>

          <CardHoverEffect
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              link: "#",
              image: s.image,
            }))}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 7: FOCUS CARDS + DIRECTION AWARE HOVER */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <SquigglyText>Featured Programs</SquigglyText>
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Hover over each card to explore our programs.
          </p>

          {/* DirectionAwareHover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {[
              {
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
                title: features[0].title,
                desc: features[0].description,
              },
              {
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
                title: features[1].title,
                desc: features[1].description,
              },
              {
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
                title: features[2].title,
                desc: features[2].description,
              },
              {
                img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
                title: features[3].title,
                desc: features[3].description,
              },
            ].map((f, i) => (
              <DirectionAwareHover key={i} imageUrl={f.img} className="h-72">
                <p className="font-bold text-xl">{f.title}</p>
                <p className="text-sm text-neutral-200">
                  {f.desc.slice(0, 60)}...
                </p>
              </DirectionAwareHover>
            ))}
          </div>

          {/* FocusCards */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-300">
            More Programs
          </h3>
          <FocusCards
            cards={[
              {
                title: "Grant Matching",
                src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
              },
              {
                title: "Mentorship",
                src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
              },
              {
                title: "Market Access",
                src: "https://images.unsplash.com/photo-1553729459-afe8f2e7e9a5?w=600&h=400&fit=crop",
              },
              {
                title: "Legal Clinics",
                src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
              },
              {
                title: "Community",
                src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
              },
              {
                title: "Analytics",
                src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
              },
            ]}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 8: 3D CARDS + GLARE CARDS + COMET CARDS */}
      {/* ================================================================ */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <ColourfulText text="Our Approach" />
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            We combine technology, community, and expertise to create real
            impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* 3D Card */}
            <ThreeDCard className="h-full">
              <div className="p-6 flex flex-col items-center text-center">
                <IconBulb className="h-12 w-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Matching</h3>
                <p className="text-neutral-400">
                  Our algorithms find opportunities you never knew existed.
                </p>
              </div>
            </ThreeDCard>

            {/* CometCard */}
            <CometCard className="h-full">
              <div className="p-6 flex flex-col items-center text-center">
                <IconUsers className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-neutral-400">
                  5,000+ mentors and 100K+ businesses supporting each other.
                </p>
              </div>
            </CometCard>

            {/* CardSpotlight */}
            <CardSpotlight className="h-full">
              <div className="p-6 flex flex-col items-center text-center">
                <IconShield className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Free & Accessible</h3>
                <p className="text-neutral-400">
                  Core services are always free. No equity, no fees, no
                  barriers.
                </p>
              </div>
            </CardSpotlight>
          </div>

          {/* Glare Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Grants",
                desc: "Access $45M+ in funding opportunities matched to your profile.",
                img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
              },
              {
                title: "Mentorship",
                desc: "Free 1-on-1 guidance from founders who share your background.",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
              },
              {
                title: "Market Access",
                desc: "Connect with buyers actively seeking diverse suppliers.",
                img: "https://images.unsplash.com/photo-1553729459-afe8f2e7e9a5?w=400&h=300&fit=crop",
              },
            ].map((item, i) => (
              <GlareCard key={i} className="p-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </GlareCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 9: EVERVAULT CARD + WOBBLE CARD + GLOWING STARS */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <CanvasText
              text="Why Founders Love Us"
              className="text-3xl md:text-5xl font-bold"
            />
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Here's what our community says about their experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Evervault Card */}
            <div className="flex flex-col items-center">
              <EvervaultCard text="Trust" />
              <p className="text-sm text-neutral-400 mt-4">
                "I found a $50K grant in my first week. Life-changing."
              </p>
            </div>

            {/* WobbleCard */}
            <WobbleCard className="p-8">
              <h3 className="text-2xl font-bold mb-4">Real Results</h3>
              <p className="text-neutral-300">
                87% of our members report revenue growth within their first
                year.
              </p>
            </WobbleCard>

            {/* GlowingStarsBackgroundCard */}
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>4.9★ Rating</GlowingStarsTitle>
              <GlowingStarsDescription>
                From 10,000+ verified business owner reviews
              </GlowingStarsDescription>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 10: ANIMATED MODAL + EXPANDABLE CARD + DRAGGABLE CARD */}
      {/* ================================================================ */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <TextGenerateEffect words="Interactive Experiences" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Animated Modal */}
            <AnimatedModal>
              <ModalTrigger className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg">
                See How It Works (Modal)
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h4 className="text-2xl font-bold mb-4">
                    How Inclusive Enterprise Works
                  </h4>
                  <div className="space-y-4">
                    <p>
                      1. <strong>Sign up free</strong> — Create your profile in
                      5 minutes.
                    </p>
                    <p>
                      2. <strong>Get matched</strong> — Our AI finds grants,
                      mentors, and opportunities for you.
                    </p>
                    <p>
                      3. <strong>Connect & grow</strong> — Access mentorship,
                      legal clinics, and the marketplace.
                    </p>
                    <p>
                      4. <strong>Track progress</strong> — Monitor your growth
                      with our analytics dashboard.
                    </p>
                  </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                    Get Started
                  </button>
                </ModalFooter>
              </ModalBody>
            </AnimatedModal>

            {/* Expandable Card */}
            <ExpandableCard />
          </div>

          {/* Draggable Cards */}
          <h3 className="text-2xl font-bold text-center mb-8">
            Drag to Explore
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["Grants", "Mentors", "Market", "Legal", "Community"].map(
              (item) => (
                <DraggableCard key={item}>
                  <div className="w-40 h-40 bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center text-xl font-bold">
                    {item}
                  </div>
                </DraggableCard>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 11: MACBOOK SCROLL + CONTAINER SCROLL */}
      {/* ================================================================ */}
      <section className="py-32">
        <ContainerScroll
          titleComponent={
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <CanvasText
                  text="Our Platform in Action"
                  className="text-3xl md:text-5xl font-bold"
                />
              </h2>
              <p className="text-neutral-400 text-xl">
                See how Inclusive Enterprise transforms the way underrepresented
                businesses grow.
              </p>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
            alt="Dashboard"
            width={1200}
            height={800}
            className="w-full h-full object-cover rounded-2xl"
          />
        </ContainerScroll>

        <div className="max-w-7xl mx-auto px-4 mt-32">
          <MacbookScroll
            title={
              <span className="text-4xl md:text-6xl font-bold">
                Built for <ColourfulText text="Impact" />
              </span>
            }
            badge="New"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
            showGradient={false}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 12: TESTIMONIALS CAROUSEL + CARD STACK + INFINITE MOVING */}
      {/* ================================================================ */}
      <BackgroundBeamsWithCollision className="py-32 bg-neutral-950 relative overflow-hidden">
        <Meteors number={30} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <SquigglyText>Voices from Our Community</SquigglyText>
          </h2>

          {/* Animated Testimonials */}
          <AnimatedTestimonials testimonials={testimonials} autoplay />

          {/* Card Stack */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-neutral-300">
            What They Say
          </h3>
          <div className="flex justify-center mb-20">
            <CardStack
              items={testimonials.slice(0, 3).map((t, i) => ({
                id: i,
                name: t.name,
                designation: t.designation,
                content: t.quote,
              }))}
            />
          </div>

          {/* Infinite Moving Cards */}
          <InfiniteMovingCards
            items={testimonials.map((t) => ({
              quote: t.quote,
              name: t.name,
              title: t.designation,
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </BackgroundBeamsWithCollision>

      {/* ================================================================ */}
      {/* SECTION 13: TEAM + TOOLTIP */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            A diverse team committed to leveling the playing field for
            underrepresented founders.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-20">
            <AnimatedTooltip items={team} />
          </div>

          {/* 3D Globe */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Global Reach
            </h3>
            <div className="h-[400px] w-full">
              <ThreeDGlobe />
            </div>
          </div>

          {/* World Map */}
          <div className="mb-20">
            <WorldMap />
          </div>

          {/* 3D Pin */}
          <div className="flex justify-center gap-8 mb-20">
            {["New York", "London", "Tokyo", "Lagos", "São Paulo"].map(
              (city) => (
                <ThreeDPin key={city} title={city} href="#">
                  <div className="w-32 h-32 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center font-bold">
                    {city}
                  </div>
                </ThreeDPin>
              ),
            )}
          </div>

          {/* 3D Marquee */}
          <ThreeDMarquee
            images={[
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1553729459-afe8f2e7e9a5?w=400&h=300&fit=crop",
            ]}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 14: TIMELINE + TRACING BEAM */}
      {/* ================================================================ */}
      <section id="timeline" className="py-32 relative">
        <TracingBeam className="px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Journey
            </h2>
            <Timeline data={timeline} />
          </div>
        </TracingBeam>
      </section>

      {/* ================================================================ */}
      {/* SECTION 15: COMPARE + TABS */}
      {/* ================================================================ */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <ColourfulText text="Before & After" />
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            See how Inclusive Enterprise transforms the journey for
            underrepresented founders.
          </p>

          {/* Compare */}
          <div className="mb-20">
            <Compare
              firstImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              secondImage="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
            />
          </div>

          {/* Tabs */}
          <h3 className="text-2xl font-bold text-center mb-8">How We Help</h3>
          <Tabs
            tabs={tabsData.map((tab) => ({
              title: tab.title,
              value: tab.value,
              content: (
                <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800">
                  <h4 className="text-xl font-bold mb-4">{tab.title}</h4>
                  <p className="text-neutral-400">{tab.content}</p>
                </div>
              ),
            }))}
            containerClassName="mb-20"
          />

          {/* Code Block */}
          <h3 className="text-2xl font-bold text-center mb-8">
            Our API (Developer-Friendly)
          </h3>
          <CodeBlock
            language="typescript"
            filename="inclusive-enterprise.ts"
            code={codeExample}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 16: STICKY SCROLL REVEAL + PARALLAX SCROLL */}
      {/* ================================================================ */}
      <section className="py-32">
        <StickyScroll
          content={[
            {
              title: "Grant Matching",
              description:
                "Our AI scans thousands of grants, loans, and funding programs daily. We match your business profile with opportunities you actually qualify for, saving you weeks of research.",
              content: (
                <div className="h-full w-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl">
                  💎
                </div>
              ),
            },
            {
              title: "Mentorship Network",
              description:
                "Connect with seasoned entrepreneurs who share your background and understand your unique challenges. Free one-on-one sessions with founders who've been where you are.",
              content: (
                <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-6xl">
                  🤝
                </div>
              ),
            },
            {
              title: "Community Marketplace",
              description:
                "Showcase your products to Fortune 500 procurement teams and a community of conscious consumers actively seeking diverse suppliers.",
              content: (
                <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-6xl">
                  🛍️
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* ================================================================ */}
      {/* SECTION 17: PARALLAX SCROLL + HERO PARALLAX */}
      {/* ================================================================ */}
      <section className="py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <LayoutTextFlip
            text="Our"
            words={["Community", "Network", "Family", "Movement"]}
          />
        </h2>

        <ParallaxScroll
          images={[
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop",
          ]}
        />
      </section>

      <section className="py-32">
        <HeroParallax
          products={[
            {
              title: "Grants",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
            },
            {
              title: "Mentorship",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
            },
            {
              title: "Marketplace",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1553729459-afe8f2e7e9a5?w=600&h=400&fit=crop",
            },
            {
              title: "Legal",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
            },
            {
              title: "Community",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
            },
            {
              title: "Analytics",
              link: "#",
              thumbnail:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            },
          ]}
        />
      </section>

      {/* ================================================================ */}
      {/* SECTION 18: BACKGROUND EFFECTS SHOWCASE */}
      {/* ================================================================ */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <BackgroundRippleEffect />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Background Effects Showcase
          </h2>
          <p className="text-neutral-400 text-xl mb-12">
            Click anywhere on this section to see the ripple effect in action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
              <Scales className="absolute inset-0 rounded-xl opacity-30" />
              <p className="relative z-10 text-lg font-semibold">
                Scales Pattern
              </p>
              <p className="relative z-10 text-neutral-400 text-sm mt-2">
                Diagonal lines pattern background
              </p>
            </div>

            <div className="relative p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
              <DottedGlowBackground className="absolute inset-0 rounded-xl" />
              <p className="relative z-10 text-lg font-semibold">Dotted Glow</p>
              <p className="relative z-10 text-neutral-400 text-sm mt-2">
                Animated dotted background with glow
              </p>
            </div>

            <div className="relative p-8 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm overflow-hidden">
              <NoiseBackground className="absolute inset-0 rounded-xl" />
              <p className="relative z-10 text-lg font-semibold">
                Noise Texture
              </p>
              <p className="relative z-10 text-neutral-400 text-sm mt-2">
                Animated gradient with noise texture
              </p>
            </div>
          </div>

          {/* GlowingEffect + GoogleGeminiEffect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative p-8 rounded-xl">
              <GlowingEffect />
              <h3 className="text-xl font-bold mb-2 relative z-10">
                Glowing Effect
              </h3>
              <p className="text-neutral-400 relative z-10">
                An adaptive glowing border that follows any container.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-2">Google Gemini Effect</h3>
              <GoogleGeminiEffect pathLengths={pathLengths} className="h-24" />
            </div>
          </div>

          {/* CanvasRevealEffect + SVGMaskEffect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="relative h-64 bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
              <CanvasRevealEffect
                containerClassName="absolute inset-0"
                colors={[
                  [108, 99, 255],
                  [168, 85, 247],
                ]}
                dotSize={3}
              />
              <div className="relative z-10 p-8">
                <h3 className="text-xl font-bold mb-2">Canvas Reveal</h3>
                <p className="text-neutral-300">Hover to reveal dot pattern</p>
              </div>
            </div>

            <div className="relative h-64 bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
              <SVGMaskEffect>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-2xl font-bold text-indigo-400">
                    Move your mouse here
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <p className="text-2xl font-bold text-white">
                    ✨ Revealed ✨
                  </p>
                </div>
              </SVGMaskEffect>
            </div>
          </div>

          {/* ImagesBadge + ParallaxHeroImages */}
          <div className="mb-12">
            <ImagesBadge
              images={[
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
              ]}
              text="Join 100K+ founders"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 19: APPLE CARDS CAROUSEL + IMAGES SLIDER */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <ContainerTextFlip
              words={["Stories", "Impact", "Change", "Success"]}
              interval={3000}
            />
          </h2>

          {/* Apple Cards Carousel */}
          <div className="mb-20">
            <AppleCardsCarousel
              items={blogPosts.map((post, i) => (
                <AppleCard
                  key={i}
                  card={{
                    src: post.image,
                    title: post.title,
                    category: post.date,
                    content: (
                      <div className="p-8">
                        <p className="text-neutral-400 mb-4">
                          {post.description}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {post.date} · {post.readTime}
                        </p>
                      </div>
                    ),
                  }}
                  index={i}
                />
              ))}
            />
          </div>

          {/* Images Slider */}
          <ImagesSlider
            images={[
              "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=600&fit=crop",
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
            ]}
            direction="down"
            className="rounded-2xl"
          >
            <div className="text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Join the Movement
              </h3>
              <p className="text-lg text-neutral-200">
                100,000+ underrepresented businesses and counting
              </p>
            </div>
          </ImagesSlider>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 20: CAROUSEL + LENS + POINTER */}
      {/* ================================================================ */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Explore More
          </h2>

          {/* Carousel */}
          <div className="mb-20">
            <Carousel
              slides={[
                {
                  title: "Community",
                  button: "Learn More",
                  src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
                },
                {
                  title: "Mentorship",
                  button: "Learn More",
                  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop",
                },
                {
                  title: "Workshop",
                  button: "Learn More",
                  src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
                },
              ]}
            />
          </div>

          {/* Lens */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">
              Hover to Zoom (Lens)
            </h3>
            <div className="flex justify-center">
              <div className="w-80 h-56">
                <Lens>
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                    alt="Zoom"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-full"
                  />
                </Lens>
              </div>
            </div>
          </div>

          {/* Following Pointer / FollowerPointerCard */}
          <FollowerPointerCard
            title={
              <div className="px-2 py-1 bg-indigo-600 text-white text-sm rounded-md">
                ✨ Follow me!
              </div>
            }
          >
            <div className="p-8 bg-neutral-900 rounded-xl border border-neutral-800 text-center">
              <h3 className="text-xl font-bold mb-2">Move Your Mouse Here</h3>
              <p className="text-neutral-400">
                See the custom pointer follow your cursor.
              </p>
            </div>
          </FollowerPointerCard>

          {/* PointerHighlight */}
          <div className="mt-12 text-center">
            <PointerHighlight>
              <p className="text-2xl font-bold">
                Hover over this text to see the{" "}
                <span className="text-indigo-400">highlight effect</span> in
                action
              </p>
            </PointerHighlight>
          </div>

          {/* TooltipCard + LinkPreview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TooltipCard
              content={
                <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
                  <p className="font-bold">Did you know?</p>
                  <p className="text-sm text-neutral-400">
                    Underrepresented businesses contribute $1.3T to the US
                    economy annually.
                  </p>
                </div>
              }
            >
              <button className="w-full p-6 bg-neutral-900 rounded-xl border border-neutral-800 text-left">
                <p className="text-lg font-semibold">Hover for a tip</p>
                <p className="text-neutral-400 text-sm">
                  TooltipCard with rich content
                </p>
              </button>
            </TooltipCard>

            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <p className="text-lg font-semibold mb-2">Link Preview</p>
              <p className="text-neutral-400 text-sm">
                Check out{" "}
                <LinkPreview
                  url="https://www.sba.gov"
                  className="text-indigo-400 underline"
                >
                  SBA Resources
                </LinkPreview>{" "}
                for more support for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 21: KEYBOARD + TERMINAL + ASCII ART + PIXELATED CANVAS */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <EncryptedText
              text="DEV"
              className="text-3xl font-mono tracking-widest"
            />
            <span className="block text-xl text-neutral-400 mt-4">
              For Developers & Tinkerers
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Keyboard */}
            <Keyboard className="w-full" />

            {/* Terminal */}
            <Terminal
              commands={[
                "inclusive-enterprise",
                "scan-grants",
                "matched",
                "apply",
              ]}
              outputs={{
                0: ["Welcome to Inclusive Enterprise CLI"],
                1: ["Scanning 12,450 grant opportunities..."],
                2: ["847 grants match your profile!"],
                3: ["AI-assisted applications being generated..."],
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ASCII Art */}
            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-4">ASCII Art Generator</h3>
              <AsciiArt
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=200&fit=crop"
                className="w-full h-auto"
              />
            </div>

            {/* Pixelated Canvas */}
            <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-bold mb-4">Pixelated Canvas</h3>
              <PixelatedCanvas
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 22: FAQ + LOADERS */}
      {/* ================================================================ */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <TextHoverEffect text="FAQ" />
          </h2>
          <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            Everything you need to know about Inclusive Enterprise.
          </p>

          <div className="space-y-4 mb-20">
            {faqs.map((faq, i) => (
              <AnimatedModal key={i}>
                <ModalTrigger className="w-full text-left p-4 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{faq.question}</span>
                    <IconPlus size={20} className="shrink-0 text-indigo-400" />
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-xl font-bold mb-4">{faq.question}</h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </ModalContent>
                </ModalBody>
              </AnimatedModal>
            ))}
          </div>

          {/* Loaders Showcase */}
          <h3 className="text-2xl font-bold text-center mb-8">
            Loader Components
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <LoaderOne />
            </div>
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <LoaderTwo />
            </div>
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <LoaderThree />
            </div>
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <LoaderFour />
            </div>
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <LoaderFive text="Loading" />
            </div>
          </div>

          {/* Multi Step Loader */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-4">
              Multi-Step Loader
            </h3>
            <Loader
              loading={true}
              loadingStates={[
                { text: "Finding grants..." },
                { text: "Matching your profile..." },
                { text: "Generating applications..." },
                { text: "Done!" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 23: CTA + FORMS */}
      {/* ================================================================ */}
      <section id="cta" className="relative py-32 overflow-hidden">
        <ShootingStars minDelay={800} maxDelay={3000} />
        <BackgroundGradient className="absolute inset-0 opacity-20" />
        <BackgroundGradientAnimation className="absolute inset-0 opacity-10" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <SquigglyText>Ready to Transform Your Business?</SquigglyText>
          </h2>
          <p className="text-xl text-neutral-300 mb-12">
            Join 100,000+ underrepresented founders who have found funding,
            mentorship, and community.
          </p>

          {/* PlaceholdersAndVanishInput */}
          <div className="mb-8">
            <PlaceholdersAndVanishInput
              placeholders={placeholderFormFields.map((f) => f.placeholder)}
              onChange={handlePlaceholderChange}
              onSubmit={handlePlaceholderSubmit}
            />
          </div>

          {/* GooeyInput */}
          <div className="mb-8">
            <GooeyInput
              placeholder="Search our resources..."
              className="w-full"
            />
          </div>

          {/* File Upload */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">
              Upload Your Business Plan
            </h3>
            <FileUpload onChange={(files) => console.log(files)} />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-all">
                Get Started Free <IconRocket size={20} />
              </button>
            </MagneticButton>

            <MovingBorder
              borderRadius="9999px"
              className="p-[1px]"
              containerClassName="inline-block"
            >
              <button className="bg-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2">
                Talk to Our Team <IconMessage size={20} />
              </button>
            </MovingBorder>
          </div>

          {/* Tailwind Buttons Showcase */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">More Button Styles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonsCard>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold">
                  Gradient Button
                </button>
              </ButtonsCard>
              <StatefulButton>Join Free</StatefulButton>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 24: HERO SECTIONS FREE + FEATURE SECTIONS + CARDS */}
      {/* ================================================================ */}
      <section className="py-32">
        <HeroSectionFree />
      </section>

      <section className="py-32 bg-neutral-950">
        <FeatureSections />
      </section>

      <section className="py-32">
        <CardsSections />
      </section>

      {/* ================================================================ */}
      {/* SECTION 25: TEXT REVEAL CARD + MORE TEXT COMPONENTS */}
      {/* ================================================================ */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <ContainerTextFlip
              words={["Discover", "Explore", "Uncover", "Learn"]}
              interval={3000}
            />
          </h2>

          {/* TextRevealCard */}
          <TextRevealCard
            text="Underrepresented businesses face systemic barriers to capital, networks, and markets."
            revealText="We're changing that. Join 100K+ founders who broke through."
          >
            <TextRevealCardTitle>The Hidden Truth</TextRevealCardTitle>
            <TextRevealCardDescription>
              Move your mouse across the card to reveal the message.
            </TextRevealCardDescription>
          </TextRevealCard>

          {/* TextFlippingBoard */}
          <div className="mt-20 w-full">
            <h3 className="text-2xl font-bold text-center mb-8">
              Live Board Display
            </h3>
            <TextFlippingBoard
              text="WELCOME TO INCLUSIVE ENTERPRISE"
              className="max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SECTION 26: BACKGROUND LAYOUT GRID */}
      {/* ================================================================ */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <LayoutTextFlip
              text="Our"
              words={["Gallery", "Portfolio", "Showcase", "Stories"]}
            />
          </h2>
          <LayoutGrid
            cards={[
              {
                id: 1,
                content: (
                  <div className="p-4">
                    <p className="font-bold text-lg">Grants Workshop</p>
                    <p className="text-sm text-neutral-300">
                      Over $45M in grants facilitated
                    </p>
                  </div>
                ),
                className: "md:col-span-2",
                thumbnail:
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
              },
              {
                id: 2,
                content: (
                  <div className="p-4">
                    <p className="font-bold text-lg">Mentorship Session</p>
                    <p className="text-sm text-neutral-300">
                      5,000+ active mentors
                    </p>
                  </div>
                ),
                className: "md:col-span-1",
                thumbnail:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
              },
              {
                id: 3,
                content: (
                  <div className="p-4">
                    <p className="font-bold text-lg">Community Event</p>
                    <p className="text-sm text-neutral-300">
                      100K+ businesses strong
                    </p>
                  </div>
                ),
                className: "md:col-span-1",
                thumbnail:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
              },
              {
                id: 4,
                content: (
                  <div className="p-4">
                    <p className="font-bold text-lg">Marketplace Launch</p>
                    <p className="text-sm text-neutral-300">
                      Serving 12 countries
                    </p>
                  </div>
                ),
                className: "md:col-span-2",
                thumbnail:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
              },
            ]}
          />
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOOTER */}
      {/* ================================================================ */}
      <footer className="relative pt-32 pb-8 overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <BackgroundBoxes className="opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Floating Dock in Footer */}
          <div className="mb-16">
            <FloatingDock
              items={[
                {
                  title: "Twitter",
                  icon: <IconBrandX className="h-5 w-5" />,
                  href: "#",
                },
                {
                  title: "GitHub",
                  icon: <IconBrandGithub className="h-5 w-5" />,
                  href: "#",
                },
                {
                  title: "LinkedIn",
                  icon: <IconBrandLinkedin className="h-5 w-5" />,
                  href: "#",
                },
                {
                  title: "Instagram",
                  icon: <IconBrandInstagram className="h-5 w-5" />,
                  href: "#",
                },
                {
                  title: "Email",
                  icon: <IconMail className="h-5 w-5" />,
                  href: "#",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">
                <ColourfulText text="Inclusive Enterprise" />
              </h4>
              <p className="text-neutral-400 text-sm">
                Empowering underrepresented businesses worldwide with funding,
                mentorship, and community.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Platform</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Grant Matching
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Mentorship
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Legal Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="flex items-center gap-2">
                  <IconMapPin size={14} /> San Francisco, CA
                </li>
                <li className="flex items-center gap-2">
                  <IconPhone size={14} /> (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <IconMail size={14} /> hello@inclusiveenterprise.io
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
            <p>
              &copy; 2025 Inclusive Enterprise. All rights reserved. Empowering
              underrepresented businesses everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
