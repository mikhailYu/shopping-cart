import React from "react";
import NewItem from "./newItem";
import uniqid from "uniqid";
import itemList from "../itemList";
import "../../ItemStyle.css";

export default function ItemLoader(props) {
  let itemCards = itemList.map((item) => {
    return <NewItem info={item} addItem={props.addItem} key={uniqid()} />;
  });
  return <div className="itemsCont">{itemCards}</div>;
}
