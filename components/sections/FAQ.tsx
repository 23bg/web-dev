import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <div className="flex flex-col lg:flex-row items-start px-4 sm:px-8 lg:px-16 py-16 lg:py-40">
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold w-full lg:w-1/4 mb-8 lg:mb-0">
        FAQ
      </h2>
      <div className="w-full lg:w-3/4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg sm:text-xl font-semibold">
              What is clay?
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-base sm:text-lg leading-tight mb-8">
                Clay helps go-to-market teams uplevel their data enrichment and
                automate personalized outreach. You can start with a list of
                leads, either prospected through Clay or from your own CRM, and
                follow the steps below.
              </div>

              {[
                {
                  title: "Step 1: Basic Data Enrichment & Cleaning",
                  content:
                    "Clay combines 75+ data enrichment tools into one marketplace, resulting in superior data coverage and quality—on anything from contact information to company firmographics. Our customers have tripled data coverage vs. providers like Zoominfo while cutting costs by a magnitude of ten or twenty.",
                },
                {
                  title: "Step 2: AI Data Enrichment",
                  content:
                    "We enable you to use AI to do research that previously required manual SDR work, including reading and analyzing webpages, PDFs, and Google searches for specific information.",
                },
                {
                  title: "Step 3: Automated Outreach",
                  content:
                    "Once you've nailed your data enrichment, you can use AI to craft relevant, compelling messaging based on that data. Everything syncs back to your CRM, allowing your team to go from campaign idea to execution in seconds.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg leading-tight">
                    {step.content}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg sm:text-xl font-semibold">
              What kind of companies use clay?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg">
              We serve GTM teams of all sizes, ranging from large enterprise
              companies to SMBs, startups, solo founders, outbound agencies, and
              more. We have thousands of users and hundreds of paying customers,
              including Ramp, Pave, Verkada, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg sm:text-xl font-semibold">
              What tools does clay replace for me?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg">
              Clay can replace your prospecting, data enrichment, and AI message
              drafting tools. We don&apos;t replace email sending tools or CRMs
              (we integrate with them!) Many people run successful campaigns
              using just Clay, an email sending tool, and a CRM. You can
              continue to use any tools you have subscriptions to in Clay.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg sm:text-xl font-semibold">
              What common use cases can I accomplish in Clay?
            </AccordionTrigger>
            <AccordionContent className="text-base sm:text-lg">
              Build lists from CSVs or 10+ prospecting sources including free
              access to companies, people, and open jobs data. Enrich data with
              75+ enrichment tools for superior data quality and coverage as
              compared to relying on just one tool. Use AI to scrape websites,
              do unstructured research that previously required SDRs, and draft
              messages. Teams commonly also use Clay to automate outbound lead
              generation campaigns, CRM enrichment, inbound lead scoring and
              outreach, and more.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
