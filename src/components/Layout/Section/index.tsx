import React from 'react';

interface Props {
  className?: string;
}

const Section: React.FC<Props> = ({ children, className }) => {
  return <section className={`p-20 w-full ${className}`}>{children}</section>;
};

export default Section;
