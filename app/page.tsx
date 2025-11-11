"use client";

// Combined root page: renders the five section pages in order
import Landing from "./landing/page";
import Exterior from "./exterior/page";
import Driving from "./driving/page";
import Interior from "./interior/page";
import Showcase from "./showcase/page";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

export default function CombinedPage() {
  return (
    <main className="scroll-smooth">
      <ScrollAnimationWrapper direction="up" duration={0.8}>
        <Landing />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" duration={0.8} delay={0.1}>
        <Exterior />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" duration={0.8} delay={0.2}>
        <Driving />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" duration={0.8} delay={0.15}>
        <Interior />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" duration={0.8} delay={0.2}>
        <Showcase />
      </ScrollAnimationWrapper>
    </main>
  );
}

