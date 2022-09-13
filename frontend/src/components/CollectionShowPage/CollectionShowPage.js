// import './collectionshowpage.css'
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {fetchCollections, getCollection, getCategory} from '../../store/collections'
// import Banner from '../Banner/Banner';
// import ImageSnapshot from '../ItemShowPage/ImageSnapshot';

// function CollectionShowPage() {

//     const { collectionId } = useParams();
//     const dispatch = useDispatch();
//     const storeCollection = useSelector(getCollection(collectionId));
//     const [collection, setCollection] = useState({name:''});
//   const categoryImages = useSelector()
//   categoryId = 1
//         const storeCategory = useSelector(getCategory(categoryId));
//         const [category, setCategory] = useState({ name: "" });

//     useEffect(() => {
//       dispatch(fetchCollections());
//     }, [collectionId]);


//     useEffect(() => {
//       dispatch(getCategory(collectionId));
//       setCollection(storeCollection);
//     }, [storeCollection]);

//        useEffect(() => {
//         storeCollection.categoryIds.map((categoryId)=>{

//           dispatch(getCategory(categoryId));
//           setCategory(storeCategory);
//         })
//        }, [storeCollection]);

//     let collectionItemIds = [];
 
//   if (!storeCategory) return null;

//   let count = storeCategory.itemIds.length;
//   return (
//     <>
//       <Banner pageTitle={storeCollection.name} imgUrl={storeCollection.imageUrl} />
//       <div className="results">
//         <span>{`${storeCollection.name} product results`}</span>
//         <div>{`${count} results`}</div>
//       </div>
//       <div className="cat-page-images-container">
//         { collectionItemIds.map(itemId =>{
//          return <ImageSnapshot itemId={itemId}/>

//         })}
//       </div>
//     </>
//   );

// }

// export default CollectionShowPage

