import React from "react";

export function Menu() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-4">
        <div className="">Features</div>
        <div className="">Company</div>
        <div className="">Carrers</div>
        <div className="">About</div>
      </div>
      <div className="flex gap-4">
        <div className="">Login</div>
        <div className="">Register</div>
      </div>
    </div>
  );
}
