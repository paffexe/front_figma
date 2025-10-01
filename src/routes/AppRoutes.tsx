import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Items = lazy(() => import("../pages/Items"));

const AppRoutes = () => {
  return (
    <div>
      {useRoutes([
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "items",
              element: <Items />,
            },
          ],
        },
      ])}
    </div>
  );
};

export default memo(AppRoutes);
