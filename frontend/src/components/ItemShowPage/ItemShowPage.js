import "./itemshowpage.css";
import { fetchItem, getItem } from "../../store/item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import SizeBox from "./SizeBox/SizeBox";
import ReviewsComponent from "../Reviews/ReviewsComponent";
import { getReviews } from "../../store/reviews";
import NoSizeBox from "./NoSizeBox";
import SuggestedItems from "../SuggestedItems";
import AddedToBag from "../Modals/AddedToBag";
import ScrollToTop from "../../Util/ScrollToTop";

function ItemShowPage() {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const storeItem = useSelector(getItem(itemId));
  const storeReviews = useSelector(getReviews(itemId))
  const [item, setItem] = useState({name:' ',description:' '});
  const [colId, setColId] = useState();
  const ADDED_ID = 4;


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('are we here on item id change?')
  }, [itemId]);


  const modal = useSelector((state) => {
    if (!state) return null;
    if(!state.ui) return null;
    if (!state.ui.modals) return null;
    else{
      return state.ui.modals[ADDED_ID]
    }
  })
 
  const [ visible, setVisible ] = useState(false)

useEffect(()=>{
  setVisible(modal.visible)
  modal ? setVisible(true) : setVisible(false)
},[modal])

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, [itemId]);
 

  useEffect(() => {
    setItem(storeItem);
    if (storeItem) {
         let id=  storeItem.collections[Math.floor(Math.random()* storeItem.collections.length)]
         setColId(id)
    }
  }, [storeItem]);


  return (
    <>  
     {/* <ScrollToTop /> */}
      {item && (
        <div className="item-show-page">
          <div className="spacer"></div>
          <div className="product-hero">
            <div className="item-scroller"></div>
            <div className="hero-img-container">
              <img src={item.imageUrl} />
            </div>
            <div className="item-buy-box">
              <div>
                {item.new && <div>NEW</div>}
                <span> {item.name}</span>
                {item.size ? (
                  <SizeBox item={item} />
                ) : (
                  <NoSizeBox item={item} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="description">
        <p>{item ? item.description : ""}</p>
      </div>
      {item && <ReviewsComponent item={item} />}
      {item && (
        <SuggestedItems
          title={"Check out similar items"}
          collectionId={colId}
        />
      )}
     {visible && <AddedToBag/> }
    </>
  );
}

export default ItemShowPage;



