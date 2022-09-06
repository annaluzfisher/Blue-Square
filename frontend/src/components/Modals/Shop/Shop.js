import "./shop.css";
import "../modals.css"

import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Shop() {

  const SHOP_ID = 2;

  const visible = useSelector((state) => state.ui.modals[SHOP_ID].visible);

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
        <div className="shop-modal-page"> SHOP PAGE</div>
      </div>
    </>
  );
}

export default Shop;
