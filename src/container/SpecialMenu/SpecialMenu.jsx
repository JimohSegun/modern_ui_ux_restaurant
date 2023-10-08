import React from "react";
import { MenuItem, SubHeading } from "../../Components";
import { images, data } from "../../Constants";
import "./SpecialMenu.css"


const SpecialMenu = () => {
return(
    <section className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine flex__center">
     <p className="app__specialMenu-menu_heading">Wine & Beer</p>
     <div className="app__specialMenu_menu_items">
      {data.wines.map((wine, index) => 
         ( <MenuItem key={index} {...wine} /> )) }
     </div>
    </div>

      <div className="app__spacialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
     <p className="app__specialMenu-menu_heading">Cocktails</p>
     <div className="app__specialMenu_menu_items">
      {data.cocktails.map((cocktail, index) => 
         ( <MenuItem key={index} {...cocktail} /> )) }
     </div>
    </div>
    </div>
   
    <div style={{marginTop:"15px"}}>
     <button className="custom__button">View More</button>
    </div>
    </section>
)
}

export default SpecialMenu;