import './button.css'
import { Link } from 'react-router-dom'
import { orange } from '../../../Util/Styles'

function Button({ localPath = "/", name, type, color = orange}) {
  if (type === "submit") {
    return (
      <div>
        <input
          className="button"
          style={{backgroundColor : color}}
          type="submit"
          value={name}
        />
      </div>
    );
  } else {
    return (
      <Link to={localPath}>
        <div className="button" style={{backgroundColor : color}}>
          {name}{" "}
        </div>
      </Link>
    );
  }
}

export default Button;