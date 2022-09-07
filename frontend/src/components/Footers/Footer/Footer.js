import './footer.css'
import Logo from '../../Buttons/Logo'
import Ridgeline from '../Ridgeline';

function Footer() {
  return (
    <>
    <Ridgeline/>
      <div className="footer-container">
        <Logo color={"white"} />
        <div>footer</div>
      </div>
    </>
  );
}

export default Footer