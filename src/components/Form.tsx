import React, { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { PopupMessage } from "./PopUpMessage";
import { CheckboxProps,FormData } from "@/types";

const Checkbox: FC<CheckboxProps> = ({ label, value, onChange }) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={handleCheckboxChange}
        className="mr-3"
        required
      />
      {label}
    </label>
  );
};

const Form: FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
    newsletter: false,
    tos: false,
  });

  const handleCheckboxChange =
    (checkboxName: keyof FormData) => (checked: boolean) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [checkboxName]: checked,
      }));
    };

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formData });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
   
  };

  return (
    <div className={`shadow-2xl w-[45rem] max-w-full px-10 py-5 border`}>
      <h4 className="text-[18.4px] font-medium mb-2">
        Enter your contact details
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 ">
          <div className="md:grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border h-[44px] rounded outline-none px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border h-[44px] rounded outline-none px-3"
                required
              />
            </div>
          </div>
          <div className=" md:grid md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label>E-Mail*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border h-[44px] rounded outline-none px-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Phone*</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border h-[44px] rounded outline-none px-3"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="border h-[44px] rounded outline-none px-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Besondere Wünsche</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="border rounded outline-none px-3"
            />
          </div>
        </div>
        <div className="flex flex-col my-3">
          <Checkbox
            label="Option 1"
            value={formData.newsletter}
            onChange={handleCheckboxChange("newsletter")}
          />
          <Checkbox
            label="Agree, term and condition"
            value={formData.tos}
            onChange={handleCheckboxChange("tos")}
          />
        </div>
        <button type="submit" className="bg-black text-white">
          Submit
        </button>
      </form>
      {showPopup && (
        <PopupMessage
          message="Form submitted successfully!"
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Form;