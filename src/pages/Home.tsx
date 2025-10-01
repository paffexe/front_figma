import { memo } from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import Creators from "./Creators";

export const Home = memo(() => {
  return (
    <div className=" bg-[#2B2B2B] ">
      <div className="container">
        <Hero />
        <Trending />
        <Creators/>
      </div>
    </div>
  );
});

export default Home