import { Link } from "react-router-dom";

import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Strona productu</div>
      <Product id={match.params.id} />
      <Link to="/products/">powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
