import { Button } from "antd";
import { memo } from "react";
import { PiRocketLaunchThin } from "react-icons/pi";

import Hero_bg from "../assets/hero_img.png";
import Hero_icon from "../assets/hero_icon.png";

const Hero = () => {
  return (
    <section className="bg-[#2B2B2B] min-h-screen flex items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-[1280px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Discover Digital Art & Collect NFTs
          </h1>

          <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#A259FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "20px",
                height: "60px",
                width: "244px",
              }}
            >
              <PiRocketLaunchThin className="text-xl" />
              <span className="text-lg font-medium">Get started</span>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="text-white font-bold text-2xl md:text-4xl font-mono">
                240k+
              </div>
              <div className="text-white/80 text-sm md:text-lg mt-1">
                Total Sale
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl md:text-4xl font-mono">
                100k+
              </div>
              <div className="text-white/80 text-sm md:text-lg mt-1">
                Auctions
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl md:text-4xl font-mono">
                240k+
              </div>
              <div className="text-white/80 text-sm md:text-lg mt-1">
                Artists
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-[#3B3B3B] rounded-3xl overflow-hidden w-full max-w-[510px] aspect-square flex flex-col sm: pb-[20px] ">
            <img
              src={Hero_bg}
              alt="Space Walking NFT"
              className="object-cover w-full h-3/4"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Space Walking
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img
                    src={Hero_icon}
                    alt="Animakid"
                    className="object-cover"
                  />
                </div>
                <span className="text-white/90 text-sm md:text-base ">
                  Animakid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
