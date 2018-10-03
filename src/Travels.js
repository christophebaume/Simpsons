import React from "react";
// src/Travels.js
import Travel from "./Travel"
const Travels = [
  {       
    destination : "Sydney ",
    country : " Australie ",
    photo : "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-363244__340.jpg" alt : "Sydney",
    distance : " 16950 km"
  },
  {
    destination : "Brasilia ",
    country : " Brésil ",
    photo : "https://cdn.pixabay.com/photo/2017/03/02/14/14/brasilia-2111416__340.jpg" alt : "Brasilia",
    distance : " 8725 km"
  },
  {
    destination : "Amsterdam",
    country : " Pays-Bas ",
    photo : "https://cdn.pixabay.com/photo/2016/09/04/10/24/amsterdam-1643644__340.jpg" alt : "Amsterdam",
    distance : "517 km "
  },
  {
    destination : "Toronto",
    country : " Canada ",
    photo : "https://cdn.pixabay.com/photo/2016/06/06/09/55/toronto-1439133__340.jpg" alt : "Toronto",
    distance : " 5997 km"
  },
  {
    destination : "Porto",
    country : " Portugal ",
    photo : "https://cdn.pixabay.com/photo/2017/01/11/18/04/porto-1972486__340.jpg" alt : "Porto",
    distance : "1584 km "
  },
];

const Travels = () =>(
  <div>
    {travels.map(travel =>(
    <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance/>
    ))}
  </div>
);

export default Travels;