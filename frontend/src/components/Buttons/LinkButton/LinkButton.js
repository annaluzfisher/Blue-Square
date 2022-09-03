import '../button.css'
import { Link } from 'react-router-dom'

function LinkButton(props) {
  return (
    <Link to={props.localPath}>
      <button className='button'>{props.name}</button>
    </Link>
  )
}

export default LinkButton