import React from "react";

type InputProps = {
  //   value: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   onClick?: () => void; // 버튼용 클릭 이벤트 (필요하면)
  children?: React.ReactNode;
};

// const Input = ({ value, onChange, children }: InputProps) => {
const Input = ({ children }: InputProps) => {
  return (
    <label htmlFor="Email" className="block">
      <span className="text-sm font-medium text-gray-700">Email</span>
      <input
        type="email"
        id="Email"
        className="mt-0.5 w-full rounded border-2 border-blue-500 shadow-sm sm:text-sm px-3 h-7"
        // value={value}
        // onChange={onChange}
        // value=""
        // onChange={() => {}}
      />
      {children}
    </label>
  );
};

export default Input;
