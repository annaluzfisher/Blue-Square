import "./ridgeline.css";
// import IntersectionObserver from 
function Ridgeline() {
  // const cover = document.querySelectorAll("image-cover")
  // console.log('the cover!',cover)

const observer = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
        entry.target.classList.add('reveal-animation');

   }
 });
});

// Tell the observer which elements to track
// observer.observe(cover);


  return (
    <div className="ridgeline-container">
      <div className="image-container">
        <img src="/BannerImages/ridgeline.png" />
        <div className="image-cover" ></div>
      </div>
      { (document?.querySelectorAll("image-cover").length > 0 ) && observer?.observe(document?.querySelectorAll("image-cover"))}
    </div>
  );
}

export default Ridgeline;
