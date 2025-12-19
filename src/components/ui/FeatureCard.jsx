import React from 'react';

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition text-left flex flex-col items-start hover:-translate-y-1 duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-snug">{desc}</p>
    </div>
  );
};

export default FeatureCard;