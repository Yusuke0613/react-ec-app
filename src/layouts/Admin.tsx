import React, { ReactNode } from "react";


// components
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Headers/HeaderStats";
import Footer from "../components/Footers/FooterAdmin";


interface AdminTempleteProps {
  children?:ReactNode
}

const AdminTemplete: React.FC<AdminTempleteProps> = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-teal-400">
        {/* Header */}
        <Header />
        <div className="px-4 md:px-10 mx-auto w-full">
          {children}
          <Footer />
        </div>
        
      </div>
    </>
  );
}
export default  AdminTemplete 