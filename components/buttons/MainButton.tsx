import Link from "next/link";
import React from "react";

const MainButton = ({
  href,
  title,
}: {
  href: string;
  title: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="px-6 py-3 rounded-full flex items-center gradient-primary gap-2 transition-all duration-300 hover:scale-105"
    >
      {title}
    </Link>
  );
};

export default MainButton;
