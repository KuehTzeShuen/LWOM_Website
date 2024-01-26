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
import classes from "../styles/Deities.module.scss";

const ContactUs = () => {
  const PAGE_SEO: iSEO = {
    title: "About",
    description: "",
    keywords:
      "about, webexpx, contact us, Living World of Midgard, LWOM, Dungeons and Dragons, DnD, Homebrew, Realm, Midgard, SquirtlenickOCE, Aaron Lai, Kueh Tze Shuen",
    author: "Kueh Tze Shuen",
  };

  const churches = [
    { name: 'Church of Honour', id: 'church-of-honour' },
    { name: 'Church of Nature', id: 'church-of-nature' },
    { name: 'Church of Force', id: 'church-of-force' },
    { name: 'Church of Stars', id: 'church-of-stars' },
    { name: 'Church of Darkness', id: 'church-of-darkness' },
  ];

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      <section className="container px-3 pb-10 md:pt-20 pt-[80px]">
        <Text title className="!text-5xl !font-medium">
          Pantheons, Religions, Sects and Cults. 
        </Text>
        <hr className='border-1 mb-5 w-[100%] mx-auto' />

        <div className="flex flex-wrap mt-8 justify-between">
          <div className="md:w-1/2 w-full md:pl-2">
            <Text p className="!text-lg leading-relaxed">
            From benevolent guardians to enigmatic tricksters, each deity holds sway over their domains of faith. Life, death, nature, and the arcane, these celestial beings transcend mortal understanding, influencing the fates of kingdoms and the destinies of mortalkind.
            </Text>

            <Text p className="!text-lg leading-relaxed">
            Divine influence manifests itself through five major pantheons, each embodying a fundamental that shapes the cosmos. 
            As adventurers traverse the world, they may encounter profound teachings, sacred rites, temples of devotion or holy favors that define these sacred institutions.
            </Text>
          </div>
          <div className="md:w-1/4 w-full">
            <Text p>Pantheon Churches:</Text>
            <ul>
              {churches.map((church) => (
                <li key={church.id}>
                  <a href={`#${church.id}`}>
                    <Text subtitle className="!font-light md:!text-3xl">
                      {church.name}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="church-of-honour">
        <div className="portrait-container">
          <div className="portrait">
            <Image src="public/images/Deities/Odin.jpg" alt="Deity 1" />
          </div>
          <div className="portrait">
            <Image src="public/images/Deities/Thrud.jpg" alt="Deity 2" />
          </div>
          <div className="portrait">
            <Image src="public/images/Deities/Heimdall.jpeg" alt="Deity 3" />
          </div>
          <div className="portrait">
            <Image src="public/images/Deities/Sjofn.jpg" alt="Deity 4" />
          </div>
        </div>
      </section>

      <section id="church-of-nature"
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
