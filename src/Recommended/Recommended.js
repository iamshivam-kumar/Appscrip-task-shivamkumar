import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="recommended-select">
        <select onChange={handleClick}>
          <option className="product_name" value="">All Products</option>
          <option className="product_name" value="Nike">Nike</option>
          <option className="product_name" value="Adidas">Adidas</option>
          <option className="product_name" value="Puma">Puma</option>
          <option className="product_name" value="Vans">Vans</option>
        </select>
      </div>
    </>  
  );
};

export default Recommended;