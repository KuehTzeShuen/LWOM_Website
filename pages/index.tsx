/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import Link from "next/link";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section
        className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(images/Map/map.jpg)",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center px-3">
          <Text title className="text-3xl">
            Uh oh stinky Uh oh stinky Uh oh stinky Uh oh stinky
          </Text>

          <Text p className="mt-3 text-xl">
            "Bear witness the consequences of your actions." -Aaron, probably
          </Text>

          <div className="flex justify-center mt-5 flex-wrap ">
            <Link href="pages/lore">
              <a className="flex items-center justify-center rounded-md bg-blue-700 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2">
                <span className="text-xl pt-2 block">Lore Keep</span>
              </a>
            </Link>
            <Link href="pages/lore">
              <a className="flex items-center justify-center rounded-md bg-blue-700 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2">
                <span className="text-xl pt-2 block">World Map</span>
              </a>
            </Link>
            <Link href="pages/lore">
              <a className="flex items-center justify-center rounded-md bg-blue-700 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2">
                <span className="text-xl pt-2 block">Characters</span>
              </a>
            </Link>
            <Link href="pages/lore">
              <a className="flex items-center justify-center rounded-md bg-blue-700 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2">
                <span className="text-xl pt-2 block">Twitch.tv</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={"flex flex-wrap"}>
          <FeaturedArticleSection />
          <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-medium">
            Checkout the below articles on how to use different layouts and
            components
          </h1>
          <hr className="border-1 mb-5 w-[98%] mx-auto" />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
