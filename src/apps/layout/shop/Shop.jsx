import React from "react";

import { Components } from "../../../components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HOOKS } from "../../../hooks";
import { Providers } from "../../../providers";

import "../../../styles/Shop.css";

const Shop = () => {
  const { actions } = HOOKS.useRedirect();
  const { cartItems, setCartItems } = Providers.useAuth();
  const [searchValue, setSearchValue] = React.useState("");

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) => (item.id === product.id ? { ...item } : item))
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };
  
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Components.Container>
      <Components.Divider>
        <div className="row">
          <Components.ShopInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <button onClick={actions.goToCart}>
            <AiOutlineShoppingCart />
          </button>
        </div>
        <Components.ShopCard addToCart={addToCart} searchValue={searchValue} />
      </Components.Divider>
    </Components.Container>
  );
};

export default Shop;
