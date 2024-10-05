import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsData } from "./api_helper";
import HeaderBar from "./HeaderBar";
import Swal from "sweetalert2";
import CartAdded from "./CartAdded";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [quantity, setQuantity] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentCart, setCurrentCart] = useState([]);
  const [cartAdded, setCartAdded] = useState(false);
  const [showViewCart, setShowViewCart] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showProduct, setShowProduct] = useState(true);

  //  for add into cart
  const handleBuyNow = (product) => {
    // setShowViewCart(true);
    setCartAdded(true);

    const storeCart = JSON.parse(localStorage.getItem("cart")) || [];

    // if product is already in the cart
    const existingProductIndex = storeCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      storeCart[existingProductIndex].quantity += 1;
    } else {
      storeCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(storeCart));

    setCurrentCart(storeCart);
    setCartProducts(storeCart);
  };

  useEffect(() => {
    const productData = localStorage.getItem("cart");
    if (productData) {
      setCartProducts(JSON.parse(productData));
    }
  }, []);
  const success = () => {
    Swal.fire({
      title: "Order Successful!",
      text: "Your order has been placed successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const ViewCart = () => {
    if (windowWidth < 600) {
      setShowProduct(false);
    }
    setShowViewCart(true);
  };

  useEffect(() => {
    let windowSize = window.innerWidth;
    if (windowSize < 600) {
      if (showViewCart) {
        setShowProduct(false);
      }
    } else {
      setShowViewCart(true);
    }
    setWindowWidth(windowSize);
  }, []);

  return (
    <>
      <HeaderBar filterValueSearch={setFilterValue} />
      <section className="container">
        <div className="row py-3">
          {showProduct && (
            <div className="col-md-8">
              <ul
                className="nav nav-pills my-3 mb-lg-4"
                id="pills-tab"
                role="tablist"
              >
                {/*took list of object Each Tab */}
                {Object.keys(products).map((category, index) => (
                  <li className="nav-item" role="presentation" key={category}>
                    <button
                      className={`nav-link rounded-pill shadow-sm ${
                        index === 0 ? "active" : ""
                      }`}
                      id={`pills-${category}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#pills-${category}`}
                      type="button"
                      role="tab"
                      aria-controls={`pills-${category}`}
                      aria-selected={index === 0}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Content for Each Tab */}
              <div className="tab-content" id="pills-tabContent">
                {Object.keys(products).map((category, index) => {
                  console.log(category);
                  return (
                    <div
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`pills-${category}`}
                      role="tabpanel"
                      aria-labelledby={`pills-${category}-tab`}
                      key={category}
                    >
                      <div className="row justify-center">
                        {products[category].map((product) => {
                          return (
                            product.name
                              .toLowerCase()
                              .includes(filterValue.toLowerCase()) && (
                              <div
                                key={product.id}
                                className="col-6 col-lg-4 mb-4"
                              >
                                <div className="card border-0 shadow-sm h-100">
                                  <div className="card-body">
                                    <div className="imag-product overflow-hidden mb-2">
                                      <img
                                        // src={product.image}
                                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/r2ko7dyjdwtxg8i5rt16"
                                        alt={product.name}
                                        className="card-img-top"
                                      />
                                    </div>
                                    <h5 className="card-title">
                                      {product.name}
                                    </h5>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                      <p className="card-text mb-0">
                                        <b>Price:</b> {product.price}
                                      </p>
                                      <span className="rating">
                                        4.4 <i className="bx bxs-star"></i>
                                      </span>
                                    </div>
                                    <button
                                      className="btn add-btn-product"
                                      onClick={() => handleBuyNow(product)}
                                    >
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="col-md-4">
            {showViewCart && (
              <CartAdded
                showProduct={showProduct}
                cartProducts={cartProducts}
                quantity={quantity}
                setQuantity={setQuantity}
                setCartProducts={setCartProducts}
                success={success}
                setShowProduct={setShowProduct}
                windowWidth={windowWidth}
                setShowViewCart={setShowViewCart}
                setCartAdded={setCartAdded}
              />
            )}
          </div>
          {cartAdded && windowWidth < 600 && (
            <div className="text-center viewCard">
              <button
                className="btn bg-orange-500 text-white"
                onClick={ViewCart}
              >
                item added view cart
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
