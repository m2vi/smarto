import { Bar, BarButton } from "./Input";
import { GoChevronDown } from "react-icons/go";
import Avatar from "react-avatar";

export const Topbar = () => {
  return (
    <div className="w-full py-4 h-80 flex items-center justify-between">
      <div className="max-w-2xl w-full flex justify-center items-center">
        <Bar placeholder="Search" />
        <BarButton />
      </div>
      <div className="flex flex-row items-center cursor-pointer select-none">
        <Avatar githubHandle="m2vi" round="50%" size="35px" className="no-drag" />
        <p className="px-2 small">m2vi</p>
        <GoChevronDown className="h-3 w-3 text-primary-300" />
      </div>
    </div>
  );
};

export default Topbar;
