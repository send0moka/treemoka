import * as React from "react";

type MailIconProps = React.SVGProps<SVGSVGElement>;

export default function MailIcon({ className = "", ...props }: MailIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 24 24"
      className={`justd-icons size-4 ${className}`}
      data-slot="icon"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.002 9.25a14.93 14.93 0 0 1-9.002 3 14.93 14.93 0 0 1-9.001-3m.751-4.5h16.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1"
      />
    </svg>
  );
}