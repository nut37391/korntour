import React from "react";
import { Input } from "@nextui-org/react";

const TextInput = (props) => {
  return (
    <div className="flex flex-auto pb-5">
      <Input
        //   isRequired
        {...props}
        variant="bordered"
        size="lg"
        radius="sm"
        labelPlacement="outside"
        placeholder={props.placeholder ?? " "}
        //   isDisabled
        // type={type} // email / text / password
        //   defaultValue="junior@nextui.org"
        fullWidth
        className=" text-black"
      />
    </div>
  );
};

export default TextInput;
