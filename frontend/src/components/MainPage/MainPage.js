import './mainpage.css'
import Masthead from '../Masthead/Masthead';
function MainPage() {
  return (
    <div className="main-page">
      <Masthead
        promoTitle={"SKI & SNOW SALE"}
        imgUrl={"/BannerImages/masthead1.jpg"}
      />
    </div>
  );
}

export default MainPage