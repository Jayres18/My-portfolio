import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="py-40 mb-30 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          className="rounded-full mx-auto mb-4 border-1 border-slate-300 dark:border-slate-600"
          src="/profile.png"
          alt={"My profile picture."}
          width={180}
          height={180}
        />
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm <span className="text-primary">Joseph Lansang</span>
        </h1>
        <p className="text-lg text-black dark:text-white mb-4 font-medium">
          Web Developer | Administrative Assistant | Tech Enthusiast
        </p>
        <div className="container flex flex-row justify-center items-center space-x-4">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            className="hover:text-primary transition-colors font-medium"
          >
            <span className="sr-only">GitHub</span>
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </Link>
          <Link
            href="mailto:your@email.com"
            className="hover:text-primary transition-colors font-medium"
          >
            <span className="sr-only">Email</span>
            <svg width="28" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 2.24l-7.07 7.07a1 1 0 0 1-1.42 0L4 6.24V20h16V6.24z" />
            </svg>
          </Link>
          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener"
            className="hover:text-primary transition-colors font-medium"
          >
            <span className="sr-only">Instagram</span>
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </Link>
        </div>
        <div className="container flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-3 md:space-y-0 mt-5">
          <button className="min-w-[140px] bg-transparent hover:bg-blue-500 dark:text-white font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View Projects
          </button>
          <button className="min-w-[140px] bg-transparent hover:bg-blue-500 dark:text-white font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
