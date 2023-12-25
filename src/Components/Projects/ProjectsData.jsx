import project1 from "../../assets/Project1_InventoryPortal.png";
import project2 from "../../assets/Project2_ElectricalLoadForecasting.png";
import project3 from "../../assets/Project3_MovieRecommendation.png";
import project4 from "../../assets/Project4_GambitoR.png";

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
    title: "Inventory Management Portal",
    description: ` Digitalize the Tinkering Lab's inventory management for its extensive asset collection. Led a 10-member team to design user flows, craft 50+ wireframes, and develop a web-app based on MVC model and MERN Stack. Launched a robust portal managing a 30+ million-worth inventory used by 30+ Lab members effectively.`,
    tags: ["Nodejs", "Reactjs", "SQL", "Docker"],
    image: project1,
    imageList: [inventory1, inventory2, inventory3, inventory4, inventory5],
  },
  {
    id: 2,
    title: "Electrical Load Forecasting",
    description: `Develop an ML model for Electrical Load Forecasting to predict monthly load demand using historical data. Selected dataset to implement Holt-Winters Method and created user-friendly website for load forecasting. Achieved an accurate forecasting model with user-friendly web interface, yielding a remarkable 8.79% MAPE.`,
    tags: [
      "Machine Learning",
      "Holt-Winters Method",
      "Jupyter-Notebook",
      "Flask",
      "Reactjs",
    ],
    image: project2,
    imageList: [
      forecasting1,
      forecasting2,
      forecasting3,
      forecasting4,
      forecasting5,
      forecasting6,
    ],
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: `Build a movie recommendation system, developing a user-centric web app for personalized movie suggestions. Single-handedly designed and constructed a web application with content-based filtering for dynamic movie recommendations. Delivered a user-engaging web app, offering real-time movie recommendations tailored to each user's watch history.`,
    tags: ["Content-based filtering", "Nodejs", "Reactjs", "SQL"],
    image: project3,
    imageList: [
      movie_recommendation1,
      movie_recommendation2,
      movie_recommendation3,
      movie_recommendation4,
      movie_recommendation5,
    ],
  },
  {
    id: 4,
    title: "Technical Lead at GambitoR",
    description: `Led a 10+ member team to build a registration portal for a nationwide exam targeting students from classes 9th to 12th. The web portal efficiently handled a traffic of 1000+ users and facilitated the seamless registration of over 5000 participants, effectively catering to their needs throughout the event.`,
    tags: ["Product Management", "Problem Solving", "MERN-Stack"],
    image: project4,
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
