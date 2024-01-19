import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const Aaron: IAuthor = {
    name: "Aaron Lai a.k.a. SquirtlenickOCE",
    designation: "Dungeon Daddy",
    bio: "Overworking DM trying to keep his sanity together as his players try to tear it apart piece by piece. Anyways, hi would you like to try DnD?",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/nAaron'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/Aaron-nalwala/'
        },
    ]
}

export const Shuen: IAuthor = {
    name: "Kueh Tze Shuen",
    designation: "Technician",
    bio: "Yoinked and twisted all my code",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/KuehTzeShuen'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/Aaron-nalwala/'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'The Living World of Midgard';
export const WEBSITE_URL: string = 'https://nextjs-simple-blog-template.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Living World of Midgard',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'The Daily Herald',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'World Map',
            path: '/map-of-midgard',
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Prominent Characters',
            path: '/prominent-characters'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/WebExpe',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Nextjs simple blog template",
    description: "A simple blog template using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${Aaron.name}, ${Shuen.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}