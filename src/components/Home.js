import React from "react";
import "../styles/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/SENG_2020_3000x1200_r5._CB417923090_.jpg"
        alt="Amazon"
        className="home__image"
      />
      {/* Product props: id, image, title, price, rating  */}
      <div className="home__row">
        <Product
          id={1}
          title="Jawline Exerciser Jaw, Face, and Neck Exerciser - Define Your Jawline, Slim and Tone Your Face, Look Younger and Healthier - Helps Reduce Stress and Cravings - Facial Exerciser"
          image="https://m.media-amazon.com/images/I/31d6-o+ZDvL._AC_SL520_.jpg"
          rating={1}
          price={29.95}
        />
        <Product
          id={1}
          title="Sennheiser PXC 550-II Wireless – NoiseGard Adaptive Noise Cancelling, Bluetooth Headphone with Touch Sensitive Control and 30-Hour Battery Life"
          image="https://images-na.ssl-images-amazon.com/images/I/61CMr-EjHPL._AC_SX679_.jpg"
          rating={5}
          price={270.95}
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          title="Mr. Robot, Season 1. A cyber-security engineer by day and vigilante hacker by night."
          image="https://m.media-amazon.com/images/I/81zADcR4oXL._AC_UY218_.jpg"
          rating={4}
          price={9.99}
        />
        <Product
          id={1}
          title="AK-47 Semi Auto Rifle 7.62x39mm Barrel 30 Round Detachable Box Magazine Stamped Receiver Under Folder Stock Matte Black Finish"
          image="https://www.cheaperthandirt.com/dw/image/v2/BDCK_PRD/on/demandware.static/-/Sites-ctd-master-catalog/default/dw99b3ddf7/large/106968.jpg?sw=600&sh=600"
          rating={2}
          price={770.95}
        />
        <Product
          id={1}
          title="Meditations: A New Translation by Marcus Aurelius and Gregory Hays"
          image="https://m.media-amazon.com/images/I/61h98jZnUQL._AC_UY218_.jpg"
          rating={5}
          price={7.99}
        />
      </div>
      <div className="home__row">
        <Product
          id={1}
          title="Acer EI431CR Pbmiiipx 43 1800R Curved DWFHD (3840 x 1200) VA Gaming Monitor with AMD Radeon FreeSync Technology, 120Hz, VESA Certified DisplayHDR400, DCI-P3 (Display Port & 3 x HDMI Ports)"
          image="https://images-na.ssl-images-amazon.com/images/I/61HSjYkbHZL._AC_SX679_.jpg"
          rating={5}
          price={744.63}
        />
      </div>
    </div>
  );
}
