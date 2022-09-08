import './categoryshowpage.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getCategory} from '../../store/collections'
import Banner from '../Banner/Banner';

function CategoryShowPage() {

    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const storeCategory = useSelector(getCategory(categoryId));
    const [category, setCategory] = useState({ id: " ", name: " "});
      console.log('whiy is this undefined',storeCategory)
    // useEffect(() => {
    //   dispatch(fetchcategory(categoryId));
    // }, [categoryId]);
    // //two use effects

    useEffect(() => {
      dispatch(getCategory(categoryId));
      setCategory(storeCategory);
    }, [storeCategory]);
    const temp = 7
  if (storeCategory){
  return (
    <div>
      <Banner
        pageTitle={'storeCategory.name'}
        imgUrl={`BannerImages/category${temp}.JPG`}
      />
    </div>
  );
  }
}

export default CategoryShowPage