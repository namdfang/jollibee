import React from "react";
import Navbar from "../../components/Navbar/Navbar";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar>{children}</Navbar>
    </div>
  );
}
