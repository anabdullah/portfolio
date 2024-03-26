import React from "react";

const Button = (props) => {
  return <button className="py-1 px-4 rounded-full text-white font-bold bg-slate-950">{props.value}</button>;
};

export default Button;
