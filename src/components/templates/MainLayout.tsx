import type { ReactNode } from "react";
import Navbar from "../organisms/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="mt-20 px-4">{children}</main> {}
    </div>
  );
};

export default MainLayout;