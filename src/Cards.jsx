import React from "react";

function Card(props) {
    return (<>
    <div className="cards">
    <div className="card">
      <img src= {props.imgSrc} className= "coverImg" alt="myPic"></img>
      <div className="cardInfo">
        <span className="cardCategory">{props.category}</span>
        <h3 className="cardTitle"> {props.title} </h3>
        <a href= {props.link} target="_blank"><button> Watch Now </button></a>
      </div>
    </div>
    </div>
    </>);
  }

  export default Card;