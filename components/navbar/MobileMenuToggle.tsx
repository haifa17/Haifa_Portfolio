import { Menu, X } from "lucide-react";

export const MobileMenuToggle = ({
  toggle: toogle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <div className="flex mr-10 lg:hidden">
    {isOpen ? (
      <X size={30} className="text-white cursor-pointer" onClick={toogle} />
    ) : (
      <Menu size={30} className="text-white cursor-pointer" onClick={toogle} />
    )}
  </div>
);
