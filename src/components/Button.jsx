import Link from "next/link";
import React from "react";

export default function Button({ children, className = "", href = "" }) {
  return (
    <Link
      href={href}
      className={
        "flex items-center justify-center bg-primary text-white capitalize font-semibold text-lg p-3 rounded-full " +
        className
      }
    >
      <p>{children}</p>
    </Link>
  );
}
