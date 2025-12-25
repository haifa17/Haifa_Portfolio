import React from "react";

const StatusBadge = ({ content }: { content: React.ReactNode }) => {
  return (
    <div className="mt-3 flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#9A33FF]/20 border border-[#9A33FF]/40 text-sm font-medium text-center">
      {content}
    </div>
  );
};

export default StatusBadge;
