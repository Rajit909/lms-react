import React from 'react';
import Accordian from './Accordian/Accordian';
// import image from "./img.png"

function Courseinfo({theme}) {
  return (

    <>
  
  <main>
        
        <div className="hidden lg:flex w-full flex-grow font-sansui">
          <div className="mx-auto w-full">
            <div className="bg-[#131314] hidden py-12 text-white lg:block">
              <div className="mx-auto flex w-full max-w-6xl px-5">
                <div className="mr-8 flex-grow">
                  <div>
                    <h1 className="mt-4 text-2xl font-bold md:text-4xl lg:mt-0">
                      Python Full stack using Django
                    </h1>
                  </div>
                  <div className="text-sm italic mt-3">
                    Live classes Monday-sataurday
                  </div>
                  <div className="mt-2 mb-3 text-warning-400">
                    <div className="mt-1 w-full flex items-center gap-3">
                      <div className="text-yellow-500 flex items-center gap-2">
                        <p className="font-bold text-sm">5.0</p>
                        <div className="flex gap-[1px]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                          </svg>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                          </svg>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                          </svg>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                          </svg>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="text-gray-300 text-xs font-semibold tracking-wide">
                       
                      </div>
                      <div className="flex gap-2 items-center bg-white rounded-sm py-1 px-2 text-black text-xs">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                        </svg>
                        
                      </div>
                    </div>
                  </div>
                  <div className="my-2 flex flex-col gap-2">
                    <p>
                      Course Creator:{" "}
                      <span className="font-bold underline">Rajit kumar</span>
                    </p>
                    <span className="text-xs text-gray-400">
                      Updated syllabus
                    </span>
                  </div>
                </div>
                <div className="relative" style={{ flex: "0 0 35%", maxWidth: 400 }}>
                  <div className="absolute inset-0 transition-all delay-100 opacity-1 ">
                    <div className="sticky top-4 z-0 text-gray-800 ">
                      <div className="rounded-lg bg-gray-50 shadow-2xl rounded-t-2xl">
                        <div className="relative ">
                          <img
                            alt="Course"
                            loading="lazy"
                            width={400}
                            height={200}
                            decoding="async"
                            data-nimg={1}
                            className="rounded-t-2xl"
                            srcSet="/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=828&q=75 2x"
                            src="/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=828&q=75"
                            style={{}}
                          />
                        </div>
                        <div className="px-5 pb-3">
                          <div>
                            <p className="font-bold text-2xl my-2" />
                            <div className="flex items-center gap-3">
                              <h3 className="font-bold text-4xl">
                                ₹3,999{" "}
                                <span className="text-sm line-through opacity-80" />
                              </h3>
                            </div>
                            <div>
                              <button className="my-1 w-full rounded-lg bg-indigo-600 py-2 px-8 text-base font-[500] text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:cursor-wait md:text-lg">
                                Buy Now
                              </button>
                              <div className="flex justify-center items-center">
                                <div className="text-sm text-center cursor-pointer">
                                  {/* <span className="underline mt-2">Apply Coupon</span> */}
                                </div>
                              </div>
                            </div>
                            <p className="font-bold text-xl mt-2">
                              What you will get:
                            </p>
                            <div className="mt-2">
                              <div className="flex gap-4 items-center mb-1 text-[16px] opacity-80">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  t={1569683915274}
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <defs />
                                  <path d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                                  <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z"></path>
                                  <path d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z"></path>
                                </svg>
                                <p>Mon-sat(Live Classes)</p>
                              </div>
                              <div className="flex gap-4 items-center mb-1 text-[16px] opacity-80">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                                </svg>
                                <p>Certificate of completion</p>
                              </div>
                            </div>
                            <div className="border-t-2 text-center">
                              <div className="flex justify-center">
                                <img
                                  alt="Stripe"
                                  loading="lazy"
                                  width={150}
                                  height={100}
                                  decoding="async"
                                  data-nimg={1}
                                  src="/_next/static/media/stripe.da82f281.svg"
                                  style={{ color: "transparent" }}
                                />
                                <img
                                  alt="Razorpay"
                                  loading="lazy"
                                  width={150}
                                  height={32}
                                  decoding="async"
                                  data-nimg={1}
                                  src="/_next/static/media/razorpay.a3c741da.svg"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-4 flex w-full max-w-6xl space-x-8 px-5 pb-16">
              <div className="flex-grow">
                <div>
                  <h2 className="my-5 block tracking-tight text-gray-900 font-extrabold text-3xl">
                    Description
                  </h2>
                  <div className="w-[50%] __custom-description__html">
                    <p>
                    In this Course you will learn all about web development using python django Stack.
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      Python is a very fast & modern programming language, it used for full stack web development using Django framework,
                      Django is most popular & secure and scalable web wesed framework for building websites
                    </p>
                    <p>
                      <br />
                    </p>
                    <h2>
                      <strong>Tech Stack</strong>
                    </h2>
                    <ul>
                      <li>
                        <strong>Html & css</strong> We will learn all about basic to advance from scratch about html and Css.
                      </li>
                      <li>
                        <strong>TailwindCSS</strong> for styling and reusable
                        components.
                      </li>
                      <li>
                        <strong>JavaScript</strong> To make our web pages dynamic we will learn about JavaScript core concepts like Dom-maniplation , functions, variavls etc.
                      </li>
                      <li>
                        <strong>Git & Github</strong> Git used worldwide for version control of any software or website and app.
                        So we will learn all about git & Github from Scratch.
                      </li>
                      <li>
                        <strong>MySQL</strong> is our database, which is a
                        powerful and reliable relational database system.
                      </li>
                      <li>
                        <strong>Bootstrap</strong> Bootstrap is a popular css framework, we will learn all about Bootstrap for making frontend page faster.
                      </li>
                      <li>
                        <strong>Python</strong> for writting our backend code, we will learn all about Python programming language from scratch.
                      </li>
                      <li>
                        <strong>Django</strong> Django is a most popular and secure full stack web framework for making website, we will learn all about Django framework from basic to advance.
                      </li>
                      <li>
                        <strong>Google Firebase</strong> for authentication
                      </li>
                      <li>
                       <strong>Deployment</strong> we will definitly learn about how to deploy our web app on server with free hosting.
                      </li>
                    </ul>
                    <p>
                      <br />
                    </p>
                    <p>
                      {/* Checkout detailed document on{" "}
                      <a
                        href="https://www.notion.so/piyushgargdev/FullStack-Twitter-Clone-e9ec430db7674d7c92223054037848d7?pvs=4"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Twitter Clone Notion Page
                      </a> */}
                    </p>
                    <p>
                      Join Discord Server{" "}
                      <a
                        href="https://discord.gg/kRSRxBQ6xf"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        https://discord.gg/kRSRxBQ6xf
                      </a>
                    </p>
                  </div>
                {
                 <Accordian/>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pb-6 lg:hidden">
          <div className="bg-[#1c1d1f] flex flex-col justify-center py-10 px-5 ">
            <div className="w-full text-white flex justify-center flex-col ">
              <img
                alt="Course "
                loading="lazy"
                width={400}
                height={200}
                decoding="async"
                data-nimg={1}
                className="rounded-md w-full"
                srcSet="/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=828&q=75 2x"
                src="/_next/image?url=https%3A%2F%2Fdcaj3bhl5hivm.cloudfront.net%2F__courses%2F3c6a90c4-7406-47ff-9ee9-3b291fb8a986%2FCOURSE_IMAGE%2FCopy%2520of%2520Copy%2520of%2520Copy%2520of%2520Props%2520%25281%2529-Bojp-m.jpg&w=828&q=75"
                style={{}}
              />
              <div className="tracking-wide font-normal mt-4">
                <h1 className="font-[700] text-2xl">  Python Full stack using Django</h1>
                <p className="italic mt-2 text-sm">Live classes Monday-sataurday</p>
              </div>
              <div className="mt-3 flex items-center">
                <div className="text-yellow-500 flex items-center gap-2">
                  <p className="font-bold text-sm">5.0</p>
                  <div className="flex gap-[1px]">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="mx-3 flex-shrink-0 text-[.8rem] font-medium text-gray-300">
                 
                </div>
                <div className="relative inline-flex flex-shrink-0 gap-1 items-center bg-gray-50 rounded-sm border px-1.5 py-0.5 w-fit text-[.65rem] leading-[16px] font-medium text-gray-800 tracking-wide mr-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  </svg>
                  {/* <p>354 enrolled</p> */}
                </div>
              </div>
              <div className="mt-3">
                <p>
                  Course Creator:{" "}
                  <span className="font-bold underline">Rajit kumar</span>
                </p>
              </div>
              <div className="text-gray-400 text-xs mt-3">
                Updated syllabus
              </div>
            </div>
            <div className="w-full text-white mt-6">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-4xl">
                  ₹3,999 <span className="text-sm line-through opacity-80" />
                </h3>
              </div>
              <button className="my-1 w-full rounded-lg bg-indigo-600 py-2 px-8 text-base font-[500] text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200 disabled:cursor-wait md:text-lg">
                Buy Now
              </button>
              <div className="flex justify-center items-center">
                <div className="text-sm text-center cursor-pointer">
                  {/* <span className="underline">Apply Coupon</span> */}
                </div>
              </div>
              <p className="font-[500] text-sm mt-4">What you will get:</p>
              <div className="mt-2">
                <div className="flex gap-4 items-center mb-1 text-[12px] opacity-80">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    t={1569683915274}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
                    <path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z"></path>
                    <path d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z"></path>
                  </svg>
                  <p className="text-[12px]">Mon-sat(Live Classes)</p>
                </div>
                <div className="flex gap-4 items-center mb-1 text-[12px] opacity-80">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                  </svg>
                  <p className="text-[12px]">Certificate of completion</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="mt-6">
              <h1 className="font-extrabold text-2xl">Description</h1>
              <div className="mt-6 flex flex-col __custom-description__html">
                <p>
                In this Course you will learn all about web development using python django Stack.
                </p>
                <p>
                  <br />
                </p>
                <p>
                      Python is a very fast & modern programming language, it used for full stack web development using Django framework,
                      Django is most popular & secure and scalable web wesed framework for building websites
                    </p>
                    <p>
                      <br />
                    </p>
                    <h2>
                      <strong>Tech Stack</strong>
                    </h2>
                    <ul>
                      <li>
                        <strong>Html & css</strong> We will learn all about basic to advance from scratch about html and Css.
                      </li>
                      <li>
                        <strong>TailwindCSS</strong> for styling and reusable
                        components.
                      </li>
                      <li>
                        <strong>JavaScript</strong> To make our web pages dynamic we will learn about JavaScript core concepts like Dom-maniplation , functions, variavls etc.
                      </li>
                      <li>
                        <strong>Git & Github</strong> Git used worldwide for version control of any software or website and app.
                        So we will learn all about git & Github from Scratch.
                      </li>
                      <li>
                        <strong>MySQL</strong> is our database, which is a
                        powerful and reliable relational database system.
                      </li>
                      <li>
                        <strong>Bootstrap</strong> Bootstrap is a popular css framework, we will learn all about Bootstrap for making frontend page faster.
                      </li>
                      <li>
                        <strong>Python</strong> for writting our backend code, we will learn all about Python programming language from scratch.
                      </li>
                      <li>
                        <strong>Django</strong> Django is a most popular and secure full stack web framework for making website, we will learn all about Django framework from basic to advance.
                      </li>
                      <li>
                        <strong>Google Firebase</strong> for authentication
                      </li>
                      <li>
                       <strong>Deployment</strong> we will definitly learn about how to deploy our web app on server with free hosting.
                      </li>
                </ul>
                <p>
                  <br />
                </p>
                <p>
                  Checkout detailed document on{" "}
                  <a
                    href="https://www.notion.so/piyushgargdev/FullStack-Twitter-Clone-e9ec430db7674d7c92223054037848d7?pvs=4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Twitter Clone Notion Page
                  </a>
                </p>
                <p>
                  Join Discord Server{" "}
                  <a
                    href="https://discord.gg/kRSRxBQ6xf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://discord.gg/kRSRxBQ6xf
                  </a>
                </p>
              </div>
            </div>
          {
           <Accordian/>
          }
          </div>
        </div>
      </main>
    </>
  )
}

export default Courseinfo