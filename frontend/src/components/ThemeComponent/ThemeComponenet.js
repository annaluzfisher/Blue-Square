import LazyImage from './LazyImage';
import './themecomponent.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCollections, getCollections } from "../../store/collections";

function ThemeComponenet({collectionIds}) {

  const dispatch = useDispatch();
  const storeCollections = useSelector(getCollections());
  const [collections, setCollections] = useState(storeCollections);
  // const [categoryIds, setCategoryIds] = useState([])
  // const categoryImages = useSelector()

  // const storeCategory = useSelector(getCategory(categoryId));
  // const [category, setCategory] = useState();

  useEffect(() => {
    if (!collections){
    dispatch(fetchCollections());
    }
    setCollections(storeCollections.collections);

  }, [collectionIds]);
    
 useEffect(() => {
   if (collections){

   }

 }, [collectionIds]);


  return (
    <div className="theme-component">
      <LazyImage
        imageUrl="/BannerImages/image6.jpg"
        text={"Climbing"}
        collectionId={2}
      />
      <LazyImage
        imageUrl="/BannerImages/camping.jpg"
        text={"CAMPING"}
        collectionId={6}
      />
      <LazyImage
        imageUrl="/BannerImages/snow.jpg"
        text={"SNOW"}
        collectionId={1}
      />
      <LazyImage
        imageUrl="/BannerImages/accessories.jpg"
        text={"EQUIPMENT"}
        collectionId={6}
      />
    </div>
  );
}

export default ThemeComponenet;