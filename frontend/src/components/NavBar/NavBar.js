import { toggleModal } from "../../store/ui";
import "./navbar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Modals/NavigationComponents/Navigation/Navigation";
import { Link } from "react-router-dom";
import Logo from "../Buttons/Logo/Logo";
import Search from '../Modals/Search/Search';
import Shop from "../Modals/Shop/Shop"
// const Shop = React.lazy(() => import("../Modals/Shop/Shop"));

function NavBar() {
  const NAVIGATION_ID = 1;
  const SHOP_ID = 2;
  const SEARCH_ID = 3;
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-left">
          <Logo />
          <div className="title-wrapper">
            <span>Blue Square</span>
          </div>
        </div>
        {/* <div className="nav-middle"></div> */}
        <div className="nav-right">
          <div
            className="shop-wrapper"
            onClick={() => dispatch(toggleModal(SHOP_ID))}
          >
            <span>SHOP</span>
          </div>
          <div
            className="search-icon-wrapper"
            onClick={() => dispatch(toggleModal(SEARCH_ID))}
          >
            <i className="fa-solid fa-magnifying-glass hover-icon"></i>
          </div>
          <div
            className="hamburger-icon-wrapper"
            onClick={() => dispatch(toggleModal(NAVIGATION_ID))}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="shopping-bag-icon-wrapper hover-icon">
            <Link to="Cart">
              {" "}
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </div>
        </div>
      </nav>
      <Navigation />
      <Shop />
      <Search />
    </>
  );
}
<i class="fa-solid fa-magnifying-glass"></i>;
export default NavBar;
