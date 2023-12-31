import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useState,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { PopupMessage } from "./PopUpMessage";
import { CheckboxProps, FormData } from "@/types";
import { useRouter } from "next/navigation";

const Checkbox: FC<CheckboxProps> = ({ label, value, onChange, style }) => {
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
        style={style}
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
  const router = useRouter();

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
    router.push("/home");
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className={`shadow-lg shadow-black hover:shadow-none transition-all duration-300 w-[45rem] max-w-full px-10 py-5`}
    >
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
                className="h-[44px] rounded outline-none px-3 bg-slate-800"
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
                className="h-[44px] rounded outline-none px-3 bg-slate-800"
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
                className="h-[44px] rounded outline-none px-3 bg-slate-800"
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
                className="h-[44px] rounded outline-none px-3 bg-slate-800"
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
              className="h-[44px] rounded outline-none px-3 bg-slate-800"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Besondere Wünsche</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="rounded outline-none px-3 bg-slate-800 resize-none"
            />
          </div>
        </div>
        <div className="flex flex-col my-3">
          <Checkbox
            label="Option 1"
            value={formData.newsletter}
            onChange={handleCheckboxChange("newsletter")}
            style={{ accentColor: "#6f17ff" }}
          />
          <Checkbox
            label="Agree, term and condition"
            value={formData.tos}
            onChange={handleCheckboxChange("tos")}
            style={{ accentColor: "#ff00c7" }}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-800 transition-all duration-200 text-white"
        >
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
