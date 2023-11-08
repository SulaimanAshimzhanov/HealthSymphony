import React from "react";
import { Components } from "../../../components";
import { CgCloseR } from "react-icons/cg";
import { Providers } from "../../../providers";

import cls from "../../../styles/Cart.module.scss";

const Cart = () => {
  const { cartItems, setCartItems } = Providers.useAuth();

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const count = cartItems.reduce((sum, item) => sum + item.price, 0);

  React.useEffect(() => {
    const storedReviews = localStorage.getItem("cart");

    if (storedReviews) {
      setCartItems(JSON.parse(storedReviews));
    }
  }, []);

  return (
    <Components.Container>
      <Components.Divider>
        {!cartItems.length ? (
          <h1 style={{ fontSize: "40px", color: "white" }}>
            Нету выбранных товаров!
          </h1>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className={cls.cart}>
              <CgCloseR onClick={() => removeFromCart(item)} />
              <div className={cls.cart_row}>
                <img src={item.image} alt="" />
                <div className={cls.cart_row_content}>
                  <h3>{item.title}</h3>
                  <p>{item.price} Р</p>
                </div>
              </div>
            </div>
          ))
        )}
        <h1 style={{ color: "white" }}>TotalPrice {count} Р</h1>
      </Components.Divider>
    </Components.Container>
  );
};

export default Cart;
