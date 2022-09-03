import './mainpage.css'
import NavBar from "../NavBar/NavBar";
import Navigation from "../Modals/Navigation/Navigation"

function MainPage() {
  return (
    <div className="main-page">
      <NavBar />
      <Navigation />
    </div>
  );
}

export default MainPage