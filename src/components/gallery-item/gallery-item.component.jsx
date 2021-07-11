import React from "react";

import { ReactComponent as DownLoad } from "../../assets/download.svg";

import "./gallery-item.styles.scss";

const GalleryItem = ({ gallery, index }) => {
  const { image } = gallery;
  return (
    <div className={`gallery-item gallery-item--${index}`}>
      <a download="custom-filename.png" href={image} title="ImageName">
        <div className="gallery-item__background"></div>
        <img src={image} alt="" />
        <div className="gallery-item__download-content">
          <DownLoad className="gallery-item__download-icon" />
          <p className="gallery-item__text">DOWNLOAD</p>
        </div>
      </a>
    </div>
  );
};

export default GalleryItem;
