import Link from "next/link";
import React from "react";

const SecondaryButton = ({
  href,
  title,
}: {
  href: string;
  title: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="px-6 py-3 rounded-full flex items-center gap-2 bg-gradient-to-r from-[#9A33FF] to-[#FF8660] text-white font-semibold hover:shadow-lg hover:shadow-[#9A33FF]/50 transition-all duration-300 hover:scale-105"
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
