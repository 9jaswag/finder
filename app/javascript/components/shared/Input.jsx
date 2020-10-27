import React from "react";

export default ({
  type,
  name,
  id,
  value,
  placeholder,
  onChange,
  required = true,
}) => (
  <input
    type={type}
    name={name}
    id={id}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
);
