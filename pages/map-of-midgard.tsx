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
      <body style={{ overflowX: "auto" }}>
        <section className="bg-slate-500 flex h-full w-full items-center">
          <div className="flex h-full w-full items-center">
            {/* <Image
                src="/public/images/Map/northeast.png"
                alt="map of midgard"
                size={ImageSize.DEFAULT}
                /> */}
            <img
              ref={imgRef}
              src="/images/Map/east.png"
              useMap="#midgardmap"
              alt="Map of Midgard"
              style={{
                top: "50px", // replace this with the height of your nav bar
                width: "300vw", // increase this to make the image bigger than the page width
                height: "calc(170vh - 50px)", // increase this to make the image bigger than the page height, replace 50px with the height of your nav bar
              }}
            />
            <img
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
            />
          </div>
        </section>
      </body>
    </PageLayout>
  );
};

export default MapOfMidgard;
