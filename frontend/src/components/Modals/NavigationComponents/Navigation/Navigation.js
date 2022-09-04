import '../../modals.css'
import { useSelector } from "react-redux";
import './navigation.css'
import LogInForm from '../../../Forms/LogIn/LogInForm'
import UserInfo from '../UserInfo/UserInfo'
import ModalNavBar from '../../ModalNavBar/ModalNavBar';
function Navigation() {
    const NAVIGATION_ID = 1;
    const visible = useSelector((state) => state.ui.modals[NAVIGATION_ID].visible);
    const currentUser = useSelector((state)=> state.session.user)
 

  

  return (
    <div className={`navigation-modal modal ${visible ? "" : "hidden"}`}>
      <ModalNavBar modalId={NAVIGATION_ID} />
      <div className="navigation-modal-page">
        <span>CUSTOMER SUPPORT</span>

        <div className="master-form-wrapper">
          {currentUser ? <UserInfo /> : <LogInForm />}
        </div>
      </div>
    </div>
  );
}

export default Navigation