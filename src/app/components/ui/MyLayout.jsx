import { Layout } from "react-admin";
import MyAppBar from "./MyAppBar";
import MySidebar from "./MySidebar";
import { MyMenu } from "./MyMenu";

export const MyLayout = ({ children }) => (
    <Layout appBar={MyAppBar} sidebar={MySidebar} menu={MyMenu} appBarAlwaysOn >
        {children}
    </Layout>
);