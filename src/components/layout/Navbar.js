import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <header className="mx-auto py-3 sticky top-0 z-10 border-b bg-blue-25">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0V22.551H22.2232C24.432 22.1088 28.829 20.0612 28.7475 15.4082C28.6659 10.7551 25.3155 8.70748 23.6504 8.26531H8.25726V19.0816H3.66989V3.46939H23.0388C26.5048 4.2517 33.4368 7.57143 33.4368 14.5918C33.4368 22.6912 30.2238 24.0106 29.8088 24.0856C30.325 24.2435 35.2717 27.2645 35.2717 34.4898C35.2717 40.5306 29.2912 44.966 26.3009 46.4286H3.66989V30.9184H23.6504C24.5339 30.9524 26.3009 31.7143 26.3009 34.4898C26.3009 37.2653 24.5339 38.1633 23.6504 38.2653H11.8252V31.9388L8.25726 33.4694V41.6327H23.6504C25.8591 41.3265 30.2766 39.4694 30.2766 34.4898C30.2766 29.5102 25.8591 27.585 23.6504 27.2449H11.8252V23.5714L8.25726 25.102V27.2449H0V50H24.364C29.2572 49.6259 39.0436 46.1429 39.0436 35.2041C39.1115 32.517 38.3504 26.5306 34.762 24.0816C35.6115 22.619 37.2698 18.8367 37.1067 15.4082C36.9028 11.1224 36.1892 0.918367 22.2232 0H0ZM11.8252 19.0816V11.9388H23.0388C23.7184 12.1088 25.0776 13.0408 25.0776 15.4082C25.0776 17.7755 23.1747 18.8435 22.2232 19.0816H11.8252Z"
              fill="#3b82f6"
            />
          </svg>
        </Link>

        <nav className="space-x-4 text-sm md:text-lg">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <a
            href="mailto:brenden@bmoore.dev"
            className="border border-blue-500 px-2 py-1 rounded hover:shadow"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
