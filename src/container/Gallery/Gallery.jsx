import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../Components";
import { images } from "../../Constants";
import "./Gallery.css";

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className="app__gallery flex__center ">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery </h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.{" "}
        </p>
        <button type="button" className="custom__button">
          View More{" "}
        </button>
      </div>

      <div className="app__gallerry-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={index}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
