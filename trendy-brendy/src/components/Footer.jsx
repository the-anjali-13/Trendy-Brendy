import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { FaRegCopyright } from "react-icons/fa";
import styles from "@/styles/Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footermain}>
        <h1>Stay in the Loop</h1>
        <p>Sign up for our newsletter to receive exclusive offer, style tips, and updates on new arrivals.</p>
        <div className={styles.subs}>
            <input 
                type="text"
                placeholder="Enter your email"
            />
            <button type="button">Subscribe</button>
        </div>
        <div className={styles.footlist}>
            <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>FAQ</li>
                <li>Shipping & Returns</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <FaInstagram size={25} className={styles.iconstyle}/>
            <TfiTwitter size={25} className={styles.iconstyle} />
            <ImFacebook2 size={25} className={styles.iconstyle} />
        </div>
        <div>
            <p><FaRegCopyright/>2025 Trendy Brendy All Right Reserved</p>
        </div>
    </div>
  )
}