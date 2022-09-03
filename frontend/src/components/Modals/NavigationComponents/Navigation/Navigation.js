import '../../modals.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/ui";
import LogInForm from '../../../Forms/LogIn/LogInForm'
import UserInfo from '../UserInfo/UserInfo'
function Navigation() {
    const NAVIGATION_ID = 1;
    const visible = useSelector((state) => state.ui.modals[NAVIGATION_ID].visible);
    const currentUser = useSelector((state)=> state.session.user)
    const dispatch = useDispatch();

    // const useEffect(()=>{
    // },[currentUser])
    const handleClick = () => {
      dispatch(toggleModal(NAVIGATION_ID));
    };

  return (
    <div className={`navigation-modal modal ${visible ? "" : "hidden"}`}>
      <div className="x-icon" onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </div>

      <div>NAVIGATION</div>
      <div className="master-form-wrapper">
        {currentUser ? <UserInfo /> : <LogInForm />}
      </div>
    </div>
  );
}

export default Navigation