import { getCollection, getCategories } from "../../../../store/collections";
import "./expandablecollection.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


function ExpandableCollection({ collectionId }) {
  const collection = useSelector(getCollection(collectionId));
  const categories = useSelector(getCategories());

  const categoryIds = collection.categoryIds;

  const childCategories = [];
  const soloCategories = [];

  categoryIds.map((id) => {
    if (!categories[id].parentId) {
      soloCategories.push(id);
    } else {
      childCategories.push(id);
    }
  });
  console.log('soloCategories (1,2,,12,14)', soloCategories)
  console.log('child categories', childCategories) 
  // 13,8,14,10,5 for womens = ids
  //child= 13, 8 10 5, 
  let sortedIds = {};
  soloCategories.map((id) => {
   return sortedIds[id] = [];
  });
  childCategories.forEach((childId) => {
    if (soloCategories.includes(categories[childId].parentId)) {
      sortedIds[categories[childId].parentId].push(childId);
    } else {
        sortedIds[childId] = [];
    }
  });

  const array = Object.keys(sortedIds);
  console.log('sorted id OBJECT:',sortedIds)
  let final = [];
  array.forEach((key) => {
    if (sortedIds[key].length > 0) {
      final.push([key, sortedIds[key]]);
    } else {
      final.push(key);
      console.log('are we herer?',key)
    }
  });
  const handleToggle= (subCatArr) =>{
    return <div className="sub-cat-container">
       {subCatArr.map((sub) => {
         return <span>{categories[sub].name}</span>;
       })}
     </div> 
  }
  if (collection.id) {
    return (
      <div className="ec-container">
        {collection && <h3>{collection.name}</h3>}
        {final.map((catId) => {
          if (categories[catId]) {
            return <div>{categories[catId].name}</div>;
          } else {
            return (
              <div className="expandable">
                <div className="expandable-title" onClick={()=>handleToggle(catId[1])}>
                <div className="plus">+</div>
                <span>{categories[catId[0]].name}</span>
                </div>
               
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ExpandableCollection;


//  <div className="sub-cat-container">
//    {catId[1].forEach((sub) => {
//      {
//        console.log("what is the sub?!:", sub);
//      }
//      return <span>{categories[sub].name}</span>;
//    })}
//  </div>;