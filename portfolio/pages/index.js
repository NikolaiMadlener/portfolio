import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import hemo from "../public/HeMoMarketing3.png";
import encore from "../public/encoreMarketing.png";
import avatar from "../public/avatar.png";
import aleasLight from "../public/aleas-light2.png";
import msgLight from "../public/msg-light2.png";
import teslaLight from "../public/tesla-light2.png";
import tumLight from "../public/tum-light2.png";
import zeissLight from "../public/zeiss-light2.png";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        console.log("J");
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Welcome</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white px-10 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="text-xl font-system">NM</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={handleClick}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>

                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                    href="https://nikolaimadlener.github.io/CV/"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-700 dark:text-teal-400 font-medium">
                            Nikolai Madlener
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white">
                            Software Engineer
                        </h3>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                            I am a computer science student at TUM with
                            experience building mobile and web applications. I‘m
                            passioned about software architecture and
                            enthusiastic on machine learning applications.
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-8 py-3 text-gray-800 dark:text-gray-400">
                        <a href="https://www.linkedin.com/in/nikolai-madlener-163b14169/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.github.com/nikolaimadlener">
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
                        <Image src={avatar} layout="fill" objectFit="cover" />
                    </div>
                </section>
                <section className="py-30">
                    <div className="container mx-auto pt-16">
                        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
                                Experience
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                                Since the start of my studies I could gain
                                valuable work experience at several companies
                                and departments. Roles covered Mobile Developer,
                                Agile Coach, Requirements Engineer, Key Account
                                User, to name a few.{" "}
                            </p>
                        </div>
                        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 gap-8 flex flex-wrap justify-center align-middle">
                            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                                <Image
                                    className="object-contain"
                                    height={100}
                                    src={aleasLight}
                                />
                            </div>
                            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                                <Image
                                    className="object-contain"
                                    height={100}
                                    src={teslaLight}
                                />
                            </div>
                            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                                <Image
                                    className="object-contain"
                                    height={100}
                                    src={msgLight}
                                />
                            </div>
                            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                                <Image
                                    className="object-contain"
                                    height={100}
                                    src={zeissLight}
                                />
                            </div>
                            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                                <Image
                                    className="object-contain"
                                    height={100}
                                    src={tumLight}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-60">
                    <div>
                        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
                            Portfolio
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                            Since the beginning of my journey as a computer
                            science student, I have done multiple projects, both
                            for companies and personal.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                            I mainly focused on App development using
                            <span className="text-teal-400"> {" Swift "} </span>
                            and
                            <span className="text-teal-400">
                                {" React Native"}
                            </span>
                            .
                        </p>
                    </div>
                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 py-10">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={hemo}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={encore}
                            />
                        </div>
                    </div>
                </section>

                <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2022 Nikolai Madlener - All Rights Reserved.
                        </span>
                        <div className="text-2xl flex justify-center gap-4 py-3 text-gray-800 dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/nikolai-madlener-163b14169/">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://www.github.com/nikolaimadlener">
                                <AiFillGithub />
                            </a>
                            <a href="mailto:nikolai.madlener@outlook.de">
                                <AiFillMail />
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}