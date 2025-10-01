import { Button } from "antd";
import { memo } from "react";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="bg-[#2B2B2B] h-[100px] flex items-center">
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-6">
        <div className="flex items-center">
          <BiStoreAlt className="w-8 h-8 text-[#A259FF]" />
          <p className="font-bold text-white ml-3 text-lg">NFT Marketplace</p>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-white font-medium">
            <a href="#" className="hover:text-[#A259FF]">
              Marketplace
            </a>
            <a href="#" className="hover:text-[#A259FF]">
              Rankings
            </a>
            <a href="#" className="hover:text-[#A259FF]">
              Connect Wallet
            </a>
            <Link to={"users"} className="hover:text-[#A259FF]">
              Users
            </Link>
          </nav>

          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#A259FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              borderRadius: "15px",
              height: "44px",
              padding: "0 20px",
            }}
          >
            <AiOutlineUser className="text-[18px]" />
            <span className="text-base font-medium">Sign Up</span>
          </Button>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#2B2B2B] flex justify-around items-center py-3 border-t border-gray-700 z-50">
        <a href="#" className="flex flex-col items-center text-white">
          <BiStoreAlt className="w-6 h-6 text-[#A259FF]" />
          <span className="text-sm">Marketplace</span>
        </a>
        <a href="#" className="flex flex-col items-center text-white">
          <span className="text-sm">Rankings</span>
        </a>
        <a href="#" className="flex flex-col items-center text-white">
          <span className="text-sm">Wallet</span>
        </a>
        <a href="#" className="flex flex-col items-center text-white">
          <AiOutlineUser className="w-6 h-6" />
          <span className="text-sm">Account</span>
        </a>
      </nav>
    </header>
  );
});
