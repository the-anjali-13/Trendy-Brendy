import { GoHeart } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { BiLeaf } from "react-icons/bi";
import styles from "@/styles/About.module.css";

const values = [
    {
        icon : <GoHeart size={23} className={styles.icon}/>,
        title: "Quality",
        des : "We are committed to providing our customers with high-quality clothing and accessories that are both stylish and durable.",
    },
    {
        icon : <GoPeople size={23} className={styles.icon} />,
        title:"Community",
        des : "We foster a vibrant and inclusive community of fashion lovers, where everyone feels welcome and inspired.",
    },
    {
        icon : <BiLeaf size={23} className={styles.icon} />,
        title:"Sustainability",
        des : "We are dedicated to sustainable practices, from sourcing materials to reducing waste, to minimize our environmental impact.",
    }
]

const team = [
        {
            imgsrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuBrY7oK9_Vg_a9nknQEG_1fXfY1pJqXA175D4mqYiS7zW9Dd57GHUmZXGk2BcdBwJHsrdQcJCO58dCKF2e2p1NJmeiWb1nwfzXOIB8jCXKDUmqH8noc2VT747MwbzvbmzEcGwRXYuwisVyx29j8am86IMsCBYMpyP7uE317io1SMFd-d1kxalvcNELm82EWHAwiKQQSE32IREdqAe9t_mpvotziUL6d3Gm27IBGApPEs2b-sLidVQFucj0HjMJCX8WMtUwB3ru4m88",
            name:"Amelia Hayes",
            role:"Founder & CEO",
        },
        {
            imgsrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuDqMSAjzQZS0nvCWyahNEfXWf0KXMzSwYZPnBl1_9yH2q3J9tq6kV5e5QghRdX93Tqq9IiX8mVpmQ7lcOdRYgyH7dRn0dceetJJYrvA3hs8H4KTRo7CTCaHU4Yp0gfbui4_PJiizAIgm-5F8XBN0Us74iilxB10JDIdebCTpJuxpKrBasWw7zLHYm3H7Ss2qk525YLzpy7xs7N5GV7BK3kaaH8_yZkEiQ65Pyh6eR0cFIvmF9uOcqmkR3PcxfQPiSYdWlkUI_ep8aQ",
            name:"Ethan Carter",
            role:"Head of Design",
        },
        {
            imgsrc:"https://lh3.googleusercontent.com/aida-public/AB6AXuALm1z8aJzxGyb72F0nIU3_ay6SUe11vG1AkLA-WaOvEJrDPtz4VMUzpRZi55nJqb1dMKChS-TTb9i6cMUP-m-0gf8LWkzjbWEqF6OrWfh5SK3fYzvb6zev4kuatD5oEIPLlmJQPfubHHl9Eh5hk4zR6iArOlY2pgwL9x5EFxBELGn3V_T2qtwi848XwFtvvye720s_FgI0-Toq-ABYSQ5x-LFQZvTh562mSskJcBxiXIPQZd4DLNVNl_6fi3DoXCF0hLNiE3v_8go",
            name:"Olivia Bennett",
            role:"Marketing Director",
        }
]

export default function About(){
    return(
        <div className={styles.aboutmain}>
            <div className={styles.aboutcontant}>
                <h2>Our Story</h2>
                <p>Trendy Brendy was founded in 2018 by fashion enthusiast, Amelia Hayes, with a vision to create a platform that celebrates individuality and self-expression through
                fashion. What started as a small online boutique has grown into a leading e-commerce destination for trendy clothing and accessories, serving a global community of
                fashion-forward individuals.
                </p>
            </div>
            <div className={styles.aboutcontant}>
                <h3>Our Mission</h3>
                <p>At Trendy Brendy, our mission is to empower individuals to express their unique style and confidence through fashion. We curate a diverse collection of high-quality,
                on-trend pieces that cater to a wide range of tastes and preferences. We believe that fashion should be accessible, inclusive, and a source of joy for everyone.
                </p>
            </div>
            <div>
                <h3>Our Values</h3>
                <div className={styles.valuediv}>
                    {values.map(item => {
                        return (
                            <div key={item.title}>
                                {item.icon}
                                <h4>{item.title}</h4>
                                <p>{item.des}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <h3>Meet Our Team</h3>
                <div className={styles.teamdiv}>
                    {team.map(item => {
                        return (
                            <div key={item.role}>
                                <img src={item.imgsrc} className={styles.imgstyle} alt={item.name}/>
                                <h4>{item.name}</h4>
                                <p>{item.role}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={styles.aboutcontant}>
                <h3>Our Commitment to Quality</h3>
                <p> We carefully select our products from trusted suppliers and designers who share our commitment to quality. Each item is inspected to ensure it meets our high
              standards before it reaches our customers. We believe that quality should never be compromised, and we strive to deliver exceptional value with every purchase.
                </p>
            </div>
            <div className={styles.aboutcontant}>
                <h3>Looking Ahead</h3>
                <p>As we continue to grow, our vision for the future of fashion remains clear: to be a leading force in shaping trends, promoting inclusivity, and driving positive
              change in the industry. We are excited to embark on this journey with our community and look forward to creating a more stylish and sustainable future together.
                </p>
            </div>
        </div>
    )
}