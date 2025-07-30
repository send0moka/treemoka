import * as React from "react";

type XIconProps = React.SVGProps<SVGSVGElement>;

export default function XIcon({ className = "", ...props }: XIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 24 25"
      className={`justd-icons size-4 ${className}`}
      data-slot="icon"
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.403 4.25h2.882l-6.296 7.201 7.407 9.799h-5.8l-4.542-5.943-5.198 5.943H2.973l6.734-7.702L2.602 4.25h5.946l4.106 5.432 4.75-5.432Zm-1.011 15.274h1.597L7.68 5.885H5.967z"
      />
    </svg>
  );
}