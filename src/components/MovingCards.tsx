"use client";


import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[45rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-white text-4xl mb-8 font-semibold">Hear our Harmony: Voices of Success</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Learning guitar on this platform has been an absolute game-changer. The step-by-step tutorials and practice tools helped me play my first song in just two weeks!",
      name: "Emily Johnson",
      title: "Beginner Guitarist",
    },
    {
      quote:
        "As a music producer, I've used many platforms, but this one stands out. The lessons on music theory and production techniques are top-notch and easy to follow.",
      name: "Michael Lee",
      title: "Music Producer",
    },
    {
      quote:
        "I’ve been playing piano for years, but the advanced lessons on improvisation and jazz theory have taken my skills to the next level. Highly recommend for musicians of all levels!",
      name: "Sophia Martinez",
      title: "Pianist and Composer",
    },
    {
      quote:
        "The vocal exercises and tips have greatly improved my singing range and control. The community here is also super supportive, making learning fun and engaging.",
      name: "Alex Thompson",
      title: "Vocalist",
    },
    {
      quote:
        "From mastering my favorite songs to creating my own music, this platform has everything. The real-time feedback on my recordings helps me improve with every session.",
      name: "Chris Evans",
      title: "Songwriter and Guitarist",
    },
  ];
  
