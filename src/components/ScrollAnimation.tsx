import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className=" w-[1100px] mx-auto">
      <h1 className="my-10 text-center">Animate On Scroll(AOS)</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-16">
        <div className="animation" data-aos="fade-up">
          Fade-up
        </div>

        <div className="animation" data-aos="fade-down">
          Fade-down
        </div>

        <div className="animation" data-aos="fade-right">
          Fade-right
        </div>

        <div className="animation" data-aos="fade-left">
          Fade-left
        </div>
        <div className="animation" data-aos="fade-up-right">
          Fade-up-right
        </div>
        <div className="animation" data-aos="fade-up-left">
          Fade-up-left
        </div>
        <div className="animation" data-aos="fade-down-right">
          Fade-down-right
        </div>
        <div className="animation" data-aos="fade-down-left">
          Fade-down-left
        </div>

        <div className="animation" data-aos="flip-right">
          Flip
        </div>
        <div className="animation" data-aos="flip-left">
          Flip-left
        </div>
        <div className="animation" data-aos="flip-up">
          Flip-up
        </div>
        <div className="animation" data-aos="flip-down">
          Flip-down
        </div>

        <div className="animation" data-aos="zoom-in">
          Zoom Animation
        </div>
        <div className="animation" data-aos="zoom-out">
          Zoom-out
        </div>
        <div className="animation" data-aos="zoom-in-up">
          Zoom-in-up
        </div>
        <div className="animation" data-aos="zoom-in-down">
          Zoom-in-down
        </div>
        <div className="animation" data-aos="zoom-in-left">
          Zoom-in-left
        </div>
        <div className="animation" data-aos="zoom-in-right">
          Zoom-in-right
        </div>
        <div className="animation" data-aos="zoom-out-up">
          Zoom-out-up
        </div>
        <div className="animation" data-aos="zoom-out-down">
          Zoom-out-down
        </div>
        <div className="animation" data-aos="zoom-out-right">
          Zoom-out-right
        </div>
        <div className="animation" data-aos="zoom-out-left">
          Zoom-out-left
        </div>
        <div className="animation" data-aos="fade-up" data-aos-duration="3000">
          Fade-up
        </div>
        <div
          className="animation"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Fade-down
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
