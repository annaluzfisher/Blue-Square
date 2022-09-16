import LazyImage from "./LazyImage";
import "./themecomponent.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCollections, getCollections } from "../../store/collections";

function ThemeComponenet({ collectionIds }) {
  const dispatch = useDispatch();
  const storeCollections = useSelector(getCollections());
  const [collections, setCollections] = useState(storeCollections);

  const [campingId, setCampingId] = useState(1);
  const [equpmentId, setEquipmentId] = useState(1);
  const [winterId, setWinterId] = useState(1);
  const [climbingId, setClimbingId] = useState(1);
  useEffect(() => {
    if (!collections) {
      dispatch(fetchCollections());
    }
    setCollections(storeCollections.collections);
  }, [collectionIds]);

  useEffect(() => {
    if (collections) {
      Object.values(collections).map((collection) => {
        if (collection.name === "Camping") setCampingId(collection.id);
        if (collection.name === "Winter") setWinterId(collection.id);
        if (collection.name === "Equipment") setEquipmentId(collection.id);
        if (collection.name === "Climbing") setClimbingId(collection.id);
      });
    }
  }, [collections]);

  return (
    <div className="theme-component">
      <LazyImage
        imageUrl="/BannerImages/image6.jpg"
        text={"Climbing"}
        collectionId={climbingId}
      />
      <LazyImage
        imageUrl="/BannerImages/camping.jpg"
        text={"CAMPING"}
        collectionId={campingId}
      />
      <LazyImage
        imageUrl="/BannerImages/snow.jpg"
        text={"SNOW"}
        collectionId={winterId}
      />
      <LazyImage
        imageUrl="/BannerImages/accessories.jpg"
        text={"EQUIPMENT"}
        collectionId={equpmentId}
      />
    </div>
  );
}

export default ThemeComponenet;
