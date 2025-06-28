import type { ReactNode } from "react";
import Navbar from "../organisms/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-20 px-4">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        &copy; 2025 TicketOnline. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default MainLayout;