
import './logo.css'
import {Link} from 'react-router-dom'
function Logo({color = 'white'}) {
  return (
    <div className="logo">
      <Link to="/">
          <i className="fa-regular fa-circle-stop" style={{ color: color }}></i>
      </Link>
    </div>
  );
}

export default Logo