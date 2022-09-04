import './modalnavbar.css'
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../store/ui";
import Logo from '../../Buttons/Logo/index'

function ModalNavBar({modalId}) {
     const dispatch = useDispatch();
  return (
    <nav className='modals-nav-bar'>
      <Logo color='black'/>
      <div
        className="x-icon"
        onClick={() => dispatch(toggleModal(modalId))}
      >
        <i className="fa-solid fa-xmark"></i>
      </div>
    </nav>
  );
}

export default ModalNavBar