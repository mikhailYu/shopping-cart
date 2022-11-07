import itemList from "../itemList";

export default function CheckoutTotalList(props) {
  function createSubtotal() {
    let checkoutSubtotalList = itemList.map((item) => {
      if (item.Quantity > 0) {
        return (
          <p>
            {item.Quantity * item.Price}
            <img
              className="subTotalRuneImg"
              src={require("../../images/runeIcon.png")}
            ></img>
          </p>
        );
      }
    });
    return checkoutSubtotalList;
  }

  function createCheckoutList() {
    let checkoutListNames = itemList.map((item) => {
      if (item.Quantity > 0) {
        return <p>{item.Name + " X " + item.Quantity}</p>;
      }
    });

    return checkoutListNames;
  }

  function calculateTotal() {
    let total = 0;
    itemList.map((item) => {
      total += item.Quantity * item.Price;
    });

    return total;
  }
  return (
    <div className="checkoutTotalListCont">
      <div className="infoListCont">
        <div className="listNames">{createCheckoutList()}</div>
        <div className="listSubtotal">{createSubtotal()}</div>
      </div>
      <div className="totalCont">
        <div className="total">Total: </div>
        <div className="totalAmount">
          {calculateTotal()}
          <img
            className="totalRuneImg"
            src={require("../../images/runeIcon.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
