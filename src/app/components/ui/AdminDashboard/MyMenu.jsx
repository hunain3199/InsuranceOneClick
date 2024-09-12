// in src/MyMenu.js
import * as React from 'react';
import { Menu } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    {/* <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />} />
    <Menu.Item
      to="/comments"
      primaryText="Comments"
      leftIcon={<ChatBubbleIcon />}
    /> */}
    <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />
    {/* <Menu.Item
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    /> */}
  </Menu>
);
