import React from "react";
import Card from "./Card";

/**
 *
 * JSX RULES
 * 1-attributes (<h1 attribute="value"> )
 * attributes in react are in camelCase (check the docs)
 * EX : className not class
 *
 *2-Components must return elements wrapped in ONE wrapper element
 *
 * 3-All Self closing tags must have the "/" at the end <self-colosed-tag />
 * EX : <input /> , <img /> , <br /> , .....
 *
 * 4-we can write javascript in jsx using { }
 * EX <h1> { myVariableName } </h1>
 * NB : Html elements dont take javascript objects (throw an error)
 *
 * 5-we can use inline styling in JSX
 *
 * ex : <h1 style={ {color : "red" , fontSize : "18px" , margin : 10}  }  > Hello world </h1>
 * NB:
 * style attribute take only javascript object
 * all css propreys must be in camelCase
 * all css values must be in string or number
 * INLINE STYLING is not always a best practice
 */

const listSkills = [
  {
    title: "HTML",
    desc: "HTML is programming language of web ....",
    isHard: false,
  },
  { title: "CSS", desc: "css is design language of web ....", isHard: false },
  {
    title: "javaScript",
    desc: "javaScript is programming language of web ....",
    isHard: true,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      {/* { Card({ title: "CARD", desc: "EXAMPLE" , name:"Hello" }) } */}
      <Card title="CARD" desc="EXAMPLE" name="Hello" />

      <h2> Skills </h2>
      <div>
        {listSkills.map((skill) => {
          return (
            <Card title={skill.title} desc={skill.desc} isHard={skill.isHard} />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
