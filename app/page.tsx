"use client";

// Combined root page: renders the five section pages in order
import Landing from "./landing/page";
import Exterior from "./exterior/page";
import Driving from "./driving/page";
import Interior from "./interior/page";
import Showcase from "./showcase/page";

export default function CombinedPage() {
  return (
    <main>
      <Landing />
      <Exterior />
      <Driving />
      <Interior />
      <Showcase />
    </main>
  );
}

