import { CSSProperties, FC } from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { imgs } from "@/data/data";

const contentStyle: CSSProperties = {
  height: "40rem",
  width: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const ImgSlider: FC = () => (
  <>
    <div className="mt-10">
      <h6 className="text-5xl py-5 text-center">Carousel</h6>
      <Carousel
        autoplay
        className="w-3/4 flex items-center justify-center max-w-full mx-auto bg-red-400"
      >
        {imgs.map((img) => (
          <div key={img.id} className="w-full">
            <Image src={img.img} alt={""} style={contentStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  </>
);

export default ImgSlider;
