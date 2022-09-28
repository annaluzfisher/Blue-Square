import './mainpage.css'
import Masthead from '../Masthead/Masthead';

import ThemeComponent from'../ThemeComponent/ThemeComponenet'
import AngledCallout from '../AngledCallout';
import SuggestedItems from '../SuggestedItems';
import { getCategory } from '../../store/collections';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MainPage() {
  const dispatch = useDispatch();

 const [itemIds , setItemIds] = useState([])



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