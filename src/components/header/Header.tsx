import { Button } from "antd";
import { memo } from "react";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

export const Header = memo(() => {
  return (
    <div className="bg-slate-600 h-[100px] flex justify-center items-center">
      <div className="flex items-center justify-evenly gap-[430px]">
        <div className="flex items-center ">
          <BiStoreAlt
            style={{ width: "32px", height: "32px", color: "#A259FF" }}
          />
          <p className="font-bold text-white ml-3">NFT Marketplace</p>
        </div>
        <div className="flex items-center justify-center">
          <nav className="flex items-center justify-center gap-[50px] text-white">
            <ul>
              <li>Marketplace</li>
            </ul>
            <ul>
              <li>Rankings</li>
            </ul>
            <ul>
              <li>Connect a wallet</li>
            </ul>
          </nav>
          <div className="ml-[30px]">
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
                height: "40px"
              }}
            >
              <AiOutlineUser />
              <span className="text-l">sign up</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
