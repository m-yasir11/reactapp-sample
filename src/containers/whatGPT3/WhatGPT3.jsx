import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div>
      <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
          <Feature
            title='What is GPT3'
            text='title is hard to understand in these days it may like pure property upside of groups and clubs that remains most of the scenarios in the current world issues the vessels are merged by two huge'
          />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>
            The Possibilities Are Beyond Our Imagination
          </h1>
          <p>Explore the library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature
            title='Chatbox'
            text='this is usefull for communicating with the consumers to maintain the legetimate service among the community'
          />
          <Feature
            title='Knowledgebase'
            text='for the implementation of knowled ge from the customers and the third party which have group of people'
          />
          <Feature
            title='Education'
            text='this page is dedicated to all the people who wants high determination to bring right society from the evils'
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
