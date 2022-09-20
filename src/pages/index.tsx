import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-start">
      <Head>
        <title>Frontend Mentor | Intro section with dropdown navigation</title>
        <meta
          name="description"
          content="Frontend Mentor | Intro section with dropdown navigation"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="container flex w-full flex-col items-center justify-between md:flex-row-reverse md:justify-center md:px-14">
        <div className="flex justify-center md:w-1/2">
          <div className="w-full md:hidden">
            <Image
              src="/images/image-hero-mobile.png"
              width={750}
              height={564}
              alt=""
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/image-hero-desktop.png"
              width={445}
              height={594}
              alt=""
            />
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-evenly gap-8 bg-white px-4 md:mt-0 md:h-screen md:w-1/2 md:gap-0 md:px-8">
          <h1 className="w-full text-center text-[34px] font-bold md:text-left md:text-7xl">
            Make remote work
          </h1>
          <p className="w-full text-center text-base md:w-3/4 md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="mx-auto rounded-xl bg-black px-6 py-3 text-white md:m-0">
            Leran more
          </button>
          <div className="flex w-full items-center justify-center gap-8 md:justify-start">
            <Image
              src="/images/client-databiz.svg"
              width={114}
              height={20}
              alt=""
            />
            <Image
              src="/images/client-audiophile.svg"
              width={73}
              height={36}
              alt=""
            />
            <Image
              src="/images/client-meet.svg"
              width={90}
              height={20}
              alt=""
            />
            <Image
              src="/images/client-maker.svg"
              width={83}
              height={24}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
