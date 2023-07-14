import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function Navebar() {
  const { user, logout } = useAuth();
  // console.log("userprofile", user);

  return (
    <header className="shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-600"
            type="button"
          >
            <span className="sr-only">Account</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>

          <form className="mb-0 hidden lg:flex">
            <div className="relative">
              <input
                className="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10 p-4"
                placeholder="Search..."
                type="text"
              />

              <button
                type="submit"
                className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
              >
                <span className="sr-only">Submit Search</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="flex w-0 flex-1 justify-end lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-500"
            type="button"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          aria-label="Global"
          className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
        >
          {user?.isAdmin ? (
            <Link to="/addProduct">
              <button className="text-gray-900" type="button">
                Addproduct
              </button>
            </Link>
          ) : (
            <div></div>
          )}
          <a className="text-gray-900" href="">
            About Us
          </a>
          <a className="text-gray-900" href="">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {user ? (
            <>
              <Link to={`/userProfile/${user.id}`}>
                <div className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                  {user?.firstName}
                </div>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              >
                Log in
              </a>

              <a
                href="/register"
                className="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
              >
                Sign up
              </a>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <ul className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          <li>
            <a className="shrink-0 px-4 text-gray-900" href="">
              About us
            </a>
          </li>
          <li>
            <a className="shrink-0 px-4 text-gray-900" href="/addProduct">
              Addproduct
            </a>
          </li>
          <li>
            <a className="shrink-0 px-4 text-gray-900" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
