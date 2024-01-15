import { useState, useEffect } from 'react';
import Product from '../components/Product.jsx';

import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      // console.log(res);
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products?.map((prod, i) => (
        <Product key={i} product={prod} />
      ))}
    </div>
  );
};

export default HomePage;
