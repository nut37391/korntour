import { DatePicker } from "@nextui-org/react";
import {
  getLocalTimeZone,
  today,
  now,
} from "@internationalized/date";
import Image from "next/image";

import calendarIcon from "../../public/images/icon/icon-calendar.png";
const TDatePicker = (props) => {
  return (
    <div
      className="flex flex-auto pb-5"
      style={{ backgroundColor: "transparent" }}
    >
      <DatePicker
        {...props}
        label="Date (Required)"
        minValue={today(getLocalTimeZone())}
        variant="bordered"
        size="lg"
        radius="sm"
        labelPlacement="outside"
        selectorIcon={
          <Image
            src={calendarIcon}
            alt="logo"
            width={20}
            height={20}
            color="black"
          />
        }
        className={{ calendar: "bg-black" }}
      />
    </div>
  );
};

export default TDatePicker;
