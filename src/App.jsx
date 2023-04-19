import "./App.css";
import logo from "./assets/fcrlive.webp";

function App() {
  return (
    <div className="App bg-orange-400 min-h-screen">
      <div className="mx-6 md:mx-24">
        <header className="h-72 flex justify-between pt-3 mb-3">
          <div className="flex justify-center">
            <img className="h-full rounded-full" src={logo} alt="logo" />
          </div>
          <div className="bg-black text-white w-3/4 rounded-r-3xl">banner</div>
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
              Home^
            </li>
            <li className="text-xl p-5">Radio</li>
            <li className="text-xl p-5">News</li>
            <li className="text-xl p-5">Contact</li>
          </ul>
        </nav>
        <main className="bg-purple-400 text-2xl">main</main>
        <footer className="bg-black bg-opacity-20 rounded-b-xl">
          <div className="flex justify-end">
            <ul className="flex flex-col">
              <li className="text-xl px-5 py-1">Privacy</li>
              <li className="text-xl px-5 py-1">Staff</li>
              <li className="text-xl px-5 py-1">Advertisements</li>
              <li className="text-xl px-5 py-1">FCR Policies</li>
              <li className="text-xl px-5 py-1">FCTG</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
