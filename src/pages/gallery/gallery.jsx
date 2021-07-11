import React, { useRef, useState, useEffect, useCallback } from "react";

import ChatApp from "../../components/chat/chat.component";
import SmVideoAndPoweredBy from "../../components/sm-video-and-powered-by/sm-video.-powered-by.component";
import GalleryItem from "../../components/gallery-item/gallery-item.component";

import data from "./data";

import "./gallery.styles.scss";

const Gallery = () => {
  const slide = useRef(null);

  const gallery = data;

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - slide.current.offsetLeft;
    scrollLeft = slide.current.scrollTop;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };
  const handleMouseUp = () => {
    isDown = false;
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.current.offsetLeft;
    const walk = (x - startX) * 2;
    slide.current.scrollTop = scrollLeft - walk;
  };

  const handleTouchDown = (e) => {
    isDown = true;
    startX = Math.floor(e.touches[0].pageX - slide.current.offsetLeft);
    scrollLeft = slide.current.scrollTop;
  };

  const handletouchUp = () => {
    isDown = false;
  };
  const handletouchMove = (e) => {
    if (!isDown) return;
    const x = Math.floor(e.touches[0].pageX - slide.current.offsetLeft);
    console.log({ x, startX });
    const walk = Math.floor((x - startX) * 2);
    console.log(walk);
    slide.current.scrollTop = scrollLeft - walk;
  };

  return (
    <div className="gallery-page">
      <div
        className="gallery-page__outer-wrapper"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchDown}
        onTouchEnd={handletouchUp}
        onTouchMove={handletouchMove}
        ref={slide}
      >
        <div className="gallery-page__wrapper">
          <div className="gallery-page__title">
            <div className="gallery-page__title--content">
              <p className="gallery-page__title--name">Photo Gallery</p>
              <div className="gallery-page__title--heading">
                <img src="/images/Logo- Title Copy.png" alt="" />
              </div>
              <p className="gallery-page__title--text">
                View the images from the book, <span> Blood on the Wall.</span>
              </p>
            </div>
            <div className="gallery-page__title--image">
              <img src="/images/gallery/gallery-background.png" alt="" />
            </div>
          </div>
          <div className="gallery-page__gallery">
            {gallery.map((gallery, i) => {
              return <GalleryItem key={i} index={i} gallery={gallery} />;
            })}
          </div>
        </div>
      </div>

      <ChatApp />
      <SmVideoAndPoweredBy />
    </div>
  );
};

export default Gallery;
