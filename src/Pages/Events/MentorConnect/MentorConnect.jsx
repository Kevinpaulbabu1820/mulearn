import React, { useState } from "react";
import styles from "./MentorConnect.module.css";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";



const MentorConnect = () => {
  const data = require("./data/data.json");
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className={styles.card_description}>
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className={styles.readhide}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span>µLearn Mentor</span> Connect.
              </p>
              <p className={styles.fv_tagline}>
                GTech μLearn presents Mentor Connect 👨🏽‍🏫, an original initiative
                as part of Weekly Twitch. Occurring every Friday at 7pm, this
                initiative will give members an opportunity to interact, learn,
                and explore their interests with mentors from the Industry.
              </p>
            </div>
            <div className={styles.fv_images}>
              <img
                src="/assets/events/mentorconnect/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                {" "}
                <span>Events </span> On Mentor Connect
              </p>
              <p className={styles.sv_tagline}>
                Listed below are upcoming and previously conducted events for
                the mentor connect sessions.
              </p>
            </div>
            <div className={styles.sv_cards_container}>
              {data
                .slice(0)
                .reverse()
                .map((event) => (
                  <div className={styles.sv_cards}>
                    <div className={styles.card}>
                      <img
                        src={event.image}
                        alt=""
                        className={styles.card_img}
                      />
                      <p className={styles.card_name}>{event.name}</p>

                      <ReadMore>{event.description}</ReadMore>
                      <p className={styles.card_date}>Happened On:{event.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default MentorConnect;
