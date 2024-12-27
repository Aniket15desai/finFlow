import AutomatedInvoice from "@/components/AutomatedInvoice";
import Financial from "@/components/Finacial";
import Footer from "@/components/Footer";
import FreeFunding from "@/components/FreeFunding";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import SeamlessIntegration from "@/components/SeamlessIntegration";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Vision />
      <Financial />
      <AutomatedInvoice />
      <SeamlessIntegration />
      <FreeFunding />
      <JoinUs />
      <Footer />
    </div>
  );
}
