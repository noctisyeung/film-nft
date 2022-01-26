import BannerCard from '@components/Card/BannerCard';
import Layout from '@components/Layout';
import Button from '@components/Layout/Button';
import Section from '@components/Layout/Section';
import { ITDOG_ICON } from '@utils/importService';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Section className="bg-gray-100 min-h-screen h-full flex items-center">
        <div className="pt-10">
          <div className="w-1/2">
            <h2 className="text-5xl text-transparent font-bold leading-tight uppercase whitespace-pre-wrap bg-gradient-to-r to-sky-500 from-indigo-500 bg-clip-text">
              NFT FOR MY PHOTOGRAPHY! CREATIVE AND SPECIAL! EXPLORE AND GET ONE!
            </h2>
            <div className="w-1/2 pt-5">
              <p className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text leading-5">
                This project is to showcase the Web3 with NFT project. If your are interested to
                create one for you or your company, please contact me to help you.
              </p>
            </div>
            <div className="pt-10">
              <Button variant="outline" label="EXPLORE" />
            </div>
          </div>
        </div>
        <div>
          <BannerCard
            title="IT DOG"
            description="This cartoon dog is created by designer KAKA. Showing Noctis is a IT Dog"
            image={ITDOG_ICON}
          />
        </div>
      </Section>
    </Layout>
  );
};

export default HomePage;
