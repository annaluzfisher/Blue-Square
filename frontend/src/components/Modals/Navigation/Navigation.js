import '../modals.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/ui";
import  LinkButton from '../../Buttons/LinkButton/LinkButton'

function Navigation() {
    const ABOUT_KEY = 1;
    const visible = useSelector((state) => state.ui.modals[ABOUT_KEY].visible);
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(toggleModal(ABOUT_KEY));
    };

  return (
    <div className={`navigation-modal modal ${visible ? "" : "hidden"}`}>
      <div className="x-icon" onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div>NAVIGATION</div>
      <LinkButton localPath="Create-Account" name="Create Account"/>
    </div>
  );
}

export default Navigation