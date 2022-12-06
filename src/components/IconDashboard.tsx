import { capitalize } from "@utils/tools";
import Image from "next/image";
import React from "react";

const IconDashboard: IComponent<{
  name: string;
}> = ({ name }) => {
  return (
    <div
      className="icon-dashboard w-full flex items-center justify-center hover:scale-150 duration-300 z-50 rounded-3xl"
      data-tooltip={capitalize(name)}
      data-position="right center"
    >
      <span className="icon-dashboard flex justify-center items-center w-[32px]">
        <Image
          className="w-full h-full opacity-90 "
          src={`/${name}.svg`}
          alt={name}
          width={90}
          height={90}
        />
      </span>
    </div>
  );
};

export default IconDashboard;
