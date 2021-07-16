import { Link } from "react-router-dom";
import "../styles/ProductsPageList.css";

const products = ["car", "bike", "motorcycle"];

const ProductPage = () => {
  const list = products.map((product) => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <div className="products">
      <h2>list produktów</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductPage;
