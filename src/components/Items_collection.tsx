import React from 'react';
import { ArrowRight, MinusCircle } from 'lucide-react';

interface Item {
  name: string; // Assuming 'name' is a string
  // Add other properties if 'item' has more fields
}

interface RectangleProps {
  item: Item;
}

function Rectangle({ item }: RectangleProps) { // Use RectangleProps to define prop types
  return (
    <div className="max-w-[50%] sm:max-w-[40%] relative shadow-lg rounded border bg-white overflow-hidden m-2 p-4 transition-transform duration-300 hover:scale-105">
      <span className="absolute inset-0"></span>
      <p className="text-left">{item.name}</p>
      <div className="absolute top-1 right-1 flex space-x-2 items-center">
        <MinusCircle className="cursor-pointer" size={20} />
        <ArrowRight className="cursor-pointer" size={20} />
      </div>
    </div>
  );
}

function YourComponent({ files }: { files: Item[] }) { // Specify the type of 'files' prop
  return (
    <div className="flex flex-wrap">
      {files.map((item, index) => (
        <Rectangle key={index} item={item} />
      ))}
    </div>
  );
}

export default YourComponent;
