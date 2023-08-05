import { setColor } from "@/reducer/colorSlice";
import { RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { SketchPicker, ColorResult } from "react-color";
import { useDispatch, useSelector } from "react-redux";

const ColorPicker: React.FC = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const selectedColor = useSelector(
    (state: RootState) => state.color.selectedColor
  );
  const dispatch = useDispatch();

  const handleColorChange = (selectedColor: ColorResult) => {
    const newColor = selectedColor.hex;
    dispatch(setColor(newColor));
  };

  useEffect(() => {
    // Load the color from local storage when the component mounts
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  const handleTogglePicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative">
        <h2 className="font-bold mb-2 text-center text-5xl">Color Picker</h2>
        <div>
          <div
            className="w-full h-16 rounded-lg shadow-md mb-4 cursor-pointer"
            style={{ backgroundColor: selectedColor }}
          ></div>
          <button
            onClick={handleTogglePicker}
            className=" bg-gray-600 px-10 py-2 my-5"
          >
            {showPicker ? "Ok" : "Set background color"}
          </button>
        </div>
        {showPicker && (
          <SketchPicker
            color={selectedColor}
            onChange={handleColorChange}
            className=" absolute"
          />
        )}
      </div>
    </>
  );
};

export default ColorPicker;
