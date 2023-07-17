import React from "react";
import Image from "next/image";
import Style from "./footer.module.css";
import Github from "../../images/github.png";
import Facebook from "../../images/facebook.png";
import Google from "../../images/google.png";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${Style.footer}`}>
      <div>
        <h3>Sumon Hossaim</h3>
      </div>
      <div>
        <p>Copyright © 2022 Sumon Hossain.All Rights reserved.</p>
      </div>
      <div className="flex items-center gap-5">
        <BiLogoLinkedin className="text-4xl" />
        <Image src={Github} alt={""} />
        <Image src={Facebook} alt={""} />
        <Image src={Google} alt={""} />
        <FaTwitter className="text-3xl" />
      </div>
    </div>
  );
};

export default Footer;
