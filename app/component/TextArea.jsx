import { Textarea } from "@nextui-org/react";
const TextArea = (props) => {
  return (
    <div className="flex flex-auto pb-5">
      <Textarea
        {...props}
        //   isRequired
        variant="bordered"
        size="lg"
        radius="sm"
        // label={label}
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

export default TextArea;
