import React from "react";
import "./possibility.css";
import possibilityimage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimage} alt='possibility.png' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request for early access</h4>
        <h1 className='gradient__text'>
          The Possibilities are Beyond Your imagination
        </h1>
        <p>
          this site is dedicated to all the people who loves me dont spread hate
          niggas just peace out mtf thats all i want to say to you guys
        </p>
        <h4>Request for Early Access</h4>
      </div>
    </div>
  );
};

export default Possibility;
