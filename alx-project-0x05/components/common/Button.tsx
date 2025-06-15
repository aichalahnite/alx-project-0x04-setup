// components/common/Button.tsx
import React from "react";

interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string; // e.g., "red", "blue", etc.
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor,
  onClick,
}) => {
  const bgClass = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
  }[buttonBackgroundColor] || "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      onClick={onClick}
      className={`${bgClass} text-white font-semibold py-2 px-6 rounded-full text-sm transition duration-300 shadow-md hover:scale-105`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
