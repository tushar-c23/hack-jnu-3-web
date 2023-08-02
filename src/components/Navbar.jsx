/* eslint-disable react/prop-types */
import "../styles/Navbar.css";

const Navbar = (props) => {
  return (
    <div className="NavBarComponent flex">
      <div className={" NavTitleBoxSlide "+(props.current===0?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2>About Hack Jnu</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===1?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2>Our Timeline</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===2?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2>Prizes</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===3?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2>Sponsors</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===4?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2>FAQs</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      
      <div className=" NavBoxSlide ">
        <div className="NavBox">
          <h2>HACKJNU 3</h2>
        </div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Navbar;
