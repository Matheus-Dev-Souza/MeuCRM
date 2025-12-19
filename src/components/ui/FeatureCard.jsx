import React from 'react';

const FeatureCard = ({ icon, title, desc, color = 'indigo' }) => {
  const colorClasses = color === 'blue' 
    ? 'bg-blue-100 text-blue-600' 
    : 'bg-indigo-100 text-indigo-600';

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className={`p-4 rounded-full mb-6 w-fit ${colorClasses}`}>
        {icon}
      </div>
      <h3 className="font-bold text-indigo-950 text-xl mb-3">{title}</h3>
      <p className="text-gray-500 leading-snug">{desc}</p>
    </div>
  );
};

export default FeatureCard;