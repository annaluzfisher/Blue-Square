import './mainpage.css'
import Masthead from '../Masthead/Masthead';
import Button from '../Buttons/Button';

function MainPage() {
  const id = 1
  return (
    <>
      <div className="main-page">
        <Masthead
          promoTitle={"SKI & SNOW SALE"}
          imgUrl={"/BannerImages/masthead1.jpg"}
        />

        {/* <Button
          className="test"
          localPath={`Items/${id}`}
          name={"take me to the skis"}
        /> */}
      </div>
      {/* <div className="safety-alert"></div> */}
    </>
  );
}

export default MainPage