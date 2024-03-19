import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's build something amazing with GPT3 Open AI
        </h1>
        <p>
          Yet bed any for traveling in your area contains some type of problems
          which causes extreme hot temperature other than relating the world
          famous monuments in the south india,Yes you can file a complaint
          against me and my educational qualification in our locality to bring
          victory to our home
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='People.img' />
          <p>1600 people accessed the website in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai.png' />
      </div>
    </div>
  );
};

export default Header;
