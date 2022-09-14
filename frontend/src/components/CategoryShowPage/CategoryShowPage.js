import './categoryshowpage.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchCollections, getCategory} from '../../store/collections'
import Banner from '../Banner/Banner';
import ImageSnapshot from '../ItemShowPage/ImageSnapshot';

function CategoryShowPage() {
    useEffect(() => {
   
      window.scrollTo({ top: 300, left: 100, behavior: "smooth" });
    }, []);

    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const storeCategory = useSelector(getCategory(categoryId));
    const [category, setCategory] = useState({name:''});
      // console.log('whiy is this undefined',storeCategory)
      // console.log('THE CATEGORY ', category)
    useEffect(() => {
      dispatch(fetchCollections());
    }, [categoryId]);
    // //two use effects

    useEffect(() => {
      setCategory(storeCategory);
    }, [storeCategory]);
 
  if (!storeCategory) return null;
  let count = storeCategory.itemIds.length;
  return (
    <>
      <Banner pageTitle={storeCategory.name} imgUrl={storeCategory.imageUrl} />
      <div className="results">
        <span>{`${storeCategory.name} product results`}</span>
        <div>{`${count} results`}</div>
      </div>
      <div className="cat-page-images-container">
        { storeCategory.itemIds.map(itemId =>{
         return <ImageSnapshot itemId={itemId}/>

        })}
      </div>
    </>
  );

}

export default CategoryShowPage

