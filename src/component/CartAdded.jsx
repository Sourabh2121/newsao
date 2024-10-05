import React, { useEffect } from "react";

const CartAdded = ({
  cartProducts,
  setQuantity,
  quantity,
  setCartProducts,
  success,
  setShowProduct,
  showProduct,
  setShowViewCart,
  windowWidth,
  setCartAdded,
}) => {
  //   for increment count
  const handleIncrement = (productId) => {
    setQuantity((prevQuantities) => {
      const updatedQuantities = {
        [productId]: (prevQuantities[productId] || 1) + 1,
      };

      // Store  quantities in localStorage
      localStorage.setItem("cartQuantities", JSON.stringify(updatedQuantities));

      return updatedQuantities;
    });
  };

  // for decrement count
  const handleDecrement = (productId) => {
    setQuantity((prevQuantities) => ({
      [productId]: Math.max(1, (prevQuantities[productId] || 1) - 1), //atleast value 1, 0 or negative
    }));
  };

  const removeCart = (cartId) => {
    const removeCartItem = cartProducts.filter((prev) => prev.id !== cartId);
    setCartProducts(removeCartItem);
    localStorage.setItem("cart", JSON.stringify(removeCartItem));
  };
  const setShowProductpage = () => {
    if (windowWidth < 600) {
      setShowViewCart(false);
    }
    setShowProduct(true);
  };
  useEffect(() => {
    setCartAdded(false);
  }, []);
  return (
    <>
      <div className="shadow-sm p-3 mb-3 bg-white">
        <h4>Current order</h4>
        {console.log(cartProducts)}
        {cartProducts.length > 0 ? (
          cartProducts.map((item) => (
            <>
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between mb-2"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    //   src={item.image}
                    src="https://b.zmtcdn.com/data/pictures/3/18691153/39911fc41d8d2e9059ac2f22ffcbf3be.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    alt={item.name}
                    className="cartImage"
                  />
                  <h6 className="mb-0">{item.name}</h6>
                </div>
                <h6 className="mb-0">
                  <i className="bx bx-rupee"></i>
                  {item.price * (quantity[item.id] || 1)}
                </h6>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="text-center rounded-pill w-50"
                  style={{ border: "1px solid #ff4500" }}
                >
                  <button
                    className="btn py-0"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <i className="bx bx-minus" />
                  </button>
                  <span className="mx-2">{quantity[item.id] || 1}</span>
                  <button
                    className="btn py-0"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <i className="bx bx-plus" />
                  </button>
                </div>
                <span
                  className="trash shadow-sm ce-auto"
                  onClick={() => removeCart(item.id)}
                >
                  <i className="bx bx-trash fs-5 " />
                </span>
              </div>
            </>
          ))
        ) : (
          <p>No orders in cart</p>
        )}
      </div>
      <div className="shadow-sm p-3 bg-white">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <h6 className="mb-0">
            Subtotal ({cartProducts.length}{" "}
            {cartProducts.length > 1 ? "items" : "item"})
          </h6>
          <p className="mb-0">
            <i className="bx bx-rupee"></i>
            {cartProducts.reduce((acc, item) => {
              return (acc + item.price) * item.quantity;
            }, 0)}
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 justify-content-center">
          {!showProduct && (
            <div className="text-center">
              <button
                className="btn bg-orange-500 text-white"
                onClick={setShowProductpage}
              >
                Show Products
              </button>
            </div>
          )}
          <div className="text-center">
            <button className="btn bg-orange-500 text-white" onClick={success}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartAdded;
