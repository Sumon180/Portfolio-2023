import { CgSandClock } from "react-icons/cg";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Card = () => {
  return (
    <div className="my-20">
      <h1 className=" text-center mb-5">Card</h1>
      <div className="shadow-lg flex items-center justify-center w-[850px] max-w-full p-10 mx-auto border">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-xl font-bold">Welcome</h1>
          <p className="text-center my-5 text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            perferendis sequi fugiat error! Accusantium incidunt explicabo
            culpa, fuga.
          </p>
          <div className="w-full">
            <div className="flex flex-col gap-3 md:gap-5 px-2 py-1 md:py-5 border w-full my-4">
              <div className="md:flex md:items-center md:justify-center gap-10">
                <div className="flex items-center xxs:justify-center gap-1">
                  <CgSandClock />
                  <span>30 Mins</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <AiTwotoneCalendar />
                  <p>
                    DAte: 20.feb.2023 <span>[12:30AM - 1:30AM]</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MdLocationOn />
                <span>
                  AINCODER developer Foridpur, Dhaka, 80333 Bangladesh
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border w-full mb-2">
              AAAAA
            </div>
            <div className="flex items-center justify-center border w-full">
              Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
