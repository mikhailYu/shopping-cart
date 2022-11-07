import CheckoutItemCard from "./checkoutItemCard";
import uniqid from "uniqid";
import itemList from "../itemList";

export default function CheckoutItemLoader(props) {
  let checkoutCardsToLoad = itemList.map((item) => {
    if (item.Quantity > 0) {
      return (
        <CheckoutItemCard
          info={item}
          updateCartQuantity={props.updateCartQuantity}
          key={uniqid()}
        />
      );
    }
  });
  if (props.itemCount == 0) {
    return <div className="checkoutEmptyNote">Your cart is empty.</div>;
  } else {
    return <div className="checkoutCardsCont"> {checkoutCardsToLoad}</div>;
  }
}
