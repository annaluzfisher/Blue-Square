import './userinfo.css'
import LinkButton from '../../../Buttons/LinkButton/LinkButton'
import { removeCurrentUser } from '../../../../store/session';
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../../../store/ui';


function UserInfo() {
  const dispatch = useDispatch();
  const userId = useSelector((state)=> state.session.user)

 const handleClick =()=>{
  dispatch(removeCurrentUser(userId))
  }
  return (
    <>
      <div className="user-info-wrapper">
        <span>USER NAME</span>
      </div>
      <div onClick={handleClick}>Log Out</div>
    </>
  );
}

export default UserInfo