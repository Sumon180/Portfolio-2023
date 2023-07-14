import React from "react";
import Image from "next/image";
import Style from "./footer.module.css";
import Github from "../../images/github.png";
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";

const Footer = () => {
  return (
    <div className={`${Style.footer}`}>
      <div>
        <h3>Sumon Hossaim</h3>
      </div>
      <div className="flex items-center gap-5">
        <Image src={Github} alt={""} />
        <Image src={Facebook} alt={""} />
        <Image src={Google} alt={""} />
      </div>
    </div>
  );
};

export default Footer;
