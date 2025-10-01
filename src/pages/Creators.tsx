import { Button } from "antd";
import { PiRocketLaunchThin } from "react-icons/pi";
import avatar from "../assets/Avatar.png";
import { memo } from "react";

const creators = [
  { rank: 1, name: "Keepitreal", sales: "34.53" },
  { rank: 2, name: "DigiLab", sales: "34.53" },
  { rank: 3, name: "GravityOne", sales: "34.53" },
  { rank: 4, name: "Juanie", sales: "34.53" },
  { rank: 5, name: "BlueWhale", sales: "34.53" },
  { rank: 6, name: "Mr Fox", sales: "34.53" },
  { rank: 7, name: "Shroomie", sales: "34.53" },
  { rank: 8, name: "Robotica", sales: "34.53" },
  { rank: 9, name: "RustyRobot", sales: "34.53" },
  { rank: 10, name: "Animakid", sales: "34.53" },
  { rank: 11, name: "Dotgu", sales: "34.53" },
  { rank: 12, name: "Ghiblier", sales: "34.53" },
];

const Creator = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="mb-3 text-3xl sm:text-4xl font-semibold text-white">
              Top Creators
            </h2>
            <p className="text-base sm:text-lg text-white/80">
              Checkout Top Rated Creators On The NFT Marketplace
            </p>
          </div>

          <div className="hidden md:block">
            <Button
              type="primary"
              size="large"
              style={{
                border: "1px solid #A259FF",
                background: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                borderRadius: "20px",
                height: "50px",
                width: "200px",
              }}
            >
              <PiRocketLaunchThin className="text-lg" />
              <span className="text-base font-medium">View rankings</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]">
          {creators.map((creator) => (
            <div
              key={creator.rank}
              className="relative flex w-full max-w-[315px] h-[100px] items-center gap-4 rounded-3xl bg-[#3B3B3B] px-4 py-3 
                 sm:h-[238px] sm:max-w-[240px] sm:flex-col sm:justify-center sm:gap-0 sm:p-6"
            >
              <div
                className="absolute left-3 top-3 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#2B2B2B] text-[11px] text-white/60 
                      sm:left-5 sm:top-5 sm:h-[30px] sm:w-[30px] sm:text-sm"
              >
                {creator.rank}
              </div>

              <div
                className="h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full 
                      sm:mb-5 sm:h-[120px] sm:w-[120px]"
              >
                <img
                  src={avatar}
                  alt={creator.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="flex flex-1 flex-col justify-center 
                      sm:items-center sm:text-center"
              >
                <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-xl">
                  {creator.name}
                </h3>
                <p className="text-xs text-white/60 sm:text-sm">
                  <span className="text-white/40">Total Sales: </span>
                  <span className="text-white/80">{creator.sales} ETH</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button
            type="primary"
            size="large"
            style={{
              border: "1px solid #A259FF",
              background: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              borderRadius: "20px",
              height: "50px",
              width: "200px",
            }}
          >
            <PiRocketLaunchThin className="text-lg" />
            <span className="text-base font-medium">View rankings</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Creator);
