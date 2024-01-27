import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { Aaron, Shuen } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: Aaron,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@Aaron_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/future-campaigns/the-mountain-of-madness.tsx",
    featureArticle: true,
    preview: {
      author: Aaron,
      date: "April 2024",
      //name of the article
      articleTitle: "The Mountain of Madness",
      tags: "Adventure-focus, Port-Winterhaven, Dungeon-Delveing, Undead, Mystery",
      thumbnail: "/public/images/Campaigns/The Mountain of Madness.jpg",
      shortIntro: "Long ago the Peak of Winterhaven was known for its abundance of mining minerals and its hard-working dwarves. But, times have changed since then and the dwarves are left scratching the cavern walls while the growls of the undead appear seemingly out of thin air.",
      category: "tutorial",
    },
    seo: {
      title: "The Mountains of Madness",
      description: "These are the steps to setup your blog",
      keywords: "demo, blog setup",
      ogImage: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      twitterHandle: "@Aaron_nalwala",
      author: Aaron.name,
    },
  },
  {
    path: "/pages/tutorial/how-to-write-your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: Aaron,
      date: "April 2024",
      //name of the article
      articleTitle: "Travellers of Hel",
      tags: "Combat-focus, Hel, Infernal",
      thumbnail: "/public/images/Campaigns/Travellers of Hel2.jpg",
      shortIntro:
        "Infernal contracts have been appearing all across Euvrera about a fun little excursion in Hel. Although most have a disdain for the Infernal kind, many have begun worrying about the state of Hel itself since contracts like these have never appeared before above the surface.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
  {
    path: "/pages/tutorial/how-to-deploy-blog.tsx",
    featureArticle: true,
    preview: {
      author: Aaron,
      date: "April 2024",
      //name of the article
      articleTitle: "Traders within the Dark",
      tags: "RP-focus, Politics, Port-Eldermare, Thieves-Guild",
      thumbnail: "/public/images/Campaigns/Traders within the Dark.jpg",
      shortIntro:
        "Port Eldermare is known for its dangerous trading of illicit goods, so much that it has become a hub for dangerous people as well. Inevitably, as power begins to gather within multiple faction, conflict arises. As an outsider, it is easy to ignore the faction war and stay out of trouble, but what fun would that be, for there is profit to be made out in these streets.",
      category: "tutorial",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/how-to-deploy.svg",
    },
  },
  {
    path: "/pages/tutorial/all-components.tsx",
    preview: {
      author: Aaron,
      date: "August 08 2022",
      articleTitle: "All Components",
      tags: "demo, all components",
      thumbnail: "/public/imp_assets/tutorials/all-components.svg",
      shortIntro: "List of all usable components, its types and how to use it.",
      category: "tutorial",
    },
    seo: {
      keywords: "demo, all components, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/all-components.svg",
    },
  },
  {
    path: "/pages/tutorial/style-guide.tsx",
    preview: {
      author: Aaron,
      date: "August 10 2022",
      articleTitle: "Style Guide",
      tags: "demo, all components, style guide, styling tutorial",
      thumbnail: "/public/imp_assets/tutorials/style-guide.svg",
      shortIntro: "Styling and theming tutorial.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/style-guide.svg",
    },
  },
  {
    path: "/pages/tutorial/icons.tsx",
    preview: {
      author: Aaron,
      date: "August 13 2022",
      articleTitle: "How to use icons",
      tags: "demo, all components, style guide, styling tutorial, icons, how to use icons in website",
      thumbnail: "/public/imp_assets/tutorials/how-to-use-icons.svg",
      shortIntro: "How to use icons in your blog website.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-use-icons.svg",
    },
  },
  {
    path: "/pages/blog/your-first-article.tsx",
    preview: {
      author: Aaron,
      date: "August 6 2022",
      articleTitle: "Your first article",
      shortIntro:
        "This is a demo file for your first article, you can copy structure of this file to create multile article.",
      tags: "demo, your first article",
      thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },


  //Prominent Characters
  {
    path: "/pages/prominent-characters/lionel.tsx",
    preview: {
      author: Aaron,
      date: "March 2019",
      articleTitle: "Lionel",
      tags: "The Hero's Trial",
      thumbnail: "/public/images/Characters/Lionel.jpg",
      shortIntro: "In this article we will see Default Home Layout example.",
      category: "Prominent Characters",
    },
    seo: {
      title: "Home Layout Example",
      description: "In this article we will see Default Home Layout example.",
      keywords:
        "next js, tailwind css, typescript, blog template, default layout, default home layout",
      ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
      author: Aaron.name,
    },
  },
  {
    path: "/pages/tutorial/blog-with-sidebar-layout.tsx",
    preview: {
      author: Aaron,
      date: "September 2020",
      articleTitle: "Nidal Apollo",
      tags: "Glory Awaits",
      thumbnail: "/public/images/Characters/Nidal.jpg",
      shortIntro:
        "In this article we will see Page Layout for a blog with sidebar example.",
      category: "Prominent Characters",
    },
    seo: {
      keywords:
        "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
    },
  },
  {
    path: "/pages/tutorial/blog-with-centered-layout.tsx",
    preview: {
      author: Aaron,
      date: "July 2023",
      articleTitle: "Barry B. Benson",
      tags: "Cries of the Angels",
      thumbnail: "/public/images/Characters/Barry.jpg",
      shortIntro:
        "This a demo article with centered layout and with demo of all the components.",
      category: "Prominent Characters",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
