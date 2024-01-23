import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, transformImagePaths, transformPath } from "../../utils/utils";
import LinkTo from "../LinkTo";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";

interface IProp {
    article: IArticleHeaderData;
    path: string;
}


const FeaturedArticle = ({ article, path }: IProp) => {
    return (
        <>
            <div className={combineClasses(classes.featured_article,
                'md:border-l-[5px] border-b-[5px] md:border-b-0 border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer')}>
                <div className={'w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px]'}>

                    <LinkTo href={transformPath(path)} passHref>
                        <h1 className={combineClasses(classes.featured_article__title, "text-[24px] font-bold mt-0 mb-[10px]")} >
                            {article.articleTitle}
                        </h1>
                    </LinkTo>
                    <p className={combineClasses(classes.featured_article__intro, "text-[14px] font-regular mt-0 mb-[10px]")}>
                        {article.shortIntro.slice(0, 250)} ...
                    </p>
                    <ArticleTags tags={article.tags} />
                    <p className={combineClasses(classes.featured_article__date, "font-normal text-xs pt-3 mb-0")}>{article.date}</p>
                </div>
                <div className={combineClasses(classes.featured_article__image, 'rounded-sm overflow-hidden')} style={{ maxHeight: '400px' }}>                    
                {/* style={{ background: `url(${transformImagePaths(article.thumbnail)})` }} */}
                    <div className="relative">
                        <img
                            src={transformImagePaths(article.thumbnail)} alt={article.articleTitle}
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0" style={{ 
                            backgroundImage: 'linear-gradient(to right, rgba(30, 41, 59, 1) 7%, rgba(0, 0, 0, 0.2) 25%)' 
                        }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedArticle