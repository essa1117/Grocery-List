import React from "react";
import "./css/footer.css";
interface item {
  id: number;
  text: string;
  checked: boolean;
}
interface props {
  items: item[];
}

const Footer = ({ items }: props) => {
  return (
    <footer>
      --
      {" " + items.length}
      {items.length === 1 ? " Item" : " Items"} Added --
    </footer>
  );
};

export default Footer;
