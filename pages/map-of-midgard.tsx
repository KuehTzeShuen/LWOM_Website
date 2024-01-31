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
        buttonRef.current.style.left = `${
          imgRect.left + imgRect.width * markerX
        }px`;
        buttonRef.current.style.top = `${
          imgRect.top + imgRect.height * markerY
        }px`;
      }
    };

    updateButtonPosition();
    window.addEventListener("resize", updateButtonPosition);
    return () => window.removeEventListener("resize", updateButtonPosition);
  }, []);

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <div style={{overflowX: "auto" }}>
        {/* <div className="flex flex-wrap min-w-max items-center">
          <Image
            src="/public/images/Map/east.png"
            alt="Map of Midgard"
            size={ImageSize.MEDIUM}
          /> */}
        <img
          src="/images/Map/east.png"
          alt="Map of Midgard"
          style={{ maxWidth: 'none', width: '140%', display: 'block' }}
        />
        {/* <img
              ref={buttonRef}
              src="/images/Map/marker2.png" // replace this with the path to your marker image
              alt="Marker"
              style={{
                width: "2%",
                position: "absolute",
                zIndex: 1, // Add this line
                // ...
              }}
              onClick={() => {
                console.log("Marker clicked!"); // Add this line
              }}
            /> */}
        {/* </div> */}
      </div>
    </PageLayout>
  );
};

export default MapOfMidgard;
