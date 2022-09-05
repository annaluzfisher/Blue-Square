import './banner.css'

function Banner({pageTitle, imgUrl}) {
  return (
    <div className='banner' >
        <span className='page-title'>{pageTitle}</span>
        <img src={process.env.PUBLIC_URL+imgUrl}/>
    </div>
  )
}

export default Banner