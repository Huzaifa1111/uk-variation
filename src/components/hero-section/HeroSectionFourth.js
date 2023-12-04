/* eslint-disable @next/next/no-img-element */
import { FaRegCheckCircle } from "react-icons/fa";
import HeroTitle from "../common/HeroTitle";

const HeroSectionFourth = ({ bgDark }) => {
  return (
    <section
      className={`hero-section pt-60    ${bgDark ? "bg-gradient" : "bg-white"}`}
      style={{
        background: "url('/cyber_banner_img.png')",

      }}
    >
      <div className='container mt-5 pt-5 mt-md-0 mt-lg-0 pt-md-0 pt-lg-0'>
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-xl-5 col-lg-5">
            <div className="hero-content-wrap text-center text-xl-start text-lg-start">
              <HeroTitle
                title="Easy & Simple Ecommerce Solutions for Your Business"
                desc="Naxi.ae is online platform for wholesellers who wants to sell and ship their products to their customers directly."
              />
              <div className="hero-subscribe-form-wrap pt-4 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                <form
                  id="subscribe-form"
                  name="email-form"
                  className="hero-subscribe-form d-block d-lg-flex d-md-flex"
                >
                  <input
                    type="email"
                    className="form-control me-2"
                    name="Email"
                    data-name="Email"
                    placeholder="Enter Your Email Address"
                    id="email-address"
                    required={true}
                  />
                  <input
                    type="button"
                    value="Get Started"
                    data-wait="Please wait..."
                    className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                  />
                </form>
                <ul className="nav subscribe-feature-list mt-3">
                  <li className="nav-item">
                    <span className="ms-0">
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Free sign-up
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      User Friendly Portal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
            <div className="hero-img-wrap position-relative">
              {!bgDark && (
                <ul className="position-absolute animate-element parallax-element shape-service hide-medium">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/image-1.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/color-shape/feature-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/color-shape/feature-3.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-3"
                    />
                  </li>
                </ul>
              )}
              <div className="hero-img-wrap position-relative">
                <div className="hero-screen-wrap">
                  {/* <div className="phone-screen">
                    <img
                      src="/screen/phone-screen.png"
                      alt="hero"
                      className="position-relative img-fluid"
                    />
                  </div> */}
                  <div className="mac-screen">
                    <img
                      src="/pages-images/landing-1.png"
                      alt="hero "
                      className="position-relative img-fluid rounded-custom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFourth;
