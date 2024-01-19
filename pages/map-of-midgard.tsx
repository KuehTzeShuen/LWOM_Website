import React, { useState } from "react";
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
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container" style={{ marginLeft: 0, paddingLeft: 0 }}>
        <div className="">
          <div>
            <img
              src="/images/Map/map.jpg"
              useMap="#midgardmap"
              alt="Map of Midgard"
              style={{
                position: 'absolute',
                top: 'height of your nav bar', // replace this with the height of your nav bar
                width: '100%',
                height: 'calc(100% - height of your nav bar)', // replace this with the height of your nav bar
              }}
            />

            <map name="midgardmap">
              <area
                shape="rect"
                coords="10,10,100,100"
                color="red"
                alt="Marker 1"
                onClick={() => setDescription("Description for Marker 1")}
              />
              <area
                shape="rect"
                coords="110,110,200,200"
                alt="Marker 2"
                onClick={() => setDescription("Description for Marker 2")}
              />
            </map>

            <p>{"description"}</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MapOfMidgard;
