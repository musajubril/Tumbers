import React from "react";
import Link from "next/link";

const Hero = ({
  button,
  text,
  title,
}: {
  button: boolean;
  text: string;
  title: string;
  }) => {
  const images = [
    '/i1.jpg',
    '/i2.jpg',
    '/i3.jpg',
    '/i4.jpg',
    '/i5.jpg',
    '/i6.jpg',
    '/i7.jpg',
    '/i8.jpg',
    '/i9.jpg',
    '/i10.jpg',
  ]
  return (
    <div className="relative bg-white overflow-hidden font-mont" style={{height:'100vh'}}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{height: '100vh'}}
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/">
                    <h1 className="text-3xl font-writing font-extrabold cursor-pointer">
                      Tumbers
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="md:block md:ml-10 md:pr-4 md:space-x-8">
                <div className="-mr-2 flex items-center"></div>
              </div>
            </nav>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{title}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {text}.
              </p>
              {
                button &&
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/facts">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
              }
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={`${images[Math.floor(Math.random() * images.length)]}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
