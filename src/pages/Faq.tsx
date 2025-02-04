
import "../assets/styles/Faq.css";


import React, { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs: FAQItem[] = [
        {
            question: "How to contact the Town Manager?",
            answer: "answer: \"To contact the Town Manager of the Ale Zone, individuals can reach out via email or phone, both of which are listed on the official Ale Zone website. For more personal interactions, appointments can be scheduled through the website or by calling the Town Manager’s office during business hours.\"",
        },
        {
            question: "What are Town Hall’s hours?",
            answer: "The Town Kolango is open Monday through Friday from 9:00 AM to 5:00 PM. Weekend hours may vary." },
        {
            question: "Where is the Town Hall located?",
            answer: "The Town Kolango is located in the central district of ...., near the main market square."},
    ];

    return (
        <div className="faq-container">
            <h1 className='faq-h1'>FAQ</h1>
                        <h3 className='fqs-h3'>Find all your answers and more in our FAQ section - your gateway to understanding Harari Regional State's services and community insights.</h3>

            <div className="faq-list">
                {faqs.map((faq, index: number) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                    >
                        <div className="faq-question" onClick={() => toggleQuestion(index)}>
                            {faq.question}
                            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
