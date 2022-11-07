import ItemLoader from "../cards/itemLoader";

function ShopPage(props) {
  return (
    <div className="shopPageCont">
      <ItemLoader addItem={props.addItem} />
    </div>
  );
}

export default ShopPage;
