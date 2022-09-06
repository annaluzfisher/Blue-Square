import './navtierlabel.css'

function NavTierLabel({name,x,y}) {
  // const logo = document.getElementsById('logo')
  
  return (
   <span className='nav-tier-label'>{name}</span>
  )
}

export default NavTierLabel;