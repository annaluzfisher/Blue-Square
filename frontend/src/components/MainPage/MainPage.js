import './mainpage.css'
import Masthead from '../Masthead/Masthead';

import ThemeComponent from'../ThemeComponent/ThemeComponenet'
import AngledCallout from '../AngledCallout';
import SuggestedItems from '../SuggestedItems';

function MainPage() {




  return (
    <>
      <div className="main-page">
        <Masthead
          promoTitle={"SKI & SNOW SALE"}
          imgUrl={"/BannerImages/masthead1.jpg"}
        />
      </div>
      <div className="safety-alert"></div>
      <ThemeComponent collectionIds={[1,2,3,4]} />
      {/* <AngledCallout/> */}
      <SuggestedItems title={'SHOP ALL CAMPING'} collectionId={6}/>
    </>
  );
}

export default MainPage