/**These are necessary imports / components for the page */
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider,
} from "../../src/components";

const HomeLayoutExample = () => {
  return (
    <PageLayout home>
      <section className={"container pt-20 md:pt-10"}>
        <Text className="!md:text-5xl" title>
          Nidal Apollo
        </Text>
        <hr className="my-5" />
        <div className="flex flex-wrap">
          <div className="md:w-3/5 w-full md:pl-2">
            <Text p>
              Campaigns: <br />
            </Text>
            <List>
                
            </List>

            <Text subtitle className="mt-10 md:text">
              How to use
            </Text>
          </div>

          <div className="md:w-1/3 w-10% mx-8">
            <Image
              src="/images/Characters/nidal.jpg"
              alt="Nidal Apollo"
              className="lionel-image"
            />
          </div>
        </div>

        <div classname="flex flex-wrap justify-between">
          <Text p>
            In the realm of Eridania, where the forces of light and darkness vie
            for supremacy, there exists a beacon of unwavering righteousness
            known as Nidal Apollo. Born under the auspices of celestial guidance
            and tempered by the trials of mortal existence, Nidal's journey to
            becoming a Paladin of Glory is one marked by valor, sacrifice, and
            an unyielding commitment to the cause of justice.
            <br /> <br />
            Nidal's story begins in the humble village of Solstice Haven,
            nestled amidst verdant fields and rolling hills. From a young age,
            he exhibited a rare sense of duty and empathy, always striving to
            protect those in need and champion the values of courage and honor.
            Raised by his parents, devout followers of the god of light, Nidal
            was instilled with a deep reverence for the divine and a fervent
            belief in the inherent goodness of all beings.
            <br /> <br />
            As he came of age, Nidal's destiny became clear when he was visited
            by a radiant figure in his dreams—an angelic emissary of the god of
            glory, who revealed to him his divine calling. Guided by this
            celestial vision, Nidal embarked on a pilgrimage to the grand temple
            of the Radiant Order, where he sought to dedicate his life to the
            service of his deity and the pursuit of justice.
            <br /> <br />
            Under the tutelage of the revered paladin mentors of the Radiant
            Order, Nidal honed his martial skills and spiritual fortitude,
            undergoing rigorous training and trials to prove his worthiness. His
            unwavering determination and indomitable spirit earned him the
            admiration of his peers and the blessings of his celestial patrons.
            <br /> <br />
            But Nidal's path to paladinhood was not without its challenges.
            Along the way, he faced formidable adversaries—dark sorcerers,
            marauding beasts, and agents of chaos—who sought to thwart his noble
            quest and plunge the realm into darkness. Yet, with each trial
            overcome, Nidal emerged stronger and more resolute in his
            conviction, wielding his divine powers with righteous fury and
            unwavering resolve.
            <br /> <br />
            It was during one fateful confrontation with a powerful necromancer
            that Nidal's faith and courage were put to the ultimate test. In a
            desperate battle against the forces of undeath, he stood as a beacon
            of light amidst the encroaching darkness, rallying his allies and
            striking down the minions of evil with righteous wrath. Though the
            battle was fierce and the odds seemingly insurmountable, Nidal's
            unwavering resolve and unwavering faith in the divine prevailed, and
            the necromancer's dark ambitions were thwarted.
            <br /> <br />
            With victory achieved and evil vanquished, Nidal emerged as a true
            champion of glory—a paragon of virtue and valor whose deeds would
            echo throughout the annals of history. From that day forth, he vowed
            to continue his crusade against the forces of darkness, to defend
            the innocent, and to uphold the principles of justice and
            righteousness wherever his divine calling may lead him.
            <br /> <br />
            And so, Nidal Apollo, Paladin of Glory, strides forth into the
            world, his heart ablaze with the divine fire of righteousness, his
            sword held high in the name of justice and honor. For as long as
            evil threatens to darken the land, he will stand as a shining beacon
            of hope and a steadfast guardian of the light, forevermore.
            <br /> <br />
            <u>home-layout.tsx</u> in <u>pages/tutorial</u>.
          </Text>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeLayoutExample;
