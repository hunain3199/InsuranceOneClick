import { Layout } from "react-admin";
import CustomAppBar from "./CustomAppBar";


const MyLayout = ({children})=>{
    <Layout appBar={CustomAppBar}>
        {children}
    </Layout>
}

export default MyLayout;