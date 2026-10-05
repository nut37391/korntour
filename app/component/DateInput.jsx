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
        label="Date (Required)"
        {...props}
        minValue={today(getLocalTimeZone())}
        variant="bordered"
        size="lg"
        radius="sm"
        labelPlacement="outside"
        selectorIcon={
          <Image
            src={calendarIcon}
            alt=""
            width={20}
            height={20}
            color="black"
          />
        }      />
    </div>
  );
};

export default TDatePicker;
