import { toggleModal } from "../../store/ui";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Modals/NavigationComponents/Navigation/Navigation";
import { Link } from "react-router-dom";

function NavBar() {
  const NAVIGATION_ID = 1;
  const SHOP_ID = 2;
  const SEARCH_ID = 3;
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo-icon-wrapper">
            <i className="fa-regular fa-circle-stop"></i>
          </div>
          <div className="title-wrapper">
            <span>Blue Square</span>
          </div>

          <Link to="/">Home</Link>
        </div>
        {/* <div className="nav-middle"></div> */}
        <div className="nav-right">
          <div className="shop-wrapper">
            <span>SHOP</span>
          </div>
          <div
            className="search-icon-wrapper"
            onClick={() => dispatch(toggleModal(SEARCH_ID))}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div
            className="hamburger-icon-wrapper"
            onClick={() => dispatch(toggleModal(NAVIGATION_ID))}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div
            className="shopping-bag-icon-wrapper"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
      </nav>
      <Navigation />
      {/* <Shop /> */}
    </>
  );
}
<i class="fa-solid fa-magnifying-glass"></i>;
export default NavBar;
