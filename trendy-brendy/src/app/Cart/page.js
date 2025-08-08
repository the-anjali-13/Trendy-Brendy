'use client';

import { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import styles from "@/styles/cart.module.css"
import { RxCross2 } from "react-icons/rx";

export default function Cart(){

    const [cartlist, setCartlist] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
        setCartlist(JSON.parse(storedCart));
        }
    }, []);

    const updateQuantity = (id, newQty) => {
    const updatedCart = cartlist.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartlist(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // ← Update in localStorage
  };

  const dltcartitem = (itemid)=>{
      const updatedCart = cartlist.filter((item) =>
      itemid !== item.id 
    );
    setCartlist(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  }

    return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Cart</h1>
      <div className={styles.cartList}>
        {cartlist.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imgsrc} alt={item.name} className={styles.itemImage} />

            <div className={styles.itemDetails}>
              <b className={styles.itemName}>{item.name}</b>
              <p className={styles.itemCategory}>{item.category}</p>
            </div>

            <div className={styles.quantityControls}>
              <button
                onClick={() => updateQuantity(item.id,item.quantity-1 !==0?item.quantity-1:1)}
                className={styles.quantityButton}
              >
                <CiCircleMinus size={20} />
              </button>

              <span className={styles.quantityText}>
                {item.quantity || 1}
              </span>

              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className={styles.quantityButton}
              >
                <CiCirclePlus size={20} />
              </button>
            </div>

            <button className={styles.dlticon} onClick={()=>dltcartitem(item.id)}><RxCross2 size={15}/></button>
          </div>
        ))}
      </div>
    </div>
  );
}