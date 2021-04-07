import React from "react";
import Hero from "../components/Hero";
import HowItWorks from '../components/HowItWorks';

const index = () => {
  return (
    <div className="font-mont">
      {/* <Navbar /> */}
      <Hero
      button= {true}
      text= ''
      title= 'Tumbers'
      />
      <HowItWorks />

    </div>
  );
};

export default index;
