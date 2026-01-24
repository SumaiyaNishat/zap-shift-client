import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {userName, review: testimonial, user_photoURL} = review;
  return (
    <div className="card w-80 bg-base-100 shadow-md rounded-2xl p-6">
      {/* Quote Icon */}
      <div className="text-primary text-3xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* Text */}
      <p className="mb-6">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-10 rounded-full bg-primary">
            <img src={user_photoURL} alt="" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800">{userName}</h4>
          <p className="text-xs text-gray-400">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
