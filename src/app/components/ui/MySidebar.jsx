
import { Sidebar } from "react-admin";

const MySidebar = (props) => (
  <Sidebar
      sx={{
          "& .RaSidebar-fixed": {
              backgroundColor: "gray",
          },
      }}
      {...props}
  />
);

export default MySidebar
