"use client";
import React from "react";
import { Button } from "@nextui-org/button";

const TButton = ({
  text,
  onClick,
  color = "bg-royal-blue hover:bg-ocean-blue",
  size = "h-12",
  textColor = "text-white",
  formAction,
  type = "button",
  isLoading,
}) => {
  let style = `${color} ${size} ${textColor}`;
  // size: h10 = 40px, h12 = 48px
  return (
    <Button
      // color="primary"
      className={style}
      radius="sm"
      onClick={onClick}
      formAction={formAction}
      type={type}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
};

export default TButton;
