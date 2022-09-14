import './collectionshowpage.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {fetchCollections, getCollections, getCategory} from '../../store/collections'
import Banner from '../Banner/Banner';
import ImageSnapshot from '../ItemShowPage/ImageSnapshot';

function CollectionShowPage() {
  const { collectionId } = useParams();
  const dispatch = useDispatch();
  const storeCollections = useSelector(getCollections());
  const [collection, setCollection] = useState();
  // const [categoryIds, setCategoryIds] = useState([])
  // const categoryImages = useSelector()

  // const storeCategory = useSelector(getCategory(categoryId));
  // const [category, setCategory] = useState();

  useEffect(() => {
    dispatch(fetchCollections());
    setCollection(storeCollections.collections[collectionId]);
    // console.log('collection', storeCollections.collections[collectionId])
  }, [collectionId]);

 useEffect(() => {
   setCollection(storeCollections.collections[collectionId]);
 }, [storeCollections]);


  if (!collection) return null;
  return (
    <>
      <Banner pageTitle={collection.name} imgUrl={collection.imageUrl} />
      <div className="results">
        <span>{`${collection.name} product results`}</span>
        <div>{`${collection.itemIds.length} results`}</div>
      </div>
      <div className="cat-page-images-container">
        {collection.itemIds.map((itemId) => {
          return <ImageSnapshot itemId={itemId} />;
        })}
      </div>
    </>
  );
}

export default CollectionShowPage

// let imageIds = []
//   useEffect(() => {
//     imageIds = collection.itemIds
//   }, [collection]);

  //    useEffect(() => {
  //     storeCollection.categoryIds.map((categoryId)=>{

  //       dispatch(getCategory(categoryId));
  //       setCategory(storeCategory);
  //     })
  //    }, [storeCollection]);

  // let collectionItemIds = [];