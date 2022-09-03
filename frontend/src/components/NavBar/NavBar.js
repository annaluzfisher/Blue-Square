import { toggleModal } from "../../store/ui";
import "./navbar.css"
import { useDispatch, useSelector } from "react-redux";


function NavBar() {

  const dispatch = useDispatch();
  
  return (
    <nav className="nav-bar">
      <div className="nav-left"></div>
      <div className="nav-right">
        <div id="1" className="hamburger-icon-wrapper"
        onClick={(e)=>dispatch(toggleModal(e.target.id))}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar

