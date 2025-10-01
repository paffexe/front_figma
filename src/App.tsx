import { memo } from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="">
      <AppRoutes />
    </div>
  );
};

export default memo(App);
