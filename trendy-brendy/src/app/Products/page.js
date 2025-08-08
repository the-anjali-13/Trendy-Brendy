"use client"
import { useEffect, useState } from 'react';
import ProductCard from "@/components/ProductCard";
import styles from '@/styles/ProductCard.module.css';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [addcart, setaddcart] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addingtocart = (newItem) => {
  const existingIndex = addcart.findIndex(
    (item) => item.name === newItem.name
  );

  let updatedCart;
  if (existingIndex !== -1) {
    // Item already in cart → update quantity
    updatedCart = [...addcart];
    updatedCart[existingIndex].quantity += newItem.quantity;
  } else {
    // New item → add to cart
    updatedCart = [...addcart, newItem];
  }

  setaddcart(updatedCart);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
};


  return (

    <div className={styles.container}>
      <div style={{ minWidth: "25%" }} >
         <h3 style={{fontSize:"20px", marginBottom:"15px"}}>Filters</h3>
         <select className={styles.drop}>
            <option>-- Category --</option>
            <option>accessories</option>
            <option>clothing</option>
            <option>shoes</option>
            <option>bags</option>
         </select><br></br>

        {/* <label className={styles.droplab}>Sort By</label><br></br> */}
         <select className={styles.drop}>
            <option>-- Sort by price --</option>
            <option>High to low</option>
            <option>Low to High</option>
         </select><br></br>

         {/* <label className={styles.droplab}>Rating  (5 star)</label><br></br> */}
         <select className={styles.drop}>
            <option>-- Rating --</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
         </select><br></br>


      </div>
      <div style={{ flex: 1 }} >
        <h1 className={styles.heading}>All Products</h1>
      
        {products.length === 0 ? (
          <p >Loading products...</p>
        ) : (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                image={product.imgsrc}
                addcart={addingtocart}
                details={product}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    
  );
}
