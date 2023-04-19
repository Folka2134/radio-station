import "./App.css";
import logo from "./assets/fcrlive.webp";
import logoGofundme from "./assets/gofundme-blog-image.webp";
import background from "./assets/plymouth.webp";

import { BsFacebook, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="App bg-[url('./assets/plymouth.webp')] bg-fixed min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="mx-6 md:mx-24 lg:mx-32 xl:mx-44 2xl:mx-52 z-10 relative">
        <header className="h-72 flex justify-between pt-3 mb-3">
          <div className="flex justify-center">
            <img className="h-full rounded-full" src={logo} alt="logo" />
          </div>
          <div className="bg-black bg-opacity-80 text-white w-3/4 rounded-r-3xl">
            banner
          </div>
        </header>
        <div className="flex sticky h-32 bg-amber-700 rounded-lg mb-1">
          <div className="bg-gray-200 h-full w-full">
            <div>currently playing</div>
            <button>listen live ^^</button>
          </div>
          <div className="bg-gray-600 h-full w-full">
            <h2>Request a song!</h2>
          </div>
        </div>
        <nav className="bg-green-200 sticky rounded-t-lg">
          <ul className="flex">
            <li className="text-xl p-5 cursor-pointer hover:bg-green-100 rounded-tl-lg">
              Home
            </li>
            <li className="text-xl p-5 cursor-pointer hover:bg-green-100">
              Radio
            </li>
            <li className="text-xl p-5 cursor-pointer hover:bg-green-100">
              News
            </li>
            <li className="text-xl p-5 cursor-pointer hover:bg-green-100">
              Contact
            </li>
            <li className="text-xl p-5 cursor-pointer hover:bg-green-100">
              Schedule
            </li>
          </ul>
        </nav>
        <main className="bg-purple-400 text-2xl">
          <div></div>
          <h1></h1>
          <div>
            <h2>
              'The very best internet radio station from FCTG' Based in the port
              city of Plymouth - Devon - UK.
            </h2>
          </div>
        </main>
        <footer className="bg-black bg-opacity-70 rounded-b-xl text-gray-300">
          <div className="flex justify-evenly">
            <div className="flex md:flex-row flex-col items-center">
              <BsFacebook
                className="p-2 cursor-pointer"
                size={100}
                color="#1877F2"
              />
              <BsTwitter
                className=" p-2  cursor-pointer"
                size={100}
                color="#1B9DF0"
              />
            </div>
            <div className="flex justify-evenly items-center">
              <img
                className="max-h-52 cursor-pointer"
                src={logoGofundme}
                alt="logoGofundme"
              />
            </div>
            <ul className="flex flex-col justify-center items-end">
              <li className="text-xl px-5 py-1 cursor-pointer hover:text-white">
                Privacy
              </li>
              <li className="text-xl px-5 py-1 cursor-pointer hover:text-white">
                Staff
              </li>
              <li className="text-xl px-5 py-1 cursor-pointer hover:text-white">
                Advertisements
              </li>
              <li className="text-xl px-5 py-1 cursor-pointer hover:text-white">
                FCR Policies
              </li>
              <li className="text-xl px-5 py-1 cursor-pointer hover:text-white">
                FCTG
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
