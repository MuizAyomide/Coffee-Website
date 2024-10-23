import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review">

      <h2>
        Reviews <img src="cup.png" alt="" />
      </h2>
      <p>What other people are saying!</p>
      <div className="review-list">
        <div className="reviews">
          <p>
            "Indulge in the sublime experience of Coffee Borcelle, where every
            sip is a journey to flavor paradise. Crafted with precision, our
            rich blends ignite the senses and redefine coffee appreciation."
          </p>
          <span>@ElonMusk</span>
        </div>
        <div className="reviews">
          <p>
            "Discover a world of taste with Coffee Brocelle. Each cup is a
            masterpiece, blending aromas and flavors that dance on your palate.
            Join us in celebrating coffee at its finest."
          </p>
          <span>@JeffBezos</span>
        </div>
        <div className="reviews">
          <p>
            "Discover a world of taste with Coffee Brocelle. Each cup is a
            masterpiece, blending aromas and flavors that dance on your palate.
            Join us in celebrating coffee at its finest."
          </p>
          <span>@MrBeast</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
