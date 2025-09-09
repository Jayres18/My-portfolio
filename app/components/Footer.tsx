import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 dark:bg-dark/80 text-black dark:text-white py-6 border-t border-slate-200 dark:border-dark/50 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-10">
        <div className="font-medium">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
        <div className="flex space-x-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
