import AnimatedCard from "./AnimatedCard";
import DemoCard from "./DemoCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
        <AnimatedCard />
      </div>
      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        <DemoCard />
      </div>
    </section>
  );
}