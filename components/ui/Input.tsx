import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: IProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm text-main">
          {label}
        </label>
      )}
      <input
        className="p-2 border border-gray-200 text-main rounded-md focus:outline-none w-full"
        {...props}
      />
    </div>
  );
};

export default Input;
