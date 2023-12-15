import React from "react";
import "./Chef.css"
import { SubHeading } from "../../Components";
import { images } from "../../Constants";



const Chef= () => {
return(
    <section className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" loading="lazy" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Chef’s Word"/>
            <h1 className="headtext__cormorant"> What we believe in </h1>

            <div className="app__chef-content">
                <div className="app__chef-content-quote">
                <img src={images.quote} alt="quote" loading="lazy" />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit</p>    
                </div>
             <p className="p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit Nulla scelerisque 
                 scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
            </div>

        <div className="app__chef-sign">
            <p className="app__chef-sign">Kevin Luo</p>
            <p className="p__opensans" >Chef & Founder</p>
            <img src={images.sign} alt="sign" loading="lazy" />
        </div>
    </div>
</section>
)
}

export default Chef;
