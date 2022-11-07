import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePageCont">
      <div className="homeTextCont">
        <div className="homeText">
          The Lands Between are home to the most dangerous of monstrosities.
          Only the well-equipped will survive. Armour, weapons and consumables
          are essential if you are to trek out into the unknown.
        </div>

        <div className="homeBrowseCont">
          <Link className="homeToShop" to="/shop">
            - Browse through our wares -
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
