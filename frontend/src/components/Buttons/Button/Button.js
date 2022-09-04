import './button.css'
import { Link } from 'react-router-dom'

function Button({localPath='/',name,type,color}) {

  if (type === 'submit'){
     return <input className="button" type="submit" value={name} />;
  }else{
  return (
    <Link to={localPath}>
      <div className='button'>{name}</div>
    </Link>
  )
  }
}

export default Button;