import React from "react";
import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
        <Menu.ResourceItem name="posts"/>
        <Menu.ResourceItem name="getInvoices"/>
        <Menu.ResourceItem name="users" />
  </Menu>
);
