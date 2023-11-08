import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LIST } from "../../utils/List";

const ShopCard = ({ addToCart, searchValue }) => {
  
  return (
    <div className="product">
      {LIST.Medicine.filter((obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }

        return false;
      }).map((item) => (
        <div key={item.id} className="product-inner">
          <div className="product-wrap">
            <img src={item.image} alt="" />
            <div className="actions">
              <AiOutlineShoppingCart onClick={() => addToCart(item)} />
            </div>
          </div>
          <div className="product-info">
            <h3 className="product-title">{item.title}</h3>
            <span className="price">₽ {item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
