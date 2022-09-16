import "./button.css";
import { Link } from "react-router-dom";
import { orange } from "../../../Util/Styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../store/ui";
//
//primary interpolared iojt button class

function Button({
  localPath = "/",
  name,
  type,

  primary = "primary",
}) {
  const dispatch = useDispatch();
  const ADDED_ID = 4;
  const modals = useSelector((state) => Object.values(state.ui.modals));
  const handleClick = () => {
    modals.map((modal) => {
      if (modal.visible) dispatch(toggleModal(modal.id));
    });
  };

  if (type === "submit") {
    return (
      <div>
        <input className={`button ${primary}`} type="submit" value={name} />
      </div>
    );
  } else {
    return (
      <Link to={localPath}>
        <div className={`button ${primary}`}>{name} </div>
      </Link>
    );
  }
}

export default Button;
