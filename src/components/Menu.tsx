import React from "react";

export function Menu() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-sm">Features</div>
        <div className="text-sm">Company</div>
        <div className="text-sm">Carrers</div>
        <div className="text-sm">About</div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="text-sm">Login</div>
        <div className="text-almostBlack text-sm">Register</div>
      </div>
    </div>
  );
}
