````markdown
# React Weather App

A responsive React weather dashboard that displays current weather conditions and forecasts for major Iranian cities. This project is a front-end prototype using static mock data – perfect for demonstrating component-based architecture, state management, and responsive design.

## Features

- **City Weather Search** – Search for cities like Tehran, Gorgan, Mashhad, Esfahan, Shiraz, or Tabriz.
- **Real-time Feedback** – Displays temperature, weather description, and an error modal if the city is not found.
- **Hourly & Daily Forecast** – Placeholder cards for future API integration (currently static).
- **Glassmorphism UI** – Modern semi-transparent design with smooth animations and hover effects.
- **Fully Responsive** – Optimized for desktop, tablet, and mobile devices (max-width breakpoints at 768px and 550px).

## Tech Stack

- **React** (with Hooks: `useState`)
- **CSS3** (custom grid/flex layouts, keyframe animations, media queries)
- **No external libraries** – pure React + CSS for lightweight performance.

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/MaedehSKh80/ReactWeatherApp
   cd ReactWeatherApp
   ```

1. Install dependencies:
   ```bash
   npm install
   ```
1. Start the development server:
   ```bash
   npm start
   ```
1. Open http://localhost:3000 in your browser.

Usage Instructions

· Type a city name (e.g., tehran, mashhad) into the search field and click the search button.
· The main card will update with the city’s temperature and description.
· If the city is not in the predefined list, a modal will appear – click ok! to close it.
· The hourly and daily sections are static placeholders (ready for live API data).

Project Structure

```
src/
├── components/
│   └── NoCity/
│       └── NoCity.jsx       (error modal component)
├──src/
│    └── App.jsx                  (main component with state & mock data)
│    ├── main.jsx
│    └── App.css                 (all styles, including glassmorphic footer)
├── index.css
└── index.html
```

Future Improvements

· Connect to a real weather API.
· Add dynamic hourly/daily forecasts.
· Implement loading spinners and better error handling.
· Write unit tests with React Testing Library.

Author

Developed by itsmaedehskh.ir – a front-end developer focused on clean code and modern UI/UX.

License

This project is for portfolio/demonstration purposes only. All weather data is fictional and stored locally in the component state.

---

Made with ❤️ – demonstrating React fundamentals and responsive design.

```

```
````
