/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";

const BlogSetup = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    The Mountain of Madness
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    "Long ago the Peak of Winterhaven was known for its abundance of mining minerals and its hard-working dwarves. But, times have changed since then and the dwarves are left scratching the cavern walls while the growls of the undead appear seemingly out of thin air."
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li className="">
                        You will need <b>node js</b> installed in your computer <br />
                        You can install node via <a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/download/</a> or you can look up any tutorial to install node js on your computer.
                    </li>
                    <li className="">
                        Next You will need a code editor like <b>VsCode / Sublime text</b> to write your blog articles. <br />
                        I will suggest using <b> <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer"> VS Code</a></b>.
                    </li>
                    <Image className="MoM" src="/public/images/Campaigns/The Mountain of Madness.jpg" alt="The Mountain of Madness" size={ImageSize.DEFAULT} />
                    <li className="">
                        Download / clone the blog template from our github page to a folder on your computer.
                        <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" className="pl-2 font-semibold" target="_blank" rel="noopener noreferrer">
                            https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss
                        </a>
                        <br />
                        If you are using Git you can clone the code or click the <b>use template</b> button to generate your own repo.
                    </li>
                    <li className="">
                        Open the blog project in VS code. <br /> Open terminal in VS code using ther <b>Terminal button</b> on tool bar of the VS Code window or press <b>ctrl + ~</b> or <b>cmd + ~</b>.
                    </li>
                </List>
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded mt-10 !text-lg leading-relaxed ">
                    Details are flexible and subject to change based on the current party members. 
                    Storylines and adventures within the overarching plot will mold to fit the background of your characters, as well as the preferences of the players. 
                    Roleplay to the best of your ability and be mindful of your actions. 
                    The dildo of consequence rarely comes lubed.
                </div>
            </div>
        </PageLayout>
    )
}

export default BlogSetup