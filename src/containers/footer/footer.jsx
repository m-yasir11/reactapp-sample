import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Chentrappinni,Thrissur All Rights reserved</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get In Touch</h4>
          <p>Chentrappinni,Thrissur 680687</p>
          <p>000178-7745637</p>
          <p>info@gpt3.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p> 2024 GPT3,All right reserved.</p>
      </div>
    </div>
  );
};

export default footer;
