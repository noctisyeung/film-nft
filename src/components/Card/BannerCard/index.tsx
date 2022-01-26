import { ITDOG_ICON } from '@utils/importService';
import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
}

const BannerCard: React.FC<Props> = ({ title, description, image }) => {
  return (
    <div className="flex items-center">
      <div className="rounded-xl shadow-xl bg-white px-5 pb-16 w-[420px]">
        <img
          className="-mt-6 w-full h-[280px] rounded-lg shadow-xl object-cover object-top"
          src={image}
          alt="banner"
        />
        <div className="mt-4">
          <p className="font-semibold text-2xl mb-2">{title}</p>
          <p className="font-light text-xl leading-8">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
