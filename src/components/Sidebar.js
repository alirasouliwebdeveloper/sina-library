import React from "react";
import { Link } from "react-router-dom";
import { Sidebar as ShadcnSidebar, SidebarItem } from "shadcn-ui";

function Sidebar() {
  return (
    <ShadcnSidebar>
      <SidebarItem>
        <Link to="/dashboard">Dashboard</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/users">Users</Link>
      </SidebarItem>
      {/* Add more SidebarItem components for additional navigation links */}
    </ShadcnSidebar>
  );
}

export default Sidebar;
