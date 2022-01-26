import React from 'react';

interface Props {
  label?: string;
  variant?: 'fill' | 'outline';
}

const VARIANT_MAP = {
  fill: {
    button: 'bg-blue-500',
    span: 'text-white',
  },
  outline: {
    button: 'border-blue-500 bg-transparent border',
    span: 'text-blue-500',
  },
};

const Button: React.FC<Props> = ({ label, variant = 'fill' }) => {
  return (
    <button className={`${VARIANT_MAP[variant].button} py-1.5 px-6 rounded-lg`}>
      <span
        className={`${VARIANT_MAP[variant].span} text-sm font-semibold tracking-wide uppercase`}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
