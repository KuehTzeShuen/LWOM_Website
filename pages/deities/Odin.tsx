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
      <div className="min-h-screen bg-slate-950  border-slate-50 border-2 mx-20 my-5">
        <section className="container px-0 pb-10 md:pt-20 pt-[80px] p-10">
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
                    ODIN
                  </Text>
                  <hr3
                    ref={hrRef2}
                    className="border-3 mb-5 w-[100%] mx-auto"
                  />
                </div>
                <div className="flex flex-wrap justify-between pl-5 items-center">
                  <div className="">
                    <Text p className="!text-lg leading-relaxed text-slate-300">
                      The One-Eyed God, Sole Ruler of Asgard
                      <Text
                        p
                        className="!text-5xl leading-relaxed text-slate-100"
                      >
                        The Church of Honor
                      </Text>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:pl-2 mt-5">
                  <Text
                    p
                    className="!text-lg md:!text-xl lg:!text-2xl leading-relaxed text-warmonger !text-justify text-slate-300"
                  >
                    The all-father himself. He commands an army of valkyries and
                    resides in the realm of Valhalla. With that, he receives the
                    souls of the people who died in glorious battle, called the
                    Einherjar and continues to train them for Ragnorak or
                    otherwise known as "Doomsday". Known commonly by the people
                    of Midgard as the first deity as well as the last, Odin
                    continues to train and study the different realms of
                    existence to prepare for the final battle.
                    <br /><br/>
                    While his temples depict his tales of epic battles and
                    glorious victories, many visit his sacred grounds in order
                    to visit the extensive library on site. Containing knowledge
                    many would have lost eons ago, Odin ensures that his
                    followers would never be caught off guard when battling
                    their foes.
                  </Text>
                  <div className="items-center ">
                    <div className="flex items-center">
                      <hr className="w-1/2" />
                      <Image
                        src="/public/images/baroque/b1.png"
                        alt="b1"
                        size={ImageSize.XS}
                      />
                      <hr className="w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="md:w-1/3 flex flex-col items-center px-5">
                      <Text
                        p
                        className="!text-3xl leading-relaxed text-slate-100 flex flex-col items-center"
                      >
                        Holy Symbol
                      </Text>

                      <hr className="w-full" />
                      <div
                        p
                        className="!text-lg leading-relaxed text-slate-300 items-center flex flex-col mt-3 ml-5"
                      >
                        <Text>
                          Horn Triskelion or Triple-Horned Triskele (three
                          interlocking drinking horns)
                        </Text>
                      </div>
                    </div>
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
                        className="!text-xl leading-relaxed text-slate-300 flex flex-col items-center"
                      >
                        Alignment:
                      </Text>
                      <Text className="!text-2xl text-slate-50">
                        Neutral Good
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full flex flex-col items-center">
              <Image
                src="/public/images/Deities/Odin.png"
                alt="Odin"
                size={ImageSize.FUll}
                caption="Current Residence: Valhalla"
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Odin;
