import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition"
    >
      {children}
    </button>
  );
};
export default Button;
