
import React from "react";
import { Link } from "react-router-dom";

interface NewsItemProps {
  title: string;
  description: string;
  location?: string;
  dates?: string;
  link?: string;
}

const NewsItem = ({ title, description, location, dates, link }: NewsItemProps) => {
  return (
    <div className="border-t border-noto-lightgray pt-4 pb-8">
      <h3 className="font-playfair text-xl mb-2">{title}</h3>
      <p className="text-noto-gray mb-3">{description}</p>
      
      {(location || dates) && (
        <div className="mb-3">
          {location && <p className="text-sm text-noto-gray">{location}</p>}
          {dates && <p className="text-sm text-noto-gray">{dates}</p>}
        </div>
      )}
      
      {link && (
        <Link to={link} className="text-sm inline-flex items-center hover-underline">
          More here
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default NewsItem;
