/* eslint-disable react/prop-types */
import "../styles/Navbar.css";
import logo from '../assets/logo.png'

const Navbar = (props) => {
  return (
    <div className="NavBarComponent flex">
      <div className={" NavTitleBoxSlide "+(props.current===0?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2 className="NavHeading">About Hack Jnu</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===1?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2 className="NavHeading">Our Timeline</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===2?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2 className="NavHeading">Prizes</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===3?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2 className="NavHeading">Sponsors</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      <div className={" NavTitleBoxSlide "+(props.current===4?"showSlide":"hiddenSlide")}>
        <div className="NavTitleBox">
          <h2 className="NavHeading">FAQs</h2>
        </div>
        <div className="trianglesmol"></div>
      </div>
      
      <div className=" NavBoxSlide ">
        <div className="NavBox">
          <img src={logo} alt="" className="logo"/>
        </div>
        <div className="triangle"></div>
      </div>
    </div>
  );
};

export default Navbar;
