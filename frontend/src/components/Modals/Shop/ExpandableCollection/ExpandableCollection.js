import { getCollection, getCategories } from "../../../../store/collections";
import "./expandablecollection.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SubCatContainer from "../SubCatContainer/SubCatContainer";

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

  let sortedIds = {};
  soloCategories.forEach((id) => {
    sortedIds[id] = [];
  });
  childCategories.forEach((childId) => {
    if (soloCategories.includes(categories[childId].parentId)) {
      sortedIds[categories[childId].parentId].push(childId);
    }
  });

  const array = Object.keys(sortedIds);
  let final = [];
  array.forEach((key) => {
    if (sortedIds[key].length > 0) {
      final.push([key, sortedIds[key]]);
    } else {
      final.push(key);
    }
  });
  // console.log("what is the type",typeof final[0]);
  console.log('THE FINAL ARRAY',final);
  // const hee = 1
  // console.log('TESTIN',categories['2'].name)
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
                <div className="plus">+</div>
                <span>{categories[catId[0]].name}</span>
                {console.log("in it: AWEJKFGNASOIDFGNSFDG", catId)}
                <SubCatContainer subs={catId[1]} />
               
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