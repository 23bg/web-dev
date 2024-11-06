import Footer from "@/components/Footer";
import ComplianceSection from "@/components/sections/ComplianceSection";
import CustomerFeedback from "@/components/sections/CustomerFeedback";
import { FAQSection } from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import ResourceSection from "@/components/sections/Resources";
import ScrollSection from "@/components/sections/ScrollSection";

import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollSection />
      <CustomerFeedback />
      <ComplianceSection />
      <ResourceSection />
      <FAQSection />
      <Footer />
    </>
  );
}
