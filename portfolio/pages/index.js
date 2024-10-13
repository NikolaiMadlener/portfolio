import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
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
import citymonitor from "../public/citymonitor.png";
import stanford from "../public/stanford.png";
import pp from "../public/pp.jpeg";
import hrtex from "../public/hrtex.png";

import googleBadge from "../public/google-play-badge.png";
import appleBadge from "../public/appStore-badge.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nikolai Madlener</title>
        <meta name="description" content="Hi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-[#161617] transition-colors duration-500">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 px-10 flex justify-between dark:text-white">
            <h1 className="text-xl font-system"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={handleClick}
                  className="cursor-pointer text-2xl"
                />
              </li>
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
            <div className="h-8" />
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
              I am a software engineer and new grad from Technical University of
              Munich with experience building mobile and web applications. I‘m
              passioned about software architecture, distributed systems and
              machine learning applications.
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
              alt={"Nikolai Madlener"}
            />
          </div>
        </section>

        <section className="pt-40">
          <div>
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
              News
            </h1>
          </div>
          <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 gap-12 flex flex-wrap justify-center align-middle pt-10">
            <div className="flex overflow-x-auto pb-10 hide-scroll-bar">
              <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                <div className="inline-block px-3">
                  <div className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://www.linkedin.com/posts/stanford-biodesign_healthapp-digital-biodesign-activity-7222642167788310529-3nwB?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4E22AQFxIgSDmn2FuA/feedshare-shrink_800/feedshare-shrink_800/0/1722012081756?e=1731542400&v=beta&t=pSEz_PSYc91Ot8IfPqYqw4Pz_sIR4jLDc3PL5xJXe0Q"
                        alt="Article 1"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 dark:text-white">
                            Visiting Researcher at Stanford University
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            September, 2024
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            Last summer I was a visiting researcher at Stanford
                            University writing my master's thesis at Stanford
                            Biodesign.
                          </p>
                        </div>
                        <p className="text-blue-500 text-sm mt-4">
                          Read more →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://www.merkur.de/lokales/muenchen/baeume-fordern-per-app-hilfe-an-beim-hacker-wettkampf-der-tu-muenchen-92764046.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src="https://www.merkur.de/assets/images/33/546/33546181-die-vier-informatik-studenten-bei-der-praesentation-nach-durchprogrammierten-naechten-3aMH.jpg"
                        alt="Article 2"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 dark:text-white">
                            Winning HackaTUM 2023
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            November, 2023
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            For the second time in a row, my team and I won the
                            HackaTUM, one of Europe&apos;s largest hackathons.
                            <a href="https://github.com/NikolaiMadlener/EncoreApp">
                              encore
                            </a>
                            .
                          </p>
                        </div>
                        <p className="text-blue-500 text-sm mt-4">
                          Read more →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7090522313695105026?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/D5622AQG6JL-_N_jQGg/feedshare-shrink_1280/feedshare-shrink_1280/0/1690512252666?e=1731542400&v=beta&t=06RBhrDZ2XGJ3y8u_JvcynwMQElIylKSRkIw-gLikSk"
                        alt="Article 3"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 dark:text-white">
                            Exchange Semester at Peking University
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            August, 2023
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            I spent one semester at Peking University, where I
                            learned about Chinese culture and deepened my
                            knowledge in computer science.
                          </p>
                        </div>
                        <p className="text-blue-500 text-sm mt-4">
                          Read more →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://www.linkedin.com/posts/nikolaimadlener_hackatum-hackatum-hackathon-activity-7001269431926444032-EKDa?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4D22AQGlpku6MhPOSA/feedshare-shrink_1280/feedshare-shrink_1280/0/1669232708061?e=1731542400&v=beta&t=WPmcdabrWKU7_kRaxb2lCIreFQI8tz8vFLkgfFjh9Ck"
                        alt="Article 4"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 dark:text-white">
                            Winning HackaTUM 2022
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            November, 2022
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            I won my first large hackathon with my two friends
                            at HackaTUM 2022 with the iOS app we built for Sixt.
                          </p>
                        </div>
                        <p className="text-blue-500 text-sm mt-4">
                          Read more →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="inline-block px-3">
                  <div className="w-64 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white dark:bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <a
                      href="https://www.linkedin.com/posts/nikolaimadlener_swift-ipraktikum-activity-6990771633116319744-iA_K?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4D22AQH2M-DnGYgEOg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1666729836342?e=1731542400&v=beta&t=4rIAwK-2mVGX9n3tI2nWdBZW8DHziv7R7LOqnRICTOs"
                        alt="Article 5"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4 h-64 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold mb-2 dark:text-white">
                            Teaching Swift to Students
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                            November, 2021
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm">
                            During winter semester 2021/22 I taught the
                            fundamentals of Swift and SwiftUI in the iPraktikum
                            bootcamp at TUM.
                          </p>
                        </div>
                        <p className="text-blue-500 text-sm mt-4">
                          Read more →
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .hide-scroll-bar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .hide-scroll-bar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </section>

        <section className="pt-40">
          <div>
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
              Experience
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
              Since the start of my studies I could gain valuable work
              experience at several companies and departments. Roles covered
              Mobile &amp; Full Stack Developer, Agile Coach, Requirements
              Engineer, Key User, to name a few.{" "}
            </p>
          </div>
          <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 gap-12 flex flex-wrap justify-center align-middle pt-10">
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={aleasLight} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={teslaLight} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={msgLight} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image
                className="object-contain"
                height={100}
                src={citymonitor}
              />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={zeissLight} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={tumLight} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={pku} />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
              <Image className="object-contain" height={100} src={stanford} />
            </div>
          </div>
        </section>

        <section className="pt-40">
          <div>
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 dark:text-white font-extrabold mb-5 pt-4">
              Portfolio
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto px-8">
              During my journey as a computer science student, I did several
              projects for business, freelance, open-source, hackathons and,
              most importantly, just for fun.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 font-normal xl:w-10/12 xl:mx-auto">
              I mainly focus on app and web development using
              <span className="text-violet-500"> {" Swift "} </span>,
              <span className="text-violet-500"> {" Typescript "} </span>
              and
              <span className="text-violet-500">{" Elixir"}</span>.
            </p>
          </div>

          <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16 py-10 grid grid-cols-1 gap-8 md:grid-cols-1 xl:grid-cols-2">
            <div className="justify-center flex-row flex">
              <div
                className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]"
              >
                <Image
                  className="object-cover h-64 sm:h-48 md:h-48 lg:h-64"
                  src={hrtex}
                  alt={"HrtEx"}
                />

                <div className="flex flex-col flex-grow justify-between">
                  <div className="px-6 py-4">
                    <div className="flex-row flex justify-between mb-6">
                      <div className="inline-block align-middle font-bold text-gray-800 dark:text-white text-xl">
                        Stanford HrtEx
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-100 text-base">
                      HrtEx is an electronic health record integrated platform
                      allowing clinicians to monitor and control hypertension
                      via bluetooth blood pressure devices and an evidence-based
                      medication titration algorithm.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      Typescript
                    </span>
                    <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      React
                    </span>
                    <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      NestJS
                    </span>
                    <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      FHIR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-center flex-row flex">
              <div
                className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]"
              >
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
                    </div>
                    <p className="text-gray-600 dark:text-gray-100 text-base">
                      TUM HeMo recommends healthy routes based on different
                      constraints the user can set such as the preferred
                      transportation modes (Walking, Cycling, Public Transport)
                      and distance constraints. The TUM HeMo app aims to
                      increase physical activity in everyday travel and changes
                      the user&apos;s daily commute habits.
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
              <div
                className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]"
              >
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
                    </div>
                    <p className="text-gray-600 dark:text-gray-100 text-base">
                      No need to fight for the aux-cable anymore - simply create
                      an encore session and invite your friends. encore lets
                      everyone suggest their favourite songs and vote for songs
                      they love. The most popular song will always be played
                      next.
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
              <div
                className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]"
              >
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
                      team.beats is the challenge app for teams and
                      organizations. Each participant collects points daily for
                      previously individually defined categories. The
                      gamification factor also spurs you on to collect as many
                      points as possible.
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
              <div
                className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-gray-50 dark:bg-black flex flex-col transform 
                                transition duration-200  hover:scale-[1.02]"
              >
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
                      The winning project of HackaTUM 2022 (overall winner out
                      of more than 220 teams). Built in under 36 hours in a
                      group of three. SIXTCharge allows people to charge sixt
                      cars to earn money.
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
        </section>

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
      </main>
    </div>
  );
}
