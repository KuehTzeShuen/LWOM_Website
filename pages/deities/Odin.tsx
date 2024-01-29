/**These are necessary imports / components for the page */
import React, { useEffect } from "react";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../../src/components";
import { iSEO } from "../../src/shared/interfaces";
import classes from "../styles/Deities.module.scss";
import { ImageSize } from "../../src/shared/enums";

const Odin = () => {
  const PAGE_SEO: iSEO = {
    title: "About",
    description: "",
    keywords:
      "about, webexpx, contact us, Living World of Midgard, LWOM, Dungeons and Dragons, DnD, Homebrew, Realm, Midgard, SquirtlenickOCE, Aaron Lai, Kueh Tze Shuen",
    author: "Kueh Tze Shuen",
  };

  const odinRef = React.useRef(null);
  const hrRef1 = React.useRef(null);
  const hrRef2 = React.useRef(null);

  useEffect(() => {
    const adjustHrWidth = () => {
      if (odinRef.current && hrRef1.current && hrRef2.current) {
        const odinWidth = odinRef.current.offsetWidth;
        hrRef1.current.style.width = `${odinWidth}px`;
        hrRef2.current.style.width = `${odinWidth}px`;
      }
    };

    adjustHrWidth();
    window.addEventListener("resize", adjustHrWidth);

    return () => {
      window.removeEventListener("resize", adjustHrWidth);
    };
  }, []);

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-0 pb-10 md:pt-20 pt-[80px]">
        <div className="flex flex-wrap justify-stretch">
          <div className="flex flex-wrap justify-stretch md:w-2/3">
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-wrap justify-between">
                <hr3 ref={hrRef1} className="border-3 w-[100%] mx-auto" />
                <Text
                  ref={odinRef}
                  title
                  className="!text-6xl !font-medium text-warmonger text-stretch"
                >
                  TEST
                </Text>
                <hr3 ref={hrRef2} className="border-3 mb-5 w-[100%] mx-auto" />
              </div>
              <div className="flex flex-wrap justify-between pl-5 items-center">
                <div className="">
                  <Text p className="!text-lg leading-relaxed text-slate-300">
                    The One-Eyed God, Sole Ruler of Asgard
                    <Text
                      p
                      className="!text-4xl leading-relaxed text-slate-100"
                    >
                      The Church of Honor
                    </Text>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:pl-2">
                <Text
                  p
                  className="!text-lg leading-relaxed text-warmonger !text-justify text-slate-300"
                >
                  The all-father himself. He commands an army of valkyries and
                  resides in the realm of Valhalla. With that, he receives the
                  souls of the people who died in glorious battle, called the
                  Einherjar and continues to train them for Ragnorak or
                  otherwise known as "Doomsday". Known commonly by the people of
                  Midgard as the first deity as well as the last, Odin continues
                  to train and study the different realms of existence to
                  prepare for the final battle.
                </Text>

                <div className="relative">
                  <hr className="absolute inset-0 w-full" />
                  <Image
                    src="/public/images/baroque/b1.png"
                    alt="b1"
                    size={ImageSize.XS}
                    className="relative"
                  />
                </div>
                <div className="flex items-center">
                  <div className="md:w-1/3 flex flex-col items-center px-5">
                    <Text
                      p
                      className="!text-3xl leading-relaxed text-slate-100 flex flex-col items-center"
                    >
                      Divine Domains
                    </Text>

                    <hr className="w-full" />
                    <div
                      p
                      className="!text-lg leading-relaxed text-slate-300 items-center flex flex-col mt-3"
                    >
                      <Text>War Domain</Text>
                      <Text>Knowledge Domain</Text>
                      <Text>Life Domain</Text>
                      <Text>Glory Domain</Text>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex flex-col items-center px-5">
                    <Text
                      p
                      className="!text-3xl leading-relaxed text-slate-100 flex flex-col items-center"
                    >
                      Divine Domains
                      <Image
                        src="/public/images/baroque/b1.png"
                        alt="b1"
                        size={ImageSize.DEFAULT}
                      />
                    </Text>
                    <hr className="w-full" />
                    <div
                      p
                      className="!text-lg leading-relaxed text-slate-300 items-center flex flex-col mt-3"
                    >
                      <Text>War Domain</Text>
                      <Text>Knowledge Domain</Text>
                      <Text>Life Domain</Text>
                      <Text>Glory Domain</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full flex flex-col items-center">
            <Text p className="!font-light md:!text-xs ml-10 text-slate-300">
              {" "}
              Divine Form{" "}
            </Text>
            <Image
              src="/public/images/Deities/Odin.png"
              alt="Odin"
              size={ImageSize.xxs}
            />
            <Text p className="!text-lg leading-relaxed text-slate-300">
              Current Residence: Valhalla
            </Text>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Odin;
