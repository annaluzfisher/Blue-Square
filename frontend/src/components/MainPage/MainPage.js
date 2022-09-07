import './mainpage.css'
import Masthead from '../Masthead/Masthead';
import Button from '../Buttons/Button';
import ThemeComponent from'../ThemeComponent/ThemeComponenet'
import AngledCallout from '../AngledCallout';

function MainPage() {
  const id = 1
  return (
    <>
      <div className="main-page">
        <Masthead
          promoTitle={"SKI & SNOW SALE"}
          imgUrl={"/BannerImages/masthead1.jpg"}
        />
      </div>
      <div className="safety-alert"></div>
      <ThemeComponent />
      <AngledCallout/>
      <ThemeComponent/>
    </>
  );
}

export default MainPage