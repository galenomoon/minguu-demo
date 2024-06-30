import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileIcon } from "./ProfileIcon";
import { PiArrowLeftLight } from "react-icons/pi";
import logo from "../../public/assets/mingu-black-horizontal-logo.png";

export default function Header({ backTo }) {
  return (
    <header className="flex justify-between items-center py-3">
      <Link href={backTo || '/'}>
        {backTo ? (
          <PiArrowLeftLight size={38} />
        ) : (
          <Image src={logo} width={128} />
        )}
      </Link>
      <ProfileIcon />
    </header>
  );
}
