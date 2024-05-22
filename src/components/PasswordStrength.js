import React from "react";

export function PasswordStrength({ color = "white", strength = "Weak" }){

  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor: `${color}`,
      }}
      data-testid="passwordStrengthDiv"
    >
      <h4
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {strength} Password
      </h4>
    </div>
  );
};
