import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import App from "../App";

export default function ScrollToTop() {
  const { pathname } = useLocation();
// console.log('window', window)
  useEffect(() => {
    // const root = document.getElementById('root')
    // root.scrollTo(0, 0);
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}
