import { useState } from "react";
import itemList from "../itemList";

export default function CheckoutItemCard(props) {
  const [quantity, SetQuantity] = useState(props.info.Quantity);
  return (
    <div className="checkoutCardCont">
      <div className="checkoutCardName">{props.info.Name}</div>
      <img className="checkoutCardItemImg" src={props.info.srcImage}></img>

      <div className="checkoutCardPrice">
        {props.info.Price}
        <img src={require("../../images/runeIcon.png")}></img>
      </div>
      <div className="quantityCont">
        <button
          className="minusQuantity"
          type="button"
          onClick={() => {
            if (itemList[props.info.ID].Quantity > 0) {
              itemList[props.info.ID].Quantity--;
              SetQuantity(itemList[props.info.ID].Quantity);
              props.updateCartQuantity();
            }
          }}
        >
          -
        </button>
        <div className="quantityCounter">{quantity}</div>
        <button
          className="addQuantity"
          type="button"
          onClick={() => {
            itemList[props.info.ID].Quantity++;
            SetQuantity(itemList[props.info.ID].Quantity);
            props.updateCartQuantity();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
