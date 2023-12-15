import React from "react";
import "./Header.css"
import images from "../../Constants/images"
import { SubHeading } from "../../Components";

const Header = () => {
return(
    <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
     <SubHeading title="Chase the new flavour"/>
     <h1 className="app__header-h1">The Key to find Dining</h1>
     <p className="p__opensans" style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat 
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
     <button type="button" className="custom__button">Explore Menu</button>
     </div>
     <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" loading="lazy" />
     </div>
    </div> 
)
}

export default Header;
