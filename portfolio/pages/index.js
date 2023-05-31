import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import hemo from "../public/HeMoMarketing3.png";
import encore from "../public/encoreMarketing.png";
import sixt from "../public/SixtmarketingImage.png";
import teambeats from "../public/teambeats2.jpg";
import avatar from "../public/avatar.png";
import aleasLight from "../public/aleas-light2.png";
import msgLight from "../public/msg-light2.png";
import teslaLight from "../public/tesla-light2.png";
import tumLight from "../public/tum-light2.png";
import zeissLight from "../public/zeiss-light2.png";
import pku from "../public/peking-university-seal.png";
import pp from "../public/pp.jpg"


export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        console.log("J");
        setDarkMode(!darkMode);
    }

    return (
        <div className={darkMode ? "dark" : ""}>

            <main className="bg-white dark:bg-[#161617]">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 px-10 flex justify-between dark:text-white">
                        <h1 className="text-xl font-system"></h1>
                        <ul className="flex items-center">
                            {/* <li>
                                <BsFillMoonStarsFill
                                    onClick={handleClick}
                                    className="cursor-pointer text-2xl"
                                />
                            </li> */}

                            <li>
                                <a
                                    className="bg-gradient-to-r from-violet-500 to-violet-600 text-white px-4 py-2 rounded-md ml-8"
                                    href="https://nikolaimadlener.github.io/CV/"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center px-10 pb-10">
                        <h2 className="text-5xl py-2 text-violet-600 dark:text-violet-600 font-medium">
                            Nikolai Madlener
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white">
                            Software Engineer, Student, Adventurer
                        </h3>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
                            I am a computer science student at TUM with
                            experience building mobile and web applications. I‘m
                            passioned about Swift, software architecture, distributed systems and machine learning applications.
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
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
                        <Image src={pp} layout="fill" objectFit="cover" />
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
                            and departments. Roles covered Mobile Developer,
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
                    {/* </div> */}
                </section>

                <section className="pt-40">
                    <div>
                        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
                            Portfolio
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
                            During my journey as a computer
                            science student, I did several projects for business, open-source, hackathons and, of course, just for fun.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
                            I mainly focused on App development using
                            <span className="text-violet-600"> {" Swift "} </span>
                            and
                            <span className="text-violet-600">
                                {" React Native"}
                            </span>
                            .
                        </p>
                    </div>

                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 py-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
                        <div class="justify-center flex-row flex">
                            <div class="max-w-md rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">
                                <a href="https://github.com/dhg-applab/HeMo">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={hemo}
                                    />
                                </a>

                                <div class="flex flex-col flex-grow justify-between">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-gray-800 dark:text-white text-xl mb-2">
                                            TUM Healthy Mobility
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-100 text-base">
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
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            MapKit
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Firebase
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Docker
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="justify-center flex-row flex">
                            <div class="max-w-md rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">
                                <a href="https://github.com/NikolaiMadlener/EncoreApp">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={encore}
                                    />
                                </a>

                                <div class="flex flex-col flex-grow justify-between">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-gray-800 dark:text-white text-xl mb-2">
                                            Encore
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-100 text-base">
                                            No need to fight for the aux-cable anymore -
                                            simply create an encore session and invite
                                            your friends. encore lets everyone suggest
                                            their favourite songs and vote for songs
                                            they love. The most popular song will always
                                            be played next.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            SpotifySDK
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="justify-center flex-row flex">
                            <div class="max-w-md rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">
                                <a href="https://aleas.li/teambeats/">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={teambeats}
                                    />
                                </a>

                                <div class="flex flex-col flex-grow justify-between">
                                    <div class="px-4 py-4">
                                        <div class="font-bold text-gray-800 dark:text-white text-xl mb-2">
                                            team.beats
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-100 text-base">
                                            team.beats is the challenge app for teams and organizations.
                                            Each participant collects points daily for previously individually defined categories.
                                            The gamification factor also spurs you on to collect as many points as possible.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            React Native
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Firebase
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="justify-center flex-row flex">
                            <div class="max-w-md rounded-2xl overflow-hidden shadow-lg bg-black flex flex-col">
                                <a href="https://devpost.com/software/sixtcharge">
                                    <Image
                                        className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                                        src={sixt}
                                    />
                                </a>

                                <div class="flex flex-col flex-grow justify-between">
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-gray-800 dark:text-white text-xl mb-2">
                                            SIXTCharge
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-100 text-base">
                                            The winning project of HackaTUM 2022
                                            (overall winner out of more than 220
                                            teams). Built in under 36 hours in a
                                            group of three. SIXTCharge allows
                                            people to charge sixt cars to earn
                                            money.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Swift
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                                            Mapbox
                                        </span>
                                        <span class="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
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
