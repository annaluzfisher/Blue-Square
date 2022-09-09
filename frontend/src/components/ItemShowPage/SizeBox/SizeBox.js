import './sizebox.css'

function SizeBox({item}) {
  return (
    <>
      <div className="size-box">
        <span>Size ------------------------------------</span>
        <div className="sizes">XS</div>
        <div className="sizes">S</div>
        <div className="sizes">M</div>
        <div className="sizes">L</div>
        <div className="sizes">XL</div>
        <div className="sizes">XXL</div>
      </div>
    </>
  );
}

export default SizeBox