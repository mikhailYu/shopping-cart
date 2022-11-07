import { Link } from "react-router-dom";
import "../../Checkout.css";
import CheckoutItemLoader from "../cards/checkoutItemLoader";
import itemList from "../itemList";
import CheckoutTotalList from "../cards/checkoutTotalList";

export default function CheckoutPage(props) {
  return (
    <div className="checkoutCont">
      <CheckoutItemLoader
        updateCartQuantity={props.updateCartQuantity}
        itemCount={props.itemCount}
      />

      <div className="checkoutTotalCont">
        <div className="checkoutInfoCont">
          <CheckoutTotalList itemCount={props.itemCount} />
        </div>
        <div className="checkoutBtnCont">
          <Link className="paymentA" to="/payment">
            <button
              type="button"
              className="checkoutBtn"
              onClick={() => {
                itemList.forEach((item) => {
                  item.Quantity = 0;
                  props.updateCartQuantity();
                });
              }}
            >
              Complete Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
