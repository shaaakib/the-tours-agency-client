import React from 'react';
import Header from '../Page/Shared/Header/Header';
import Footer from '../Page/Shared/Footer/Footer';
import coverImage from '../assets/Rectangle-1.png';
import CardSlider from '../Page/Shared/CardSlider/CardSlider';
console.log(coverImage);

export default function Main() {
  return (
    <div
      className="h-screen w-screen bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${coverImage})`,
      }}
    >
      <Header />
      <div className="lg:grid grid-cols-[1fr_2fr]">
        <div></div>
        <div>
          <CardSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
}
