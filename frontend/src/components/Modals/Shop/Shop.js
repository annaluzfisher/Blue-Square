import "./shop.css";
import "../modals.css"

import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import NavTierLabel from "../NavTierLabel/NavTierLabel"; 
import { fetchCategories } from "../../../store/collections";

function Shop() {
  const dispatch = useDispatch();
  const SHOP_ID = 2;
  const visible = useSelector((state) => state.ui.modals[SHOP_ID].visible);
  useEffect(()=>{},[])

  useEffect(() => {
    if (visible) {
      const app = document.getElementById("app").childNodes;
      app[2].style.position = "fixed";
    } else {
      if (typeof document.getElementById("app") === null) {
      } else {
        const app = document.getElementById("app").childNodes;
    
        app[2].style.position = "absolute";
      }
    }
  }, [visible]);

  return (
    <>
      <div className={`shop-modal modal ${visible ? "" : "hidden"}`}>
        <ModalNavBar modalId={SHOP_ID} />
          <NavTierLabel name={'SHOP'} />
        <div className="shop modal-page">
        </div>
      </div>
    </>
  );
}

export default Shop;
