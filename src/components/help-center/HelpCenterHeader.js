import React from 'react';

const HelpCenterHeader = () => {
  return (
    <section
      className="page-header position-relative overflow-hidden ptb-120 bg-gradient"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom left",
      }}
    >
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-lg-8 col-12">
            <div className="text-center">
              <h1 className="display-5 fw-bold">Support</h1>
              <p className="lead">
                Seamlessly actualize client-based users after out-of-the-box
                value. Globally embrace strategic high-quality platforms before
                frictionless expertise.
              </p>

            </div>
          </div>
        </div>
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
      </div>
    </section>
  );
};

export default HelpCenterHeader;
