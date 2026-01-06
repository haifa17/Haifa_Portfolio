import Link from "next/link";
import React from "react";

const SecondaryButton = ({
  href,
  title,
  download,
}: {
  href: string;
  title: React.ReactNode;
  download?: boolean;
}) => {
  return (
    <Link
      download={download}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full flex items-center gap-2 border-2 border-[#9A33FF] dark:text-white font-semibold hover:bg-gradient-to-r hover:from-[#9A33FF] hover:to-[#FF8660] hover:border-transparent transition-all duration-300 hover:scale-105"
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
