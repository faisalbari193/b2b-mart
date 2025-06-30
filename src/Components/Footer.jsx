import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <aside className="text-center md:text-left">
          {/* B2B Mart Logo SVG */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 2h6v2H9V7zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" />
            </svg>
            <h1 className="text-xl font-bold">B2B-MART</h1>
          </div>
          <p className="text-sm">
            B2B-MART Industries Ltd. <br />
            Providing reliable tech since 1992 <br />©{" "}
            {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>

        <nav className="flex gap-4">
          {/* Social Media Icons */}
          <a href="https://x.com/?lang=en" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white hover:text-blue-300"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775c1.017-.609 1.798-1.574 2.165-2.724-1.003.584-2.117.999-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04C2.179 21.346 4.768 22 7.548 22c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/" aria-label="YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white hover:text-red-400"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white hover:text-blue-400"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
