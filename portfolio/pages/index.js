import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import hemo from "../public/HeMoMarketing3.JPG";
import encore from "../public/encoreMarketing.png";
import sixt from "../public/SixtmarketingImage.JPG";
import teambeats from "../public/teambeats2.jpg";
import aleasLight from "../public/aleas-light2.png";
import msgLight from "../public/msg-light2.png";
import teslaLight from "../public/tesla-light2.png";
import tumLight from "../public/tum-light2.png";
import zeissLight from "../public/zeiss-light2.png";
import pku from "../public/peking-university-seal.png";
import pp from "../public/pp.jpeg";

import googleBadge from "../public/google-play-badge.png";
import appleBadge from "../public/appStore-badge.png";
// import testflightIcon from "../public/appStore-badge.png";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        console.log("J");
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Nikolai Madlener</title>
                <meta
                    name="description"
                    content="Hi"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-[#161617]">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 px-10 flex justify-between dark:text-white">
                        <h1 className="text-xl font-system"></h1>
                        <ul className="flex items-center">
                            <li>
                                <a
                                    className="bg-gradient-to-r from-violet-500 to-violet-600 text-white px-4 py-2 rounded-md ml-8"
                                    href="https://nikolaimadlener.github.io/CV/"
                                >
                                    My Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center px-10 pb-10">
                        <h2 className="text-6xl py-2 text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 via-violet-400 to-violet-600 font-medium">
                            Nikolai Madlener
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white">
                            Software Engineer &amp; Student
                        </h3>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
                            I am a computer science student at TUM with
                            experience building mobile and web applications. I‘m
                            passioned about Swift, software architecture, distributed systems and machine learning applications.
                        </p>
                    </div>
                    <div className="pb-12">
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8 pb-4">
                            Let&apos;s connect!
                        </p>
                        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-800 dark:text-gray-400">
                            <a href="https://www.linkedin.com/in/nikolai-madlener-163b14169/">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://www.github.com/nikolaimadlener">
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden transform transition duration-300  hover:scale-[1.05]">
                        <Image
                            src={pp}
                            layout="fill"
                            objectFit="cover"
                            alt={"Nikolai Madlener"} />
                    </div>
                </section>
                <section className="pt-40">
                    <div>
                        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
                            Experience
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
                            Since the start of my studies I could gain
                            valuable work experience at several companies
                            and departments. Roles covered Mobile &amp; Web Developer,
                            Agile Coach, Requirements Engineer, Key User, to
                            name a few.{" "}
                        </p>
                    </div>
                    <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 gap-12 flex flex-wrap justify-center align-middle pt-10">
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
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                            <Image
                                className="object-contain"
                                height={100}
                                src={pku}
                            />
                        </div>
                    </div>
                </section>

                <section className="pt-40">
                    <div>
                        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
                            Portfolio
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
                            During my journey as a computer
                            science student, I did several projects for business, open-source, hackathons and, most importantly, just for fun.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                            I mainly focus on app development using
                            <span className="text-violet-500"> {" Swift "} </span>
                            and
                            <span className="text-violet-500">
                                {" React Native"}
                            </span>
                            .
                        </p>
                    </div>

                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 py-10 grid grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-2">
                        <div className="justify-center flex-row flex">
                            <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]">

                                <Image
                                    className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                    src={hemo}
                                    alt={"TUM Healthy Mobility App"}
                                />


                                <div className="flex flex-col flex-grow justify-between">
                                    <div className="px-6 py-4">
                                        <div className="flex-row flex justify-between mb-6">
                                            <div className="inline-block align-middle font-bold text-gray-800 dark:text-white text-xl">
                                                TUM Healthy Mobility
                                            </div>
                                            <a href="https://testflight.apple.com/join/fQBUbOYY">
                                                <div className="flex-row flex content-center rounded-md border-solid border-black dark:border-white border h-8 ">
                                                    <div className="content-center py-1 flex-column align-middle flex">
                                                        <span className="text-black dark:text-white font-thin text-xs px-2 inline-block py-1">Try it on Testflight</span>
                                                    </div>

                                                    {/* <Image
                                                        className="object-cover h-8 w-8 rounded-lg overflow-hidden"
                                                        src={testflightIcon}
                                                        alt={"encore. App Testflight"}
                                                    /> */}

                                                </div>
                                            </a>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-100 text-base">
                                            TUM HeMo recommends healthy routes based on
                                            different constraints the user can set such
                                            as the preferred transportation modes
                                            (Walking, Cycling, Public Transport) and
                                            distance constraints. The TUM HeMo app aims
                                            to increase physical activity in everyday
                                            travel and changes the user&apos;s daily commute
                                            habits.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            MapKit
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Firebase
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Docker
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center flex-row flex">
                            <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]">
                                <a href="https://github.com/NikolaiMadlener/EncoreApp">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={encore}
                                        alt={"encore. App"}
                                    />
                                </a>

                                <div className="flex flex-col flex-grow justify-between">
                                    <div className="px-6 py-4">
                                        <div className="flex-row flex justify-between mb-6 content-center">
                                            <div className="inline-block align-middle font-bold text-gray-800 dark:text-white text-xl">
                                                encore
                                            </div>
                                            <a href="https://testflight.apple.com/join/EFWCjO0n">
                                            <div className="flex-row flex content-center rounded-md border-solid border-black dark:border-white border h-8 ">
                                                    <div className="content-center py-1 flex-column align-middle flex">
                                                        <span className="text-black dark:text-white font-thin text-xs px-2 inline-block py-1">Try it on Testflight</span>
                                                    </div>

                                                    {/* <Image
                                                        className="object-cover h-8 w-8 rounded-lg overflow-hidden"
                                                        src={testflightIcon}
                                                        alt={"encore. App Testflight"}
                                                    /> */}

                                                </div>
                                            </a>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-100 text-base">
                                            No need to fight for the aux-cable anymore -
                                            simply create an encore session and invite
                                            your friends. encore lets everyone suggest
                                            their favourite songs and vote for songs
                                            they love. The most popular song will always
                                            be played next.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            SpotifySDK
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center flex-row flex">
                            <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]">
                                <a href="https://aleas.li/teambeats/">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={teambeats}
                                        alt={"team.beats App"}
                                    />
                                </a>

                                <div className="flex flex-col flex-grow justify-between">
                                    <div className="px-4 py-4">
                                        <div className="flex-row flex justify-between mb-2">
                                            <div className="font-bold text-gray-800 dark:text-white text-xl">
                                                team.beats
                                            </div>
                                            <div className="flex flex-row space-x-2">
                                                <a href="https://play.google.com/store/apps/details?id=com.aleasag.teambeats">
                                                    <Image
                                                        className="object-contain h-14 w-28 -mt-3 rounded overflow-hidden"
                                                        src={googleBadge}
                                                        alt={"team.beats App on Google Play Store"}
                                                    />
                                                </a>
                                                <a href="https://apps.apple.com/at/app/team-beats/id1614805519">
                                                    <Image
                                                        className="object-contain h-8 w-24 rounded overflow-hidden"
                                                        src={appleBadge}
                                                        alt={"team.beats App on Google Play Store"}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-100 text-base">
                                            team.beats is the challenge app for teams and organizations.
                                            Each participant collects points daily for previously individually defined categories.
                                            The gamification factor also spurs you on to collect as many points as possible.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            React Native
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Firebase
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="justify-center flex-row flex">
                            <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]">
                                <a href="https://devpost.com/software/sixtcharge">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={sixt}
                                        alt={"SIXTCharge App"}
                                    />
                                </a>

                                <div className="flex flex-col flex-grow justify-between">
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-gray-800 dark:text-white text-xl mb-6">
                                            SIXTCharge
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-100 text-base">
                                            The winning project of HackaTUM 2022
                                            (overall winner out of more than 220
                                            teams). Built in under 36 hours in a
                                            group of three. SIXTCharge allows
                                            people to charge sixt cars to earn
                                            money.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Mapbox
                                        </span>
                                        <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Coaty/MQTT
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <footer className="p-4 bg-white sm:p-6 dark:bg-[#161617]">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023 Nikolai Madlener - All Rights Reserved.
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
            </main >
        </div >
    );
}
