import React, { useEffect, useRef, useState } from "react";
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const MapOfMidgard = () => {
  const PAGE_SEO: iSEO = {
    title: "MapOfMidgard",
    description: `Map`,
    keywords: "webexpx, contact us, webexpe13@gmail.com, next js blog template",
    author: "Aaron Nalwala, Aaron Yadav",
  };
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const updateButtonPosition = () => {
      if (imgRef.current && buttonRef.current) {
        const imgRect = imgRef.current.getBoundingClientRect();
        // Replace these with the x and y positions of the marker as a fraction of the image size
        const markerX = 0.27;
        const markerY = 0.15;
        buttonRef.current.style.left = `${imgRect.left + imgRect.width * markerX}px`;
        buttonRef.current.style.top = `${imgRect.top + imgRect.height * markerY}px`;
      }
    };
  
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    return () => window.removeEventListener('resize', updateButtonPosition);
  }, []);

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container" style={{ marginLeft: 0, paddingLeft: 0 }}>
        <div className="">
          <div>
            <img
              ref={imgRef}
              src="/images/Map/map.jpg"
              useMap="#midgardmap"
              alt="Map of Midgard"
              style={{
                position: "absolute",
                top: "height of your nav bar", // replace this with the height of your nav bar
                width: "100%",
                height: "calc(100% - height of your nav bar)", // replace this with the height of your nav bar
              }}
            />
            <img
              ref={buttonRef}
              src="/images/Map/marker2.png" // replace this with the path to your marker image
              alt="Marker"
              style={{
                width: '5%',
                position: 'absolute',
                zIndex: 1, // Add this line
                // ...
              }}
              onClick={() => {
                console.log('Marker clicked!'); // Add this line
            }}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MapOfMidgard;
