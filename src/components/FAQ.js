import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How much does tiling cost per square meter?",
        answer: "Tiling costs vary depending on the tile type, surface prep, and complexity of the layout. On average, we charge between $45–$85 per square meter for standard installations. Premium tiles, intricate patterns, or waterproofing requirements may affect the final quote. We offer free, no-obligation on-site assessments for accurate pricing."
    },
    {
        question: "How long does a typical tiling job take?",
        answer: "Most bathroom or kitchen tiling jobs take 2–5 days, depending on size and complexity. Floor tiling in larger areas (like living rooms) may take 3–7 days. We always provide a detailed timeline before starting and keep you updated throughout the project."
    },
    {
        question: "Do you supply the tiles, or do I need to buy them?",
        answer: "We can work with tiles you’ve already purchased — or help you select and supply high-quality tiles from our trusted suppliers at trade prices. We’ll advise on durability, slip resistance, and suitability for your space (e.g., wet areas, high traffic)."
    },
    {
        question: "Do you handle waterproofing and substrate prep?",
        answer: "Absolutely. Proper substrate preparation and waterproofing (especially in bathrooms and wet areas) are critical for long-lasting results. We never skip these steps — and we guarantee our prep work to prevent future leaks or tile failures."
    },
    {
        question: "What types of tiles do you install?",
        answer: "We install all tile types: ceramic, porcelain, natural stone (marble, granite, slate), mosaic, glass, and large-format tiles. We also handle feature walls, herringbone patterns, and custom designs."
    },
    {
        question: "Can you fix or re-tile over existing tiles?",
        answer: "In most cases, yes — but it depends on the condition of the existing surface. We’ll inspect your current tiles to ensure they’re structurally sound and properly bonded. If not, we’ll recommend removal for the best long-term result."
    },
    {
        question: "What areas do you service?",
        answer: "We work mostly all accross NSW but depending on the project and situation we can work on other locations as well. Contact us to confirm if we cover your location — we’re always expanding!"
    },
    {
        question: "How do I book a consultation or get a quote?",
        answer: "Simply call us at +61 469735781, email zamanqasimi@gmail.com, or fill out the contact form on our website. We respond within 24 hours and can schedule a free site visit to assess your project and provide a fixed-price quote."
    }
];

function FAQ() {
    return (
        <section id="faq" className="faq">
            <h2 className="faq-title">FAQ (Frequently Asked Questions)</h2>

            <Accordion.Root type="single" collapsible className="faq-accordion">
                {faqs.map((faq, idx) => (
                    <Accordion.Item key={idx} value={`item-${idx}`} className="faq-item">
                        <Accordion.Header>
                            <Accordion.Trigger className="faq-trigger"> 
                                {faq.question}
                                <ChevronDown className="chevron" aria-hidden />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="faq-content">
                            <p>{faq.answer}</p>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </section>
    );
}

export default FAQ;
