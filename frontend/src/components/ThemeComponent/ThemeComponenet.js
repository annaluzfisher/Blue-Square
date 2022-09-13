import LazyImage from './LazyImage';
import './themecomponent.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCollections, getCategory } from "../../store/collections";

function ThemeComponenet() {
      const dispatch = useDispatch();
    // const storeCategory = useSelector(getCategory(categoryId));
    const [category, setCategory] = useState({name:''});
    


    // useEffect(() => {
    //   dispatch(fetchCollections());
    // }, []);


    // useEffect(() => {
    //   dispatch(getCategory(categoryId));
    //   setCategory(storeCategory);
    // }, [storeCategory]);


  return (
    <div className="theme-component">
      <LazyImage imageUrl="/BannerImages/image6.jpg" text={"Climbing"} />
      <LazyImage
        imageUrl="/BannerImages/camping.jpg"
        text={"CAMPING"}
        collectionId={6}
      />
      <LazyImage imageUrl="/BannerImages/snow.jpg" text={"SNOW"} />
      <LazyImage
        imageUrl="/BannerImages/accessories.jpg"
        text={"ACCESSORIES"}
        collectionId={12}
      />
    </div>
  );
}

export default ThemeComponenet;