import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()  => {
    const fetchData = async  () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data); 

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]); // Ensures data is fetched only when productId changes

  return (
    <div>
      {isLoading ? (
        <p>Loading product details...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>{product.category}</p>
          <p><img src={product.image} alt="not visible" width="10%" height="10%"></img></p>
          <p><u>Rate</u>{product.rating.rate}<br></br>
          <u>count</u>{product.rating.count}</p>
          {/* Add additional product details as needed */}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;