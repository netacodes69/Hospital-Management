import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="About ZeeCare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            ZeeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs.
          </p>
          <p>
            At ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness. We combine advanced
            medical technology with a human touch to create a healing
            environment that supports recovery and long-term health.
          </p>
          <p>
            Our mission is to redefine patient care through innovation,
            integrity, and excellence. From preventive screenings to specialized
            treatments, we strive to meet the highest standards in every aspect
            of healthcare delivery.
          </p>
          <p>
            Whether you're visiting for a routine checkup or ongoing treatment,
            ZeeCare is here to support you with empathy, professionalism, and
            commitment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
