import React from 'react';

interface HeadingProps {
  Title: string; // Explicitly define the type of 'Title' to be a string
}

const Heading: React.FC<HeadingProps> = ({ Title }) => {
  return (
    <div className='text-3xl font-bold font-serif p-2 '>
      {Title}
    </div>
  );
};

export default Heading;