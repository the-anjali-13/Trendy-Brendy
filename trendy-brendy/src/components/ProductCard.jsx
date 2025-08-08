"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/ProductCard.module.css';
import { FaRegHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const ProductCard = ({ title, price, image, addcart, details}) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const itemWithQuantity = {
      ...details,
      quantity: quantity
    };
    addcart(itemWithQuantity);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>Rs. {price}</p>
      <div style={{ 
        margin: "10px 110px", 
        display: "flex", 
        alignItems: "center" 
      }}>

        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{backgroundColor:"transparent",border:"none"}}>
          <CiCircleMinus size={20}/>
        </button>

        <span style={{ margin: "0px 10px" }}>{quantity}</span>

        <button onClick={() => setQuantity(q => q + 1)} style={{backgroundColor:"transparent",border:"none"}}>
          <CiCirclePlus size={20} />
        </button>

      </div>
      <button onClick={handleAddToCart} className={styles.addtocartbtn}>Add To Cart</button>
      <button style={{ border:"none", backgroundColor:"transparent"}}><FaRegHeart size={20} /></button>
      
    </div>
  );
};

export default ProductCard;
