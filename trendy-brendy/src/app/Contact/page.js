"use client";

import MapView from "@/components/MapView"
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineReplay } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import styles from "@/styles/Contact.module.css";

const faqs = [
  {
    question: "What is your return policy?",
    answer:"We totally understand that sometimes a product might not be the right fit. That’s why we offer a 7-day return window. If you’re not satisfied, you can return the item as long as it’s unused, in its original condition, and has the tags still attached. Just keep your receipt or order ID handy, and we’ll be happy to help you with the return process"
  },
  {
    question: "How long does shipping take?",
    answer:"Our standard shipping usually takes about 3 to 5 business days, depending on where you're located. Once your order is placed, you’ll receive a tracking number so you can stay updated on its journey. If you're in a metro area, it might arrive a bit sooner, but rural areas can take a day or two longer."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we do ship internationally to a number of countries! While international shipping is available, the delivery time and shipping charges may vary depending on the destination. We always recommend reaching out to our support team to confirm if we deliver to your location and what the costs might be."
  }
];

export default function Contact(){

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return(
        <div className={styles.contactmain}>
            <div className={styles.contactsec1}>
                <h3 >Why Choose Us ?</h3>
                <p>At Trendy Brendy, we curate the latest fashion trends with a focus on quality and style. Our mission is to empower you to express your unique style through our carefully
                selected collections. Experience fashion that fits your life.</p>

                <h3>Quick Assistance</h3>
                <button type="button"><FaRegCircleQuestion className={styles.icon} size={20} /> Order Inqueiries</button><br></br>
                <button type="button"><MdOutlineReplay className={styles.icon} size={20} /> Returns & Exchanges</button><br></br>
                <button type="button"><FaHandshake className={styles.icon} size={20} /> Partnerships</button><br></br>
            </div>

            <div className={styles.contactsec2}>
                <h1>Contact Us</h1>
                <form>
                    <label htmlFor="name">Your Name</label><br></br>
                    <input placeholder="Enter Your Name" id="name" /><br></br>

                    <label htmlFor="email">Email Address</label><br></br>
                    <input placeholder="Enter Your emal" id="email" /><br></br>

                    <label htmlFor="sub">Subject</label><br></br>
                    <input placeholder="Enter the subject" id="sub" /><br></br>

                    <label htmlFor="msg">Message</label><br></br>
                    <textarea placeholder="Enter your message" id="msg" /><br></br>

                    <button type="button" className={styles.submitbtn}>Submit</button>
                </form>

                <h3>Contact Information</h3>
                <p>Email : support@trendybrendy.com</p>
                <p>Phone : +91-0987654321</p>
                <p>Address : 123fashion ave style city, silevr jublie road</p>
                <MapView />

                <h3>Frequently Asked Questions</h3>
                <div className={styles.faqSection}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
            </div>            
        </div>
    )
}