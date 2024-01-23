/**These are necessary imports / components for the page */
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

const ContactUs = () => {
  const PAGE_SEO: iSEO = {
    title: "About",
    description: "",
    keywords:
      "about, webexpx, contact us, Living World of Midgard, LWOM, Dungeons and Dragons, DnD, Homebrew, Realm, Midgard, SquirtlenickOCE, Aaron Lai, Kueh Tze Shuen",
    author: "Kueh Tze Shuen",
  };
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-3 pb-10 md:pt-20 pt-[80px]">
        <Text title className="!text-5xl !font-medium">
          Hail and well met, traveler!
        </Text>

        <div className="flex flex-wrap mt-8 justify-between">
          <div className="md:w-1/2 w-full md:pl-2">
            <Text p className="!text-lg leading-relaxed">
              Welcome to the Living World of Midgard, a realm steeped in magic,
              teeming with mythical creatures, and brimming with untold
              adventures. In this sprawling tapestry of realms, each corner of
              Midgard is rife with mystery, danger, and the promise of glory for
              those brave enough to seek it.
            </Text>
            <Text p className="!text-lg leading-relaxed">
              Midgard is a world where the boundaries between the mundane and
              the fantastical blur, where ancient prophecies intertwine with the
              deeds of heroes, and where the echoes of history resonate through
              the very land itself. As the sun rises over the rugged landscapes,
              from the soaring peaks of the Frostspire Mountains to the
              sun-drenched shores of the Ember Isle, a tapestry of diverse
              cultures and civilizations unfolds.
            </Text>
            <Text p className="!text-lg leading-relaxed">
              Adventurers in Midgard are the architects of their own fate,
              forging alliances, battling monsters, and uncovering the mysteries
              that lie hidden beneath the surface. Whether seeking fortune,
              redemption, or the thrill of discovery, they tread the well-worn
              paths of heroes who have come before and carve new legends into
              the annals of Midgard.
            </Text>
            <Text p className="!text-lg leading-relaxed">
              In the Living World of Midgard, your journey is limited only by
              your imagination. Will you rise to the challenges that await,
              become a paragon of virtue, or succumb to the allure of darker
              paths? The choices are yours to make in this realm of infinite
              possibilities, where the echoes of your deeds resonate through the
              ages, shaping the destiny of Midgard for generations to come.{" "}
              <a
                href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>
                  <i>github discussions</i>
                </u>
              </a>
              .
            </Text>
          </div>
          <div className="md:w-1/4 w-full">
            <Text p>Super Official Dungeon Master:</Text>
            <Text subtitle className="!font-light md:!text-3xl">
              squirtlenick@gmail.com
            </Text>
          </div>
        </div>
      </section>

      <section
        className={
          "dark:bg-slate-800 bg-blue-100 mt-10 container py-10 md:px-20 px-5"
        }
      >
        <Text subtitle className="md:!text-5xl text-4xl !font-light">
          test
        </Text>
        <Text p className="!text-lg leading-relaxed mt-5 px-1">
          We are a group of developers and designers with more than 5 years of
          industry experience. If you have any requirements like Website
          Development, Website / App Design feel free to contact us on the given
          email.
        </Text>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
