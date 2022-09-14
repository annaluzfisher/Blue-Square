import { FaStar } from "react-icons/fa";
import './star.css'
function Star({ filled, onClick }) {
  return <FaStar color={filled ? "#CD4C1D" : "lightgray"} onClick={onClick} />;
}
export default Star;
