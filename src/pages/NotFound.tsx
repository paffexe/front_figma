import { memo } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2B2B2B] text-center px-4">
      <h1 className="text-7xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-white/70 mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Button
        type="primary"
        size="large"
        onClick={() => navigate("/")}
        style={{
          border: "1px solid #A259FF",
          background: "none",
          color: "#fff",
          borderRadius: "20px",
          height: "50px",
          width: "200px",
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default memo(NotFound);
