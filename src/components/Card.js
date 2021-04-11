import React from "react";

/**
 * Card is a javascript function ,
 *  so Card can have parameters
 *
 *
 */

// i will pass a object as parametre containing all wanting values
//a title and desc
const Card = (props) => {
  console.log(props);
  return (
    <div>
      <h2 className={props.isHard ? "red-text" : ""}>{props.title} </h2>
      <p>{props.desc} </p>
    </div>
  );
};

// Card({title : "HTML" , desc: "Hello word "})
//<Card />
export default Card;
