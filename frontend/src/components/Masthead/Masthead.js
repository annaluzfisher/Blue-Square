import './masthead.css'
import Button from '../Buttons/Button/Button'

function Masthead({promoTitle,imgUrl}) {
  return (
    <div className="masthead">
      <div className="overlay"></div>
      <img src={process.env.PUBLIC_URL + imgUrl} />
      <div className="masthead-content-wrapper">
        <h1 className="page-title">{promoTitle}</h1>
        <div className="promo-details">
          <span>Save Up to 30% Off Selected Equipment</span>
          <span>and 25% Off Selected Apparel</span>
          <span>Valid through 10/5/22</span>
        </div>
        <div className='buttons-container'>
        <Button name={'SHOP WINTER GEAR'} type={''}/> <Button name={"SHOP SKI & RIDE"}/> <Button name={'SHOP MOUNTAIN'} />
        </div>
      </div>
    </div>
  );
}

export default Masthead