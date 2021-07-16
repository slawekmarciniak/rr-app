const Product = ({ id }) => {
  return (
    <div
      style={{
        color: "red",
        textTransform: "uppercase",
      }}
    >
      {id}
    </div>
  );
};

export default Product;
