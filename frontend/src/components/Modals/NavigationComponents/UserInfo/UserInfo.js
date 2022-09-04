import "./userinfo.css";
import LinkButton from "../../../Buttons/LinkButton/LinkButton";
import { logoutUser, removeCurrentUser } from "../../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/ui";

function UserInfo() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user);
  const currentUser = sessionStorage.getItem("currentUser");
  const handleClick = () => {
    console.log("we clicked and are going to dispatch logout user");
    sessionStorage.setItem("currentUser", null);
    console.log("should be null after log out", currentUser);
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
