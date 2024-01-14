import Product from '../components/Product.jsx';
import { products } from '../data/products.js';

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((prod, i) => (
        <Product key={i} product={prod} />
      ))}
    </div>
  );
};

export default Home;
