import './mainpage.css'
import NavBar from "../NavBar/NavBar";
import Navigation from "../Modals/Navigation/Navigation"
// import Shop from '../Modals/Shop/Shop'
function MainPage() {
  return (
    <div className="main-page">
      <Navigation />
      {/* <Shop /> */}
      
      <NavBar />
    </div>
  );
}

export default MainPage