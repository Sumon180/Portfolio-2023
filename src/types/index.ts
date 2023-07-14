export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    message: string;
    newsletter: boolean;
    tos: boolean;
   
  }
  
  export interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: (checked: boolean) => void;
  }
   
  export interface PopUpMessageType {
    message: string;
    onClose: () => void;
  }