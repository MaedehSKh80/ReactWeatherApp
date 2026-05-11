import { useState } from "react";
import "./App.css";
import NoCity from "./components/NoCity/NoCity";

function App() {
  const [city, setCity] = useState("");
  const [cityTempData, setCityTempData] = useState(false);
  const [noCity, setNoCity] = useState(false);

  const cities = [
    { id: 1, name: "tehran", temp: 25, desc: "rain possible" },
    { id: 2, name: "gorgan", temp: 5, desc: "rain possible" },
    { id: 3, name: "tabriz", temp: 24, desc: "rain possible" },
    { id: 4, name: "esfahan", temp: 45, desc: "rain possible" },
    { id: 5, name: "shiraz", temp: 35, desc: "rain possible" },
    { id: 6, name: "mashhad", temp: 27, desc: "rain possible" },
  ];

  const showTempHandler = () => {
    const cityInfo = cities.find((item) => item.name === city);
    if (cityInfo) {
      setCityTempData(cityInfo);
      setNoCity(false);
    } else {
      setCityTempData(false);
      setNoCity(true);
    }
  };
  return (
    <>
      <article id="weather-card">
        <header className="" id="weather-card.header">
          <div id="city-name">
            Iran - {cityTempData.name ? cityTempData.name : cities[0].name}
          </div>
          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature">
              {cityTempData.temp ? cityTempData.temp : cities[0].temp}
            </span>
          </div>
          <div id="desc">
            {cityTempData.desc ? cityTempData.desc : cities[0].desc}
          </div>
          <div id="search-field">
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="search the city name ..."
              id="search-input"
              className="w-full h-10 bg-black"
            />
            <button id="search-btn" onClick={showTempHandler}>
              search
            </button>
          </div>
        </header>
        <main id="in-hours">
          <article className="hourly-card">
            <p className="hour"> 16:00 </p>
            <img src="./sample.jpg" />
            <p className="hour-temp"> 16C </p>
          </article>
          <article className="hourly-card">
            <p className="hour"> 16:00 </p>
            <img src="./sample.jpg" />
            <p className="hour-temp"> 16C </p>
          </article>
          <article className="hourly-card">
            <p className="hour"> 16:00 </p>
            <img src="./sample.jpg" />
            <p className="hour-temp"> 16C </p>
          </article>
          <article className="hourly-card">
            <p className="hour"> 16:00 </p>
            <img src="./sample.jpg" />
            <p className="hour-temp"> 16C </p>
          </article>
        </main>
        <footer className="footer-area">
          <div>
            <small>All data here is FAKE and saved in the local state!</small>
          </div>
          <div>
            <small>
              you can use these names as a city name : tehran , gorgan , mashhad
              , esfahan , shiraz , tabriz!
            </small>
          </div>
          <div className="footer-main">
            <hr />
            <small>
              Made with ❤️ by{" "}
              <a href="https://itsmaedehskh.ir">itsmaedehskh.ir</a>
            </small>
          </div>{" "}
        </footer>
      </article>
      {noCity && (
        <NoCity
          onClose={() => {
            setNoCity(false);
            setCity("");
          }}
        />
      )}
    </>
  );
}

export default App;
