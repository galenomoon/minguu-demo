import React from "react";

export default function Input({
  value,
  onChange = () => {},
  label,
  isPassword = false,
  placeholder = "Esse é meu placeholder",
  iconProps = {
    className: "text-subtitle/60",
    size: 39,
    Element: "div",
  },
}) {
  return (
    <div className="flex flex-col text-subtitle text-lg w-full">
      <p>{label}</p>
      <div className="flex items-center w-full justify-center border-2 p-3 rounded-full ">
        <iconProps.Element
          size={iconProps.size}
          className={iconProps.className}
        />
        <input
          value={value}
          onChange={onChange}
          type={isPassword ? "password" : "text"}
          className="w-full h-full pl-2 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
