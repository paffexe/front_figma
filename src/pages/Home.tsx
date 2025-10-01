import { memo } from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import Creators from "./Creators";

export const Home = memo(() => {
  return (
    <div className=" bg-[#2B2B2B] ">
      <div className="container">
        <p>Added fetched users from api and 404 page with footer 90+ ?</p>
        <Hero />
        <Trending />
        <Creators/>
      </div>
    </div>
  );
});

export default Home