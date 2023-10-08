import React from "react";
import { SubHeading } from "../../Components";
import { images, data } from "../../Constants";
import "./Laurels.css"

const AwardCard = ({imgUrl,subtitle, title }) => {
    return (
        <div className="app__laurels_awards-card">
          <img src={imgUrl} alt="award" />
          <div className="app__laurels_awards-card_content">
           <p className="p__cormorant" style={{color:"#dcca87"}}>{title} </p>
           <p className="p__cormorant" >{subtitle} </p>
          </div>
        </div>
    )
}

const Laurels = () => {
return(
    <section className="app__bg app__wrapper section__padding" id="awards">
       <div className="app__wrapper_info ">
         <SubHeading title="Awards & recognition"/>
         <h1 className="headtext__cormorant">Our Laurels</h1>
         <div className="app__laurels_awards">
         {data.awards.map((award, index) =>{ return <AwardCard key={index} {...award} /> } )}
         </div>
       </div>


       <div className="app__wrapper_img">
           <img src={images.laurels} alt="laurels" />
       </div>
    </section>
)
}

export default Laurels;