import './button.css'
import { Link } from 'react-router-dom'
import { orange } from '../../../Util/Styles'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../../store/ui'

function Button({ localPath = "/", name, type, color = orange }) {
  const dispatch = useDispatch();
  const modals = useSelector((state) => Object.values(state.ui.modals))
  const handleClick = ()=>{
      modals.map((modal) => {
      if (modal.visible) dispatch(toggleModal(modal.id))
    });
  }


  if (type === "submit") {
    return (
      <div>
        <input
          className="button"
          style={{ backgroundColor: "#CD4C1D" }}
          type="submit"
          value={name}
        
        />
      </div>
    );
  } else {
    return (
      <Link to={localPath}>
        <div className="button" style={{backgroundColor : color}} onClick={handleClick}>
          {name}{" "}
        </div>
      </Link>
    );
  } 
}

export default Button;