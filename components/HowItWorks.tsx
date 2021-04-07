import React from 'react';

const HowItWorks = () => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12 transform hover:-translate-y-5 hover:scale-110">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed">Select Fact Type.</p>
          </div>
        </div>
        <div className="flex relative pb-12 transform hover:-translate-y-5 hover:scale-110">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Input number or select date if fact type is date.</p>
          </div>
        </div>
        <div className="flex relative pb-12 transform hover:-translate-y-5 hover:scale-110">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed">Click On Get Facts.</p>
          </div>
        </div>
        <div className="flex relative transform hover:-translate-y-5 hover:scale-110">
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
            <p className="leading-relaxed">View facts and repeat step for other awesome facts.</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="/i6.jpg" alt="step" />
    </div>
  </div>
</section>

  );
}

export default HowItWorks;
