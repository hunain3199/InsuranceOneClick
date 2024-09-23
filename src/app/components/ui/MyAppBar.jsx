import { AppBar, UserMenu, useUserMenu } from "react-admin";
import {
  Typography,
  Box,
  MenuItem,
  ListItemText,
} from "@mui/material";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import Image from "next/image";
import React from "react";

const SettingsMenuItem = React.forwardRef((props, ref) => {
  const { onClose } = useUserMenu();
  return (
    <>
      <MenuItem onClick={onClose} ref={ref} {...props}>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={onClose} ref={ref} {...props}>
        <ListItemText>logout</ListItemText>
      </MenuItem>
    </>
  );
});

// Assign a display name to the component for debugging purposes
SettingsMenuItem.displayName = "SettingsMenuItem";

const CustomUserMenu = () => {
  // const { identity } = useGetIdentity();

  return (
    <>
      {/* Custom Avatar and Full Name */}
      {/* {identity?.fullName && ( */}
      <UserMenu>
        <SettingsMenuItem />
      </UserMenu>
      <span className="flex items-center justify-start pr-2 flex-shrink-0">Jofra Archer</span>
      {/* )} */}
    </>
  );
};

const MyAppBar = (props) => (
  <AppBar
    {...props}
    userMenu={<CustomUserMenu />}
    sx={{
      boxShadow: "none",
    }}
  >
    <Box display="flex" alignItems="center" width="100%">
      <Box position="relative" width={80} height={40}>
        <Image
          src={DrawerLogo}
          alt="logo_icon"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Typography
        variant="h6"
        color="inherit"
        style={{ textAlign: "center", flex: 1 }}
      >
        My
      </Typography>
    </Box>
  </AppBar>
);

export default MyAppBar;
