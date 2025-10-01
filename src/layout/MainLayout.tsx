import { memo } from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
