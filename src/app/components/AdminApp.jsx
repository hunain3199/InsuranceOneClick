"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import MyLayout from "./Layout";
import CustomAppBar from "./CustomAppBar";
const dataProvider = jsonServerProvider("https://oneclick-server-x09s.onrender.com/api/v1");

const AdminApp = () => (
  <Admin dataProvider={dataProvider} layout={CustomAppBar}>
     
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      create={CreateUser}
    />
    {/* <Resource
    {/* <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
  </Admin>
);

export default AdminApp;
