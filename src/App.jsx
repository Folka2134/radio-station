import "./App.css";
import logo from "./assets/fcrlive.webp";
import logoGofundme from "./assets/gofundme-blog-image.webp";
import background from "./assets/plymouth.webp";

import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="App bg-[url('./assets/plymouth.webp')] bg-fixed bg-cover min-h-screen relative min-w-[350px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="mx-6 md:mx-24 lg:mx-44 xl:mx-52 2xl:mx-72 z-10 relative">
        <header className=" flex flex-col md:flex-row justify-center md:justify-between items-center pt-3 mb-3">
          <div className="flex justify-center md:mr-5 mb-2">
            <img
              className="max-h-96 md:h-full rounded-full"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="hidden md:block max-h-96 h-52 bg-black bg-opacity-80 text-white w-full rounded-3xl p-3">
            banner
          </div>
        </header>
        <div className="sticky top-5">
          <div className="flex h-32 bg-black bg-opacity-80 rounded-xl mb-1 text-white border-2 border-white border-opacity-50 p-2">
            <div className="h-full w-full">
              <div>currently playing</div>
              <button>listen live ^^</button>
            </div>
            <div className="h-full w-full">
              <h2>Request a song!</h2>
            </div>
          </div>
          <nav className="flex justify-end md:justify-between md:bg-black md:bg-opacity-70 text-gray-300 md:border-2 border-black border-opacity-40 rounded mb-1">
            <ul className="hidden md:flex">
              <li className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200 rounded-tl-lg">
                Home
              </li>
              <li className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200">
                Radio
              </li>
              <li className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200">
                News
              </li>
              <li className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200">
                Contact
              </li>
              <li className="text-xl p-5 cursor-pointer hover:text-white active:bg-white active:text-black transition-all duration-200">
                Schedule
              </li>
            </ul>
            <div className="block md:hidden mr-2">
              <RxHamburgerMenu size={50} color="white" />
            </div>
          </nav>
        </div>
        <main className="bg-[#1A3175] bg-opacity-60 border-2 border-black border-opacity-40 text-white text-2xl p-6">
          <div></div>
          <h1 className="text-5xl md:text-6xl text-center font-semibold">
            Ferndale Community Radio Plymouth
          </h1>
          <div className="mt-2 text-center">
            <h2 className="text-lg">
              'The very best internet radio station from FCTG'
            </h2>
            <p className="text-[1rem]">
              Based in the port city of Plymouth - Devon - UK.
            </p>
          </div>
          {/* <NewsList /> */}
        </main>
        <footer className="bg-black bg-opacity-70 rounded-b-xl text-gray-300 border-2 border-black border-opacity-40">
          <div className="flex justify-evenly pl-5 pr-0 py-2">
            <div className="flex md:flex-row flex-col items-center">
              <BsFacebook
                className="p-2 cursor-pointer"
                size={100}
                color="#1877F2"
              />
              <BsTwitter
                className=" max-h-24 p-2  cursor-pointer"
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
            <ul className="flex flex-col justify-center items-end text-">
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Privacy
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Staff
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                Advertisements
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
                FCR Policies
              </li>
              <li className="px-5 py-1 cursor-pointer hover:text-white">
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
