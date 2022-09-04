import './shop.css'
import '../modals.css'
import '../ModalNavBar/ModalNavBar'
import ModalNavBar from '../ModalNavBar/ModalNavBar'
function Shop() {
  SHOP_ID = 2
  return (
    <>
      <ModalNavBar modalId={SHOP_ID}/>
      <div>Shop</div>
    </>
  );
}

export default Shop