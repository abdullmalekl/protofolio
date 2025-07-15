import React from "react";

const CertificateCard = ({ title, image }) => {
  return (
    <div id='Ccards' className="bg-white rounded-4xl shadow-md p-4 w-full transition hover:shadow-lg">
        <h2 id="cardTitle" className=" font-semibold text-gray-800 text-center">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-contain"
      />
      
    </div>
  );
};

export default CertificateCard;