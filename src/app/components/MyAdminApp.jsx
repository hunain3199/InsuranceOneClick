'use client'; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import MyLayout from './ui/AdminDashboard/MyLayout';
import CreateUser from './ui/AdminDashboard/CreateUser';
// const dataProvider = jsonServerProvider(
//   'https://oneclick-server-x09s.onrender.com/api/v1'
// );
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const MyAdminApp = () => (
  <Admin layout={MyLayout} dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      create={CreateUser}
    />
    {/* <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default MyAdminApp;
