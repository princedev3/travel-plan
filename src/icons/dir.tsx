import React from "react";

const Dir = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3434 1.24239L6.02589 7.58322C5.95347 7.54126 5.87731 7.50611 5.79839 7.47822L1.62756 6.06656C1.50142 6.03495 1.38947 5.9621 1.30948 5.85958C1.22948 5.75706 1.18604 5.63076 1.18604 5.50072C1.18604 5.37069 1.22948 5.24439 1.30948 5.14187C1.38947 5.03935 1.50142 4.9665 1.62756 4.93489L11.9759 1.25406C12.0435 1.23109 12.1145 1.21927 12.1859 1.21906C12.2393 1.2182 12.2925 1.22608 12.3434 1.24239Z"
        fill="#84829A"
      />
      <path
        d="M12.7459 2.02424L9.06503 12.3842C9.02444 12.505 8.94545 12.6091 8.84012 12.6807C8.73478 12.7524 8.6089 12.7875 8.4817 12.7809C8.35303 12.7868 8.22602 12.7499 8.1205 12.6761C8.01498 12.6022 7.93687 12.4955 7.89836 12.3726L6.51003 8.20174C6.48214 8.12282 6.44699 8.04666 6.40503 7.97424L12.7575 1.65674C12.7934 1.77729 12.7893 1.9062 12.7459 2.02424Z"
        fill="#84829A"
      />
    </svg>
  );
};

export default Dir;
