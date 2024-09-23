
import { Sidebar } from "react-admin";

const MySidebar = (props) => (
  <Sidebar
      sx={{
          "& .RaSidebar-fixed": {
              backgroundColor: "transparent",
          },
      }}
      {...props}
  />
);

export default MySidebar
