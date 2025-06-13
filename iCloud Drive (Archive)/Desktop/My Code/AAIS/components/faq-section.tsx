"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the Africa Aviation Innovation Summit?",
    answer:
      "The Africa Aviation Innovation Summit is a premier event bringing together industry leaders, innovators, and stakeholders to discuss the future of aviation in Africa, with a focus on diversification and reaching new customer segments.",
  },
  {
    question: "When and where will the summit take place?",
    answer:
      "The summit will take place on October 17-18, 2025, in Nairobi, Kenya. The exact venue details are available on our Location & Travel page.",
  },
  {
    question: "How can I register for the summit?",
    answer:
      "You can register for the summit by visiting our Registration page and completing the registration form. Early bird pricing may be available for a limited time.",
  },
  {
    question: "Are there speaking opportunities at the summit?",
    answer:
      "Yes, we welcome speaker applications from industry experts. Please contact us at speakers@africaaviationsummit.com for more information on speaking opportunities.",
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "The summit includes dedicated networking sessions, panel discussions, and social events designed to facilitate meaningful connections among attendees.",
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer:
      "Refund policies are detailed during the registration process. Generally, refunds are available up to 30 days before the event, with partial refunds available after that date.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="title-font text-3xl md:text-4xl text-center mb-12 text-red-600">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left title-font text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
