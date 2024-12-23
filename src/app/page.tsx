import Subcribe from "@/components/subcribe";
import EasyAndFast from "@/components/easy-and-fast";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import TopDestination from "@/components/top-destination";

export default function Home() {
  return (
    <div className="overflow-hidden grid content-start">
      <Hero />;
      <Services />
      <TopDestination />
      <EasyAndFast />
      <Testimonial />
      <Subcribe />
    </div>
  );
}
