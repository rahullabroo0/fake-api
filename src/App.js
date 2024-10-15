//This code displays only one product at a time with ProductDetails.js
import ProductDetails from './ProductDetails';

const App = () => {
  const productId = 1; // Replace with the desired product ID

  return (
    <div align="center">
      <ProductDetails productId={productId} />
    </div>
  );
};

export default App;