import React from "react";

import { ButtonProps } from "../interface/button.interface";

const Button: React.FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default Button;

