import React from 'react';
import business_model from './img/Business-model_svg.png';
// import '../styles/vacancy_adding.scss';

function Business_model() {
  return (
    <section className="codesford">
      <div className="container">
        <div className="text-center">
          <h3 className="codesford__subheader">Business model</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="codesford__description font-weight-bold">EdTech + GameTech + HRTech = CodesFord</p>
            <p className="codesford__description">Our startup is at the junction of three technologies: EdTech,
              GameTech and HRTech.
              Despite the fact that a lot of useful elements will be free on our web site and inside in our mobile
              apps, our team plans to develop a commercial project.
              In this regard, we will be grateful to users for feedback and for orders for paid products, for example,
              Initial Professional Orientation,
              training interactive courses, assistance in finding your future job, and much more that you need</p>
          </div>
          <div className="col-md-6 pb-4">
            <img className="codesford__image" src={business_model} alt="business model" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Business_model;
