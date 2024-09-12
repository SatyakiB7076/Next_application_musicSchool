import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
    {
      title: "Collaborative Music Creation",
      description:
        "Jam together with musicians in real-time, no matter where they are. Share your ideas, work on compositions, and bring your music to life collaboratively. Our platform makes it easy to co-create music, allowing you to streamline the creative process and produce tracks seamlessly.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
    {
      title: "Real-Time Music Updates",
      description:
        "Hear changes as they happen. Whether you're composing, editing, or mixing, our platform allows you to track every adjustment in real-time. No more confusion about which version is the latest — stay on top of every note, every beat, and every change in your project effortlessly.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "Version Control for Your Tracks",
      description:
        "Manage your song versions with ease. Our platform ensures you're always working on the latest take of your music, making it simple to compare, review, and restore previous versions. Keep your creative flow intact without worrying about losing any of your musical ideas.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
    {
      title: "Never Run Out of Inspiration",
      description:
        "Stuck on a melody or chord progression? Our platform offers built-in inspiration tools and community-driven ideas to keep your creativity flowing. Collaborate with other musicians or explore new techniques to spark fresh ideas and complete your next masterpiece.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
  ];
  
const Whychooseus = () => {
  return (
    <div>
      <StickyScroll content={content} ></StickyScroll>
    </div>
  )
}

export default Whychooseus
