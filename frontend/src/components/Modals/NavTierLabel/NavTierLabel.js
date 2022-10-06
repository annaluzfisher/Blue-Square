import './navtierlabel.css'

function NavTierLabel({name,x,y}) {
  // const logo = document.getElementById('logo')
  // const rect = logo.getBoundingClientRect();
  // console.log(rect.top, rect.left)
  return (
   <span className='nav-tier-label' 
  //  top={rect.top} 
  //  left={rect.left}
   >{name}</span>
  )
}
export default NavTierLabel;