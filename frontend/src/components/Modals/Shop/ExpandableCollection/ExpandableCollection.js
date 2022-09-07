import { getCollection, getCategories } from '../../../../store/collections'
import './expandablecollection.css'
import { useSelector} from "react-redux";

function ExpandableCollection({collectionId}) {
    const collection = useSelector(getCollection(collectionId))
    const categories = useSelector(getCategories())
    console.log('categories in EC', categories)
    // console.log('collection in EC', collection)
    // collection.categoryIds.map((catId)=>{
    //     if (categories[catId].parentId){
    //     return <span>{categories[catId].name}</span>
    //     } else {
    //       return <div>
    //         <div>+</div><span>{categories[catId].name}</span>
    //       </div>
    //     }
    // }
// }    
    
  return (
    <div className='ec-container'>
      {collection &&
      <h3>{collection.name}</h3> }
     {
          collection.categoryIds.map((catId)=>{
        if (categories[catId].parentId){
        return <span>{categories[catId].name}</span>
        } else {
          return <div className='expandable' key={catId}>
            <div className='plus'>+</div><span>{categories[catId].name}</span>
          </div>
        }
    })
     }
     
    </div>
  )
}

export default ExpandableCollection