import React, { MouseEventHandler } from 'react';

type Props = {
  Title: string;
  Content: string;
  Desciption: string; 
};

const StepCard: React.FC<Props> = ({ Title, Content, Desciption }) => {
  return (
    <li className='md:flex-1'>
      <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
        <span className='text-sm font-medium text-blue-600'>{Title}</span>
        <span className='text-xl font-semibold'>{Content}</span>
        <span className='mt-2 text-zinc-700'>{Desciption}</span>
      </div>
    </li>
  );
};

export default StepCard;
