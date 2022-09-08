import "./shop.css";
import "../modals.css";
import React from "react";
import ModalNavBar from "../ModalNavBar/ModalNavBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NavTierLabel from "../NavTierLabel/NavTierLabel";
import { fetchCollections, getCollections } from "../../../store/collections";
// const ExpandableCollection = React.lazy(() => import("./ExpandableCollection/ExpandableCollection"));
import ExpandableCollection from "./ExpandableCollection";

function Shop() {
  const dispatch = useDispatch();
  const SHOP_ID = 2;
  const visible = useSelector((state) => state.ui.modals[SHOP_ID].visible);

  const storeCollections = useSelector(getCollections());

  const [collections, setCollections] = useState("");

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);
  //two use effects

  useEffect(() => {
    dispatch(getCollections());
    setCollections(storeCollections);
  }, [storeCollections]);

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
 const collectionIds = Object.keys(storeCollections.collections);
    const mainCollectionIds = collectionIds.splice(2)
if (storeCollections){
    return (
      <>
        <div className={`shop-modal modal ${visible ? "" : "hidden"}`}>
          <ModalNavBar modalId={SHOP_ID} />
          <NavTierLabel name={"SHOP"} />
          <div className="shop-modal-page">
            
            {mainCollectionIds.map((collection) => {
              return <ExpandableCollection collectionId={3} />;
            })}
          </div>
        </div>
      </>
    );
          }
}

export default Shop;
