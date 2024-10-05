import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const productData = localStorage.getItem("cart");
    if (productData) {
      setCartProducts(JSON.parse(productData));
    }
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleClear = () => {
    setCartProducts([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container py-4">
      <button className="btn btn-secondary mb-3" onClick={handleBack}>
        Back
      </button>
      <button className="btn btn-danger mb-3 ms-3" onClick={handleClear}>
        Remove All
      </button>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <div key={product.id} className="card mb-3">
            <div className="card-body row">
              <div className="col-6">
                <img
                  src={product.images[0].src}
                  alt={product.title}
                  className="card-img-top mb-3"
                />
              </div>
              <div className="col-6">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  Price:{" "}
                  {(product.variants[0].price * product.quantity).toFixed(2)}
                </p>
                <p>Quantity: {product.quantity}</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5>No products in the cart.</h5>
      )}
    </div>
  );
};

export default CartPage;
