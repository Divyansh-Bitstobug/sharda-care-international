"use client";
import React, { useState } from "react";

// --- FAQ Data ---
const faqsData = [
  {
    question: "How long is the waiting time for a heart transplant?",
    answer:
      "Waiting time varies depending on blood group, body size, and urgency. Some patients wait weeks; others may wait months.",
  },
  {
    question: "Is heart transplant safe?",
    answer:
      "In symptomatic advance heart failure heart transplant/LVAD is the only treatment possible. Transplant has risks as well as benefits which is assessed during work up and the risk benefit ratio is explained to the family. Overall 1 year Survival rates after transplant -90%.",
  },
  {
    question: "How long does a transplanted heart last?",
    answer:
      "Mean survival is around 12-14 years. Younger patients with preserved end organs and medication compliance have seen to live 20 years or more also.",
  },
  {
    question: "Will I need medicines for life?",
    answer:
      "Yes. Lifelong immunosuppressive medicines are essential to prevent rejection.",
  },
  {
    question: "Can I live normally after transplant?",
    answer:
      "Most patients return to normal daily activities, travel, and even work within months.",
  },
  {
    question: "Is LVAD a permanent solution?",
    answer:
      "It can be permanent (destination therapy) or temporary (bridge to transplant), depending on patient suitability.",
  },
  {
    question: "Can I travel with an LVAD?",
    answer:
      "Yes, with proper training, backup batteries, and regular follow-up.",
  },
  {
    question: "What lifestyle changes are needed?",
    answer:
      "Healthy diet, regular follow-up, infection precautions, medication adherence, and supervised exercise.",
  },
  {
    question: "What is the success rate of LVAD?",
    answer:
      "Modern LVAD devices significantly improve 1- and 2-year survival rates and quality of life in advanced heart failure patients. Average survival at 1 year is 80 to 85%.",
  },
  {
    question: "When should I seek evaluation?",
    answer:
      "If you have repeated hospital admissions, severe breathlessness, or very low heart function despite treatment, increasing water retention, changes in heart beating - consult immediately.",
  },
];

const FAQs: React.FC = () => {
  // State to manage which FAQ is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // State to manage showing 5 vs all 10
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Determine how many FAQs to show based on state
  const visibleFaqs = showAll ? faqsData : faqsData.slice(0, 5);

  return (
    <section className="pb-16 bg-white">
      <div className="mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-[#333]">
            FAQ's
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            Hear how patients from around the world transformed their lives with our care.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="border border-gray-200 rounded-3xl p-6 bg-white">
          
          {/* FAQ List */}
          <div className="flex flex-col">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-none"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className=" cursor-pointer w-full flex justify-between items-center py-5 md:py-6 text-left focus:outline-none group"
                  >
                    <span className="text-[14px] md:text-lg text-[#333333] pr-6 group-hover:text-[#E3396C] transition-colors">
                      {faq.question}
                    </span>
                    
                    {/* Plus / Minus Icon */}
                    <span className="flex-shrink-0 text-gray-400 group-hover:text-[#E3396C] transition-colors">
                      {isOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer Content (Animated) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#4B4B4B] text-sm md:text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Read More / Read Less Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 rounded-full gap-2 bg-gradient-to-r from-[#E3396C] to-[#EC7E4B] text-white font-medium text-sm hover:opacity-90 transition-opacity flex items-center shadow-sm"
            >
              {showAll ? "Read Less" : "Read More"}
              <span className="bg-white rounded-full p-1 flex items-center justify-center text-gray-900">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQs;