export default function NewItem(props) {
  return (
    <div className="cardCont">
      <div className="cardName">{props.info.Name}</div>
      <img className="cardItemImg" src={props.info.srcImage}></img>

      <div className="cardPrice">
        {props.info.Price}
        <img src={require("../../images/runeIcon.png")}></img>
      </div>
      <div
        className="cardAddToCart"
        onClick={() => {
          props.addItem(props.info.ID);
        }}
      >
        Add to Cart
      </div>
    </div>
  );
}
