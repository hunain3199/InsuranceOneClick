import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const CustomUserMenu = (props) => (
    <UserMenu>
        <MenuItemLink to="/profile" primaryText="My Profile" />
        {/* Add more menu items if needed */}
    </UserMenu>
);

const CustomAppBar = (props) => {
    const [profileName, setProfileName] = useState('Amir jamal'); // Replace with dynamic data if needed
    const [profilePic, setProfilePic] = useState('../../../public/assets/Slider/partner1.png'); // Replace with dynamic data if needed

    return (
        <AppBar {...props} userMenu={<CustomUserMenu />}>
            
            <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                Admin Dashboard
            </Typography>
            <Avatar src={profilePic} style={{ marginRight: '10px' }} />
            <Typography variant="body2" color="inherit">
                {profileName}
            </Typography>
        </AppBar>
    );
};

export default CustomAppBar;
