import { toggleModal } from "../../store/ui";
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Modals/NavigationComponents/Navigation/Navigation";

function NavBar() {
 const NAVIGATION_ID = 1
 const SHOP_ID = 2
 const SEARCH_ID = 3
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-left"></div>
        <div className="nav-right">
          <div
            className="hamburger-icon-wrapper"
            onClick={() => dispatch(toggleModal(NAVIGATION_ID))}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
      <Navigation />
      {/* <Shop /> */}
    </>
  );
}

export default NavBar

