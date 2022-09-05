import './masthead.css'


function Masthead({promoTitle,imgUrl}) {
  return (
    <div className="masthead">
      <div className='overlay'></div>
      <img src={process.env.PUBLIC_URL + imgUrl} />
      <div className='masthead-content-wrapper' >
      <h1 className="page-title">{promoTitle}</h1>
      <div className='promo-details'>
          Save Up to 30% Off Selected Equipment and 25% Off Selected Apparel Valid through 10/5/22
      </div>
      </div>
    </div>
  );
}

export default Masthead