import { AppBar, UserMenu, useUserMenu } from "react-admin";
import { Typography, Box, MenuItem} from "@mui/material";
import DrawerLogo from "@public/assets/Logo/main-logo.svg";
import Image from "next/image";
import React from "react";

// It's important to pass the ref to allow Material UI to manage the keyboard navigation
const SettingsMenuItem = React.forwardRef((props, ref) => {
  // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
  const { onClose } = useUserMenu();
  return (
    <>
      <MenuItem
        onClick={onClose}
        ref={ref}
        {...props}
      >
        Profile
      </MenuItem>
      
      <MenuItem
        onClick={onClose}
        ref={ref}
        {...props}
      >
        Logout
      </MenuItem>
    </>
  );
});

const MyAppBar = (props) => (
  <AppBar
    {...props}
    userMenu={
      <UserMenu>
        <SettingsMenuItem />
      </UserMenu>
    }
    sx={{
      boxShadow: 'none',
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
        My Company Name
      </Typography>
    </Box>
  </AppBar>
);

export default MyAppBar;
