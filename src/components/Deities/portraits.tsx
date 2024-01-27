import classes from "./portraits.module.scss";
import { IArticleHeaderData } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import LinkTo from "../LinkTo";
import ArticleTags from "../Misc/ArticleTags";

interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const FeaturedArticle = ({ article, path }: IProp) => {
  return (
    <>
      <section id="church-of-honour">
        <div className="portrait-container">
          <div className="portrait">
            <Link href="/pages/deities/Odin.tsx">
              <a>
                <Image src="public/images/Deities/Odin.jpg" alt="Deity 1" />
              </a>
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
    </>
  );
};

export default FeaturedArticle;
