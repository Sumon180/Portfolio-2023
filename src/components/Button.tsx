import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonClicked, selectButton } from "../reducer/buttonSlice";

const Button: FC = () => {
  const dispatch = useDispatch();
  const clicked = useSelector(selectButton);

  const handleClick = () => {
    dispatch(buttonClicked());
    console.log("Hi there, Redux is working fine");
  };

  return (
    <button
      onClick={handleClick}
      className={`${clicked ? " bg-red-400" : " bg-lime-500"}`}
    >
      {clicked ? "See Console!" : "Click me"}
    </button>
  );
};

export default Button;