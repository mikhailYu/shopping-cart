import { Link } from "react-router-dom";
import "../../Nav.css";

export default function Nav(props) {
  return (
    <header>
      <h1 className="headerLink">
        <Link className="headerA" to="/">
          Runes4U
        </Link>
      </h1>

      <nav>
        <span className="sideSpace"></span>
        <ul>
          <li className="navLink">
            <Link className="navA" to="/">
              Home
            </Link>
          </li>

          <li className="navLink">
            <Link className="navA" to="/shop">
              Shop
            </Link>
          </li>
          <li className="navLink">
            <Link className="navA" to="/about">
              About
            </Link>
          </li>
        </ul>
        <span className="sideSpace">
          <div id="shoppingCart">
            <Link className="navCheckout" to="/checkout">
              <img
                className="cartIcon"
                src={require("../../images/cartIcon.png")}
              ></img>
            </Link>
            <div className="cartItems">{props.items}</div>
          </div>
        </span>
      </nav>
    </header>
  );
}
