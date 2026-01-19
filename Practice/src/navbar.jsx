import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        {/* Hamburger menu for small and medium screens */}
        <div className="dropdown dropdown-end lg:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Link</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a>Login</a>
                    </li>
                    <li>
                      <a>Sign up</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          )}
        </div>
        {/* Horizontal menu for large screens */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>Sign up</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
