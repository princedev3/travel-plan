import React from "react";

const Fb = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.1084 26.2445C32.7883 26.1432 32.4202 26.0757 32.0842 26.0757C31.6681 26.0757 30.7719 26.3626 30.7719 26.9195V28.2527H32.9003V30.4971H30.7719V36.6905H28.6275V30.4971H27.5713V28.2527H28.6275V27.122C28.6275 25.4176 29.3636 24 31.14 24C31.7481 24 32.8363 24.0338 33.4284 24.2531L33.1084 26.2445Z"
        fill="#080809"
      />
    </svg>
  );
};

export default Fb;
