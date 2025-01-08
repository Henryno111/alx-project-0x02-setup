import React from "react";
import { CardProps } from "../../interfaces";


const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-slate-700 p-4 rounded-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;