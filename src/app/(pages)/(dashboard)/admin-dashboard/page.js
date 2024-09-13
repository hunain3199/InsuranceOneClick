import { NextPage } from 'next';
import dynamic from 'next/dynamic';
const MyAdminApp = dynamic(() => import('../../../components/MyAdminApp'), {
  ssr: false,
});

const AdminDashboard = () => <MyAdminApp />;

export default AdminDashboard;
