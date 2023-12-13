import project1 from "../../assets/Project1_InventoryPortal.png";
import project2 from "../../assets/Project2_ElectricalLoadForecasting.png";
import project3 from "../../assets/Project3_MovieRecommendation.png";
import project4 from "../../assets/Project4_GambitoR.png";

const project_data = [
  {
    id: 1,
    title: "Inventory Management Portal",
    description: ` Digitalize the Tinkering Lab's inventory management for its extensive asset collection. Led a 10-member team to design user flows, craft 50+ wireframes, and develop a web-app based on MVC model and MERN Stack. Launched a robust portal managing a 30+ million-worth inventory used by 30+ Lab members effectively.`,
    tags: ["Nodejs", "Reactjs", "SQL", "Docker"],
    image: project1,
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
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: `Build a movie recommendation system, developing a user-centric web app for personalized movie suggestions. Single-handedly designed and constructed a web application with content-based filtering for dynamic movie recommendations. Delivered a user-engaging web app, offering real-time movie recommendations tailored to each user's watch history.`,
    tags: ["Content-based filtering", "Nodejs", "Reactjs", "SQL"],
    image: project3,
  },
  {
    id: 4,
    title: "Technical Lead at GambitoR",
    description: `Led a 10+ member team to build a registration portal for a nationwide exam targeting students from classes 9th to 12th. The web portal efficiently handled a traffic of 1000+ users and facilitated the seamless registration of over 5000 participants, effectively catering to their needs throughout the event.`,
    tags: ["Product Management", "Problem Solving", "MERN-Stack"],
    image: project4,
  },
];

export default project_data;
