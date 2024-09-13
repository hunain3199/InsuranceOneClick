import React from 'react';
import { Sidebar } from 'react-admin';

const MySidebar = (props) => (
  <Sidebar
    {...props}
    sx={{
      "& .RaSidebar-fixed": {
        backgroundColor: "#F5F5F5",
      },
      width: '250px', 
    }}
  >
  </Sidebar>
);

export default MySidebar;
