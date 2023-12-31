import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./newsletter.css";


const Newsletter = () => {
return (
  <div className="app__newsletter" >
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__cormorant">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="Enter your e-mail address"/>
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);
}

export default Newsletter;