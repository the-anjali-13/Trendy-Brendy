import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { BsDiamondHalf } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiUser6Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      
      <h5 className={styles.title}><BsDiamondHalf size={18} />   Trendy Brendy</h5>
      <ul className={styles.list}>
        <li><Link href="/"className={styles.link} >Home</Link></li>
        <li><Link href="/Products" className={styles.link} >Products</Link></li>
        <li><Link href="/About" className={styles.link} >About</Link></li>
        <li><Link href="/Contact" className={styles.link} >Contact</Link></li>
        <li><Link href="/Cart" className={styles.link} >Cart</Link></li>
        <li><Link href="/Wishlist" className={styles.link} > <FaRegHeart size={20} /></Link></li>
        {/* <li><Link href="" className={styles.link} ><RiUser6Line/></Link></li> */}
      </ul>
    </nav>
  );
}
