import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { AnimatedTooltipPreview } from "@/components/Tooltip";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import Whychooseus from "@/components/Whychooseus";




export default function Home() {
  return (
    <main>
      <SpotlightPreview />
      <FeaturedCourses />
      <Whychooseus/>
      <InfiniteMovingCardsDemo />
      <Upcomingwebinars />
      <AnimatedTooltipPreview/>
      
    </main>
  );
}
