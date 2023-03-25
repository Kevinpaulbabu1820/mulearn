import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./News.css";

import NewsData from "./data/News";

import NewsImages from "../../Components/Gallery/NewsImages";
import TermsAndConditionsModal from "../../Components/TermsAndConditionsModel/TermsAndConditionsModal";


const News = () => {

  return (
    <>
      <Navbar />
      <div className="main_container">
        <div className="first_view_container">
          <div className="first_view">
            <div className="fv_texts">
              <p className="fv_heading">
                Welcome to <span>µLearn </span> News Gallery
              </p>
            </div>
            <div className="fv_images">
              <img
                src="/assets/gallery/news_frame.webp"
                alt=""
                className="fv_img"
              />
            </div>
          </div>
        </div>

        {/* Gallery Header */}
        <div className="second_view_container">
          <div className="second_view">
            <div className="sv_texts">
              <p className="sv_heading">
                <span>µLearn</span> News Gallery
              </p>
              <p className="sv_tagline">
                Beautiful memories often need to be documented, so that you
                could revisit them. These are some of the pictures from our
                events.
              </p>
            </div>
            {/* Gallery Body */}
            <NewsImages events={NewsData} />
          </div>
        </div>
      </div>
      <TermsAndConditionsModal />
      <Footer />
    </>
  );
};

export default News;
