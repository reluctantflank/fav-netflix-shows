import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";

const App = () => (
    <>
  <h1 className="headingStyle"> My Top 5 Netflix Shows</h1>
    {sdata.map((value) => {

console.log(value);
return (
  <Card 
  key = {value.id}
  imgSrc = {value.imgSrc}
  category = {value.category}
  title = {value.title}
  link = {value.link} /> 
);
})}
  </>
)

export default App;