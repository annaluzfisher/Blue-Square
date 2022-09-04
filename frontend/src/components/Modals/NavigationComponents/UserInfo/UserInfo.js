import "./userinfo.css";
import { logoutUser } from "../../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/ui";

function UserInfo() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user);
  const currentUser = sessionStorage.getItem("currentUser");
  const handleClick = () => {

    sessionStorage.setItem("currentUser", null);
   
    dispatch(logoutUser());
  };
  return (
    <>
      <div className="user-info-wrapper">
        <span>USER NAME</span>
      </div>
      <div onClick={handleClick}>
        <span>Log Out</span>
      </div>
    </>
  );
}

export default UserInfo;
