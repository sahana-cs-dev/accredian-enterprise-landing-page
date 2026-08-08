import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import WhyEnterprise from "@/components/WhyEnterprise";
import Programs from "@/components/Programs";
import Approach from "@/components/Approach";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <WhyEnterprise />
        <Programs />
        <Approach />
        <Outcomes />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
