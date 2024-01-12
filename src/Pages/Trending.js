import React, {useState} from 'react'
import { Postlist } from '../Components/Postlist'

const generateRandomProduct = () => {
    const id = Math.random().toString(36).substring(7);
    const name = Array.from({ length: Math.floor(Math.random() * 6) + 5 }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join('');
    const price = (Math.random() * (100 - 10) + 10).toFixed(2);
  
    return { id, name, price };
  };
  

export const Trending = () => {
    const [products, setProducts] = useState([]);
    const generateRandomProducts = () => {
        const numProducts = 50; // You can change this to the desired number of products
        const newProducts = Array.from({ length: numProducts }, () => generateRandomProduct());
        setProducts(newProducts);
      };
    
   
  return (
    <div>
         <button onClick={generateRandomProducts}>Generate Random Products</button>       
         <div className='products'>
         {
            products.map((product) => 
            <Postlist product={product}/>
            )
         }
         </div>
         </div>
  )
}
