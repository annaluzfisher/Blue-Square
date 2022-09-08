import './categoryshowpage.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchCollections, getCategory} from '../../store/collections'
import Banner from '../Banner/Banner';
import ImageSnapshot from '../ItemShowPage/ImageSnapshot';

function CategoryShowPage() {

    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const storeCategory = useSelector(getCategory(categoryId));
    const [category, setCategory] = useState();
      // console.log('whiy is this undefined',storeCategory)
      // console.log('THE CATEGORY ', category)
    useEffect(() => {
      dispatch(fetchCollections());
    }, [categoryId]);
    // //two use effects

    useEffect(() => {
      // dispatch(getCategory(categoryId));
      setCategory(storeCategory);
      console.log('HOW MANY TIMES IS THE USE EFFECT RUNNING')
    } );
    const temp = 7
  if (!storeCategory) return null;
  return (
    <>
      
        <Banner
          pageTitle={storeCategory.name}
          imgUrl={`https://bluesquarebucket.s3.us-west-1.amazonaws.com/category${temp}.JPG`}
        />
      <div className='results'>{`Skis product results`}</div>
      <div className='cat-page-images-container'>
        <ImageSnapshot />
      </div>
    </>
  );

}

export default CategoryShowPage

