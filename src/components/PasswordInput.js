import React, { useState } from "react";

export default function PasswordInput({
  id,
  name,
  value,
  onChange,
  placeholder = "Password",
  autoComplete = "current-password",
  required = false,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-group">
      <input
        id={id}
        name={name}
        type={visible ? "text" : "password"}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
