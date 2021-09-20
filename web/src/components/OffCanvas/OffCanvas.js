import React from "react";

const OffCanvas = ({ children, offcanvasOpen, ...props }) => {
  if (typeof window !== `undefined`) {
    if (offcanvasOpen) {
      document.body.style.overflow = "hidden";
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.getElementsByTagName("html")[0].style.overflow = "";
    }
  }

  return (
    <nav
      className={`bg-white fixed top-0 left-0 w-full h-screen pt-14 pb-40 px-6 z-10 overflow-y-scroll transform transition-transform duration-500 ease-in-out ${
        offcanvasOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      {...props}
    >
      {children}
    </nav>
  );
};

export default OffCanvas;
