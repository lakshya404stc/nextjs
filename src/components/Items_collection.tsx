import React from 'react';
import { ArrowRight, MinusCircle } from 'lucide-react'; // Assuming you have installed react-feather for the delete and arrow icons

function Rectangle({ item }) {
  return (
    <div className="max-w-[50%] sm:max-w-[40%] relative shadow-lg rounded border bg-white overflow-hidden m-2 p-4 transition-transform duration-300 hover:scale-105">
      <span className="absolute inset-0"></span> {/* To ensure the hover effect covers the entire box */}
      <p className="text-left">{item.name}</p>
      <div className="absolute top-1 right-1 flex space-x-2 items-center">
        <MinusCircle className="cursor-pointer" size={20} /> {/* Delete Icon */}
        <ArrowRight className="cursor-pointer" size={20} /> {/* Arrow Icon */}
      </div>
    </div>
  );
}

function YourComponent({ files }) {
  return (
    <div className="flex flex-wrap">
      {files.map((item, index) => (
        <Rectangle key={index} item={item} />
      ))}
    </div>
  );
}

export default YourComponent;
