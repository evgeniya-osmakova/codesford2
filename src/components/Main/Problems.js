import React from 'react';
import './Problems.scss';

function Problems() {
  return (
    <section className="user-problems">
      <div className="container">
        <div className="text-center">
          <h3 className="user-problems__subheader">Potentional issues of users</h3>
        </div>
        <div className="row">
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">01</div>
              <div className="user-problems__description">Difficult to find effective programming courses</div>
            </div>
          </div>
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">02</div>
              <div className="user-problems__description">Ordinary old courses</div>
            </div>
          </div>
          <div className="user-problems__problem col-md-4 pb-4">
            <div className="user-problems__background">
              <div className="user-problems__num">03</div>
              <div className="user-problems__description">Hard to find a job</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems;
