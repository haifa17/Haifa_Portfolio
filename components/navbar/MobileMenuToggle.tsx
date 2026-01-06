import { Menu } from "lucide-react";

export const MobileMenuToggle = ({ toogle }: { toogle: () => void }) => (
  <div className="flex mr-10 lg:hidden" onClick={toogle}>
    <Menu size={30} className="text-white cursor-pointer" />
  </div>
);
