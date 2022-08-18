import SidebarOption from "./SidebarOption";
import { sidebar } from "../assets/data";

const Sidebar = () => {
  return (
    <div className="">
      {sidebar?.map((sidebarItem) => (
        <SidebarOption key={sidebarItem.id} sidebarItem={sidebarItem} />
      ))}
    </div>
  );
};

export default Sidebar;
