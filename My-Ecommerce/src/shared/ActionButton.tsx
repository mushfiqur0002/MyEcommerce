import React from "react";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
    to: string;
}

// Interactive button
const ActionButton = ({children, to}: Props) => {
  return (
    <Link to = {to} className ="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
      {children}
    </Link>
  );
}

export default ActionButton