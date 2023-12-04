import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function DigiIntegration() {
  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".digi-nav-control .swiper-button-next",
      prevEl: ".digi-nav-control .swiper-button-prev",
    },
  };
  return (
    <section
      className="digi-integration bg-dark position-relative"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center bottom",
      }}
    >

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="int-icons position-relative">
              <ul className="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img src="/digital-marketing/amazon-logo.png" alt="icon" width={70} />
                </li>
                <li>
                  {<img src="/digital-marketing/shopify.png" alt="icon" width={50} />}
                </li>
                <li>
                  <img src="/digital-marketing/namshi.jpeg" alt="icon" width={50} />
                </li>
                <li>
                  <img src="/digital-marketing/noon.png" alt="icon" width={45} style={{ borderRadius: "20px" }} />
                </li>
                <li>
                  <img src="/digital-marketing/ebay.png" alt="icon" width={50} />
                </li>
                <li>
                  <img
                    src="/digital-marketing/instashop.png"
                    alt="icon"
                    width={70}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div>
                <span className="span-arrow text-pink">
                  List your products anywhere
                </span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h2 className="mb-4">
                Start Selling Your Products Across All Stores
              </h2>
              <div>
                <Link href="/contact-us">
                  <a className="btn rounded-pill btn-primary me-3 mb-3">
                    {" "}
                    Get Started
                  </a>
                </Link>
                <Link href="/integrations">
                  <a className="btn rounded-pill btn-outline-light mb-3">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="int-icons position-relative">
              <ul className="list-unstyled mb-0 d-none d-lg-block">
                <li>
                  <img src="/digital-marketing/centrepoint.png" alt="icon" width={35} />
                </li>
                <li>
                  <img src="/digital-marketing/carrefour.png" alt="icon" width={45} style={{ borderRadius: "25px" }} />
                </li>
                <li>
                  <img src="/digital-marketing/etsy.png" alt="icon" width={55} />
                </li>
                <li>
                  <img src="/digital-marketing/int-icon/inst.svg" alt="icon" />
                </li>
                <li>
                  <img src="/digital-marketing/int-icon/star.svg" alt="icon" />
                </li>
                <li>
                  <img src="/digital-marketing/int-icon/fa.svg" alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
