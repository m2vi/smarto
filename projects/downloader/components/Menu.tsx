import { useRouter } from "next/router";
import YoutubeIcon from "./youtube/Icon";

export interface MenuItemProps {
  name: string;
  path: string;
  key: string;
  icon: any;
}

export const MenuItems: Array<MenuItemProps> = [
  {
    icon: YoutubeIcon,
    name: "Youtube",
    key: "yt",
    path: "/youtube",
  },
];

export const Menu = () => {
  const { push } = useRouter();

  const handleClick = (path: string) => {
    push(path, null, { shallow: true });
  };

  return (
    <ul className="flex justify-center items-center w-full h-full">
      {MenuItems.map(({ icon, key, name, path }: MenuItemProps) => {
        const Icon = icon;
        return (
          <li
            className="h-200 w-200 bg-primary-800 rounded-15 flex justify-center items-center cursor-pointer"
            onClick={() => handleClick(path)}
            key={key}
          >
            <Icon />
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
