import _WebServer from "../../assets/WebServerAlbum.png";
import _2048Game from "../../assets/2048GameAlbum.gif";
import _InventoryPortal from "../../assets/InventoryPortalAlbum.png";
import _ElectricalLoadForecasting from "../../assets/ElectricalLoadForecastingAlbum.png";
import _MovieRecommendation from "../../assets/MovieRecommendationAlbum.png";
import _GambitoR from "../../assets/GambitoRAlbum.png";

import _WebServer1 from "../../assets/WebServer_1.png"
import _WebServer2 from "../../assets/WebServer_2.png"
import _WebServer3 from "../../assets/WebServer_3.png"
import _WebServer4 from "../../assets/WebServer_4.png"
import _WebServer5 from "../../assets/WebServer_5.png"

import _2048Game1 from "../../assets/2048Game_1.png";
import _2048Game2 from "../../assets/2048Game_2.png";
import _2048Game3 from "../../assets/2048Game_3.png";

import inventory1 from "../../assets/Inventory_1.png";
import inventory2 from "../../assets/Inventory_2.png";
import inventory3 from "../../assets/Inventory_3.png";
import inventory4 from "../../assets/Inventory_4.png";
import inventory5 from "../../assets/Inventory_5.png";

import forecasting1 from "../../assets/Forecasting_1.png";
import forecasting2 from "../../assets/Forecasting_2.png";
import forecasting3 from "../../assets/Forecasting_3.png";
import forecasting4 from "../../assets/Forecasting_4.png";
import forecasting5 from "../../assets/Forecasting_5.png";
import forecasting6 from "../../assets/Forecasting_6.png";

import movie_recommendation1 from "../../assets/MovieRecommendation_1.png";
import movie_recommendation2 from "../../assets/MovieRecommendation_2.png";
import movie_recommendation3 from "../../assets/MovieRecommendation_3.png";
import movie_recommendation4 from "../../assets/MovieRecommendation_4.png";
import movie_recommendation5 from "../../assets/MovieRecommendation_5.png";

import gambitor1 from "../../assets/Gambitor_1.png";
import gambitor2 from "../../assets/Gambitor_2.png";
import gambitor3 from "../../assets/Gambitor_3.png";
import gambitor4 from "../../assets/Gambitor_4.png";
import gambitor5 from "../../assets/Gambitor_5.png";
import gambitor6 from "../../assets/Gambitor_6.png";
import gambitor7 from "../../assets/Gambitor_7.png";
import gambitor8 from "../../assets/Gambitor_8.png";

const project_data = [
  {
    id: 1,
    title: "C++: Cache-Optimized Multi-threaded Web Server",
    description: `Built a multithreaded web server using C++ with epoll for non-blocking asynchronous I/O to handle multiple client connections efficiently. Implemented a thread pool to distribute client requests across threads, optimizing concurrency and resource management. Integrated an LRU cache to store frequently accessed files, reducing disk I/O and improving response times. Achieved 1500+ requests per second during load testing with wrk, ensuring low latency and high performance.`,
    tags: ["C++", "Multithreading", "Network Programming", "Async I/0", "Web Caching"],
    image: _WebServer,
    imageList: [_WebServer1, _WebServer2, _WebServer3, _WebServer4, _WebServer5],
    link: "https://drive.google.com/file/d/1OU9xIbAL3c8geJTBBsvAbZdbngieDUCL/view",
  },
  {
    id: 2,
    title: "Multithreaded 2048 Game",
    description: `Developed a multithreaded 2048 game in C++ using Visual Studio, showcasing advanced multithreading principles and game state management. Utilized multithreading with distinct threads for input handling, game state updates, and display rendering, ensuring smooth and responsive gameplay. Implemented synchronization mechanisms with mutexes and condition variables, for safe and efficient thread communication and data consistency.`,
    tags: ["C++", "Multithreading", "Thread Synchronization"],
    image: _2048Game,
    imageList: [_2048Game, _2048Game1, _2048Game2, _2048Game3],
    link: "https://drive.google.com/file/d/1szXJOK5zrwTSlLZGRqXuinyeTmPzSgCv/view",
  },
  {
    id: 3,
    title: "Inventory Management Portal",
    description: ` Digitalize the Tinkering Lab's inventory management for its extensive asset collection. Led a 10-member team to design user flows, craft 50+ wireframes, and develop a web-app based on MVC model and MERN Stack. Launched a robust portal managing a 30+ million-worth inventory used by 30+ Lab members effectively.`,
    tags: ["Nodejs", "Reactjs", "SQL", "Docker"],
    image: _InventoryPortal,
    imageList: [inventory1, inventory2, inventory3, inventory4, inventory5],
    link: "https://drive.google.com/file/d/1Ud9F1De_xaknSYXGUc6fMjgP5pRULt1B/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Electrical Load Forecasting",
    description: `Develop an ML model for Electrical Load Forecasting to predict monthly load demand using historical data. Selected dataset to implement Holt-Winters Method and created user-friendly website for load forecasting. Achieved an accurate forecasting model with user-friendly web interface, yielding a remarkable 8.79% MAPE.`,
    tags: [
      "Machine Learning",
      "Holt-Winters Method",
      "Jupyter-Notebook",
      "Flask",
      "Reactjs",
    ],
    image: _ElectricalLoadForecasting,
    imageList: [
      forecasting1,
      forecasting2,
      forecasting3,
      forecasting4,
      forecasting5,
      forecasting6,
    ],
    link: "https://drive.google.com/file/d/1836eb0EcDaHpnHZd4XgiBDtU8X6-vUzn/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Movie Recommendation System",
    description: `Build a movie recommendation system, developing a user-centric web app for personalized movie suggestions. Single-handedly designed and constructed a web application with content-based filtering for dynamic movie recommendations. Delivered a user-engaging web app, offering real-time movie recommendations tailored to each user's watch history.`,
    tags: ["Content-based filtering", "Nodejs", "Reactjs", "SQL"],
    image: _MovieRecommendation,
    imageList: [
      movie_recommendation1,
      movie_recommendation2,
      movie_recommendation3,
      movie_recommendation4,
      movie_recommendation5,
    ],
    link: "https://drive.google.com/file/d/1IlJtrjR_NX0fPWyCgGXAr_zoix2wqA3n/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Technical Lead at GambitoR",
    description: `Led a 10+ member team to build a registration portal for a nationwide exam targeting students from classes 9th to 12th. The web portal efficiently handled a traffic of 1000+ users and facilitated the seamless registration of over 5000 participants, effectively catering to their needs throughout the event.`,
    tags: ["Product Management", "Problem Solving", "MERN-Stack"],
    image: _GambitoR,
    imageList: [
      gambitor1,
      gambitor2,
      gambitor3,
      gambitor4,
      gambitor5,
      gambitor6,
      gambitor7,
      gambitor8,
    ],
  },
];

export default project_data;
