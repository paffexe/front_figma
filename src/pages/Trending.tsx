import { memo } from "react";

import MainImg from "../assets/card_main_img.png";
import SecondImg from "../assets/card_secondary_img.png";
import avatar from "../assets/icon.png";

const Trending = () => {
  return (
    <section className="bg-[#2B2B2B] flex items-center justify-center px-6 py-16 md:px-12 lg:px-20">
      <div className="w-full max-w-[1280px]">
        <div className="mb-12 text-center md:text-left">
          <h2 className="mb-4 font-sans text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Trending Collection
          </h2>
          <p className="font-sans text-base text-white md:text-lg lg:text-xl">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img
                src={MainImg}
                alt="Collection 1"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 1 - 1"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 1 - 2"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="flex items-center justify-center rounded-3xl bg-[#A259FF] aspect-square">
                <span className="font-mono text-lg font-bold text-white md:text-xl">
                  1025+
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-white md:text-2xl">
                DSGN Animals
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Artist 1"
                  className="h-6 w-6 rounded-full"
                />
                <span className="font-sans text-sm text-white md:text-base">
                  Mr Fox
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img
                src={MainImg}
                alt="Collection 2"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 2 - 1"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 2 - 2"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="flex items-center justify-center rounded-3xl bg-[#A259FF] aspect-square">
                <span className="font-mono text-lg font-bold text-white md:text-xl">
                  500+
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-white md:text-2xl">
                Magic Mushrooms
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Artist 2"
                  className="h-6 w-6 rounded-full"
                />
                <span className="font-sans text-sm text-white md:text-base">
                  Shroomie
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4 overflow-hidden rounded-3xl">
              <img
                src={MainImg}
                alt="Collection 3"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 3 - 1"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={SecondImg}
                  alt="Collection 3 - 2"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="flex items-center justify-center rounded-3xl bg-[#A259FF] aspect-square">
                <span className="font-mono text-lg font-bold text-white md:text-xl">
                  300+
                </span>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-semibold text-white md:text-2xl">
                Disco Machines
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt="Artist 3"
                  className="h-6 w-6 rounded-full"
                />
                <span className="font-sans text-sm text-white md:text-base">
                  BeKind2Robots
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Trending);
