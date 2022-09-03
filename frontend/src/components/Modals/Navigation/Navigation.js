import '../modals.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/ui";
import  LinkButton from '../../Buttons/LinkButton/LinkButton'
import LogInForm from '../../Forms/LogIn/LogInForm'

function Navigation() {
    const NAVIGATION_ID = 1;
    const visible = useSelector((state) => state.ui.modals[NAVIGATION_ID].visible);
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(toggleModal(NAVIGATION_ID));
    };

  return (
    <div className={`navigation-modal modal ${visible ? "" : "hidden"}`}>
      <div className="x-icon" onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>


      <div>NAVIGATION</div>
      <LogInForm />
      <LinkButton localPath="Create-Account" name="Create Account"/>
    </div>
  );
}

export default Navigation