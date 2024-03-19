import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "from the came to the island wit their lts of money in the garbage box with an unlimited styles of fashion",
  },
  {
    title: "Become the tended active",
    text: "from the came to the island wit their lts of money in the garbage box with an unlimited styles of fashion",
  },
  {
    title: "Message or AM nothing",
    text: "from the came to the island wit their lts of money in the garbage box with an unlimited styles of fashion",
  },
  {
    title: "Really boy law county",
    text: "from the came to the island wit their lts of money in the garbage box with an unlimited styles of fashion",
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future Is Now And You Just Need To Realize it. Step Into Future
          today & Make it Happen
        </h1>
        <p>Request early access to get started </p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
