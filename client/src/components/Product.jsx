/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md cursor-pointer">
      <img
        className="w-full h-48 object-contain mb-2"
        src={product.image}
        alt={product.name}
      />
      <h2 className="text-lg font-semibold overflow-ellipsis">
        {product.name}
      </h2>
      <div className="flex mt-1 items-center">
        <span className="text-yellow-500 mr-1">{product.rating}</span>
        <span className="text-gray-500 ">({product.numReviews} reviews)</span>
      </div>
      <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;
