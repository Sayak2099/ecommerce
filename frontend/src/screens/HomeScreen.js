import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import data from "../data";


function HomeScreen(){
  const[products,setProducts] =useState([]);
  useEffect(()=>{
     const fetchData = async()=>{
      const result = await axios.get('/api/products');
      setProducts(result.data);
     };
     fetchData();
  },[]);
    return <div>
         <h1>
          Featured Products
        </h1>
        <div className="Products">
        {products.map((product)=>(
          <div className="Product" key={product.slug }>
            <Link to={`/product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </Link>
            <div className="Product-info">
              <Link to={`/product/${product.slug}`}>
            <p>
              {product.name}
            </p>
            </Link>
            <p>
              <strong>Rs{product.price}</strong>
            </p>
            <button>Add to cart</button>
            </div>
          </div>
        ))}
        </div>
    </div>
}
export default HomeScreen;